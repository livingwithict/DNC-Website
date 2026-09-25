#!/usr/bin/env -S npx tsx
// Exports src/agendaData.ts into 3 CSVs ready to import into Strapi:
//   sessions.csv             — api::session.session
//   participants.csv         — api::participant.participant (deduped, one row per person)
//   session_participants.csv — api::session-participant.session-participant (join table)
//
// Relations are carried by `documentId`, NOT by a fabricated numeric id —
// Strapi assigns its own internal id on create, so any FK based on a
// hand-rolled sequential id would silently break on import. documentId is
// the one identifier we can set explicitly and rely on staying stable, so
// session_participants.participant / .session hold the target's documentId.
//
// A person appearing in N sessions gets exactly ONE row in participants.csv
// and N rows in session_participants.csv (one per appearance), each
// pointing at that same participant documentId with its own role/session.
//
// Usage: npx tsx scripts/export-csv.ts

import { writeFileSync, mkdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { AGENDA_DATA, Person, AgendaItem, SESSION_THEMES } from "../src/agendaData";
import { SPEAKERS_LIST, Speaker } from "../src/data/speakers";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "exports");
mkdirSync(outDir, { recursive: true });

const EVENT_DATE = "2026-09-20"; // Sunday, 2083 Ashoj 04
const TZ_OFFSET = "+05:45"; // Nepal Standard Time

function csvField(value: string): string {
  if (/[",\n]/.test(value)) return `"${value.replace(/"/g, '""')}"`;
  return value;
}

function toCsv(rows: (string | number)[][]): string {
  return rows.map((row) => row.map((v) => csvField(String(v))).join(",")).join("\n") + "\n";
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function to24Hour(time: string): string {
  const m = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
  if (!m) return "";
  let [, h, min, ap] = m;
  let hour = parseInt(h, 10);
  if (ap.toUpperCase() === "PM" && hour !== 12) hour += 12;
  if (ap.toUpperCase() === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${min}`;
}

function normalizeName(raw: string): string {
  return raw
    .replace(/\b(Mr|Ms|Mrs|Dr|Hon|Prof|Er)\.?\s*/gi, "")
    .replace(/\((Virtual|Host|TBC)\)/gi, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();
}

// Parses "Name, Designation, Organization, extra..." the same way
// AgendaDetailModal.tsx already does for display.
function parsePerson(raw: string): { name: string; designation: string; organization: string; role: string } {
  let name = raw;
  let role = "";

  const hostMatch = name.match(/^(.*)\s*\(Host\)$/i);
  if (hostMatch) {
    name = hostMatch[1].trim();
    role = "host";
  }

  const parts = name.split(",").map((p) => p.trim()).filter(Boolean);
  return {
    name: parts[0] || name,
    designation: parts[1] || "",
    organization: parts.slice(2).join(", ") || "",
    role,
  };
}

const speakerByNormalizedName = new Map<string, Speaker>();
for (const spk of SPEAKERS_LIST) {
  speakerByNormalizedName.set(normalizeName(spk.name), spk);
}

// --- Pass 1: sessions ---
type SessionRow = { documentId: string; item: AgendaItem; displayOrder: number };
const sessionRows: SessionRow[] = AGENDA_DATA.map((item, idx) => ({
  documentId: `${slugify(item.title)}-${idx + 1}`,
  item,
  displayOrder: idx + 1,
}));

const sessionsHeader = ["documentId", "title", "agenda", "description", "sessionStatus", "startTime", "endTime", "displayOrder", "isFeatured", "liveYoutubeUrl"];
const sessionsCsvRows = sessionRows.map(({ documentId, item, displayOrder }) => [
  documentId,
  item.title,
  `${item.session}\n${SESSION_THEMES[item.session] ?? ""}`,
  item.subtitle ?? "",
  "upcoming",
  `${EVENT_DATE}T${to24Hour(item.time)}:00${TZ_OFFSET}`,
  "", // endTime: not tracked per-item in the source data
  displayOrder,
  "false", // isFeatured: no signal in the source data
  "", // liveYoutubeUrl: the site's single livestream link isn't per-session
]);
writeFileSync(path.join(outDir, "sessions.csv"), toCsv([sessionsHeader, ...sessionsCsvRows]));

// --- Pass 2: dedupe participants + collect appearances ---
type Participant = { documentId: string; name: string; photo: string; bio: string; designation: string; organization: string };
const participantByKey = new Map<string, Participant>();
const participants: Participant[] = [];

type Appearance = { participantDocId: string; sessionDocId: string; role: string; displayOrder: number };
const appearances: Appearance[] = [];

function getOrCreateParticipant(p: Person, parsed: ReturnType<typeof parsePerson>): Participant {
  const key = normalizeName(parsed.name);
  const existing = participantByKey.get(key);
  if (existing) return existing;

  const spk = speakerByNormalizedName.get(key);
  const name = spk?.name ?? parsed.name;
  const participant: Participant = spk
    ? {
        documentId: `${slugify(name)}`,
        name,
        photo: spk.avatarUrl ?? p.photo ?? "",
        bio: spk.bio ?? "",
        designation: spk.title ?? parsed.designation,
        organization: spk.company ?? parsed.organization,
      }
    : {
        documentId: `${slugify(name)}`,
        name,
        photo: p.photo ?? "",
        bio: "",
        designation: parsed.designation,
        organization: parsed.organization,
      };

  participantByKey.set(key, participant);
  participants.push(participant);
  return participant;
}

sessionRows.forEach(({ documentId: sessionDocId, item }) => {
  const groups: { people?: Person[]; defaultRole: string }[] = [
    { people: item.speakers, defaultRole: item.title.startsWith("Digital Spark") ? "presenter" : "speaker" },
    { people: item.panelists, defaultRole: "panelist" },
    { people: item.moderators, defaultRole: "facilitator" },
    { people: item.sessionChairs, defaultRole: "session_chair" },
  ];

  let displayOrder = 1;
  for (const { people, defaultRole } of groups) {
    if (!people) continue;
    for (const p of people) {
      const parsed = parsePerson(p.name);
      const participant = getOrCreateParticipant(p, parsed);
      appearances.push({
        participantDocId: participant.documentId,
        sessionDocId,
        role: parsed.role || defaultRole,
        displayOrder: displayOrder++,
      });
    }
  }
});

const participantsHeader = ["documentId", "name", "photo", "bio", "designation", "organization"];
const participantsCsvRows = participants.map((p) => [p.documentId, p.name, p.photo, p.bio, p.designation, p.organization]);
writeFileSync(path.join(outDir, "participants.csv"), toCsv([participantsHeader, ...participantsCsvRows]));

const sessionParticipantsHeader = ["documentId", "role", "displayOrder", "participant", "session"];
const sessionParticipantsCsvRows = appearances.map((a) => [
  `${a.sessionDocId}--${a.participantDocId}`,
  a.role,
  a.displayOrder,
  a.participantDocId,
  a.sessionDocId,
]);
writeFileSync(path.join(outDir, "session_participants.csv"), toCsv([sessionParticipantsHeader, ...sessionParticipantsCsvRows]));

console.log(`Wrote ${sessionsCsvRows.length} sessions, ${participants.length} participants, ${appearances.length} session_participants to ${outDir}`);
