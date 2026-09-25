import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CheckCircle, Home } from "lucide-react";
import {
  Field,
  FormCard,
  SectionHeading,
  StatusBlock,
  SubmitButton,
  postForm,
  readableError,
  type FormState,
} from "./Registration";
import { ChoiceGroup, textareaClass } from "./VolunteersPage";

// Apps Script Web App /exec URL for the feedback form (scripts/feedback.gs)
const FEEDBACK_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyTvm1kgz-6Z08Gy_T-h2FsCilMEQhkh6VA38U_kaqjwsytYqJJWmURCfX6T21_Ufda_g/exec";

type Question =
  | { key: string; label: string; kind: "rating" | "short" | "long" }
  | { key: string; label: string; kind: "choice"; options: string[] };

const AFFILIATIONS = [
  "Government",
  "Private Sector",
  "Development Partner / International Organization",
  "NGO / INGO / Civil Society",
  "Academia / Research",
  "Startup / Entrepreneur",
  "Student",
  "Media",
  "Technology / Digital Sector",
  "Other",
];

// Keys must match COLUMNS in scripts/feedback.gs.
const SECTIONS: { title: string; questions: Question[] }[] = [
  {
    title: "Participant Profile",
    questions: [
      { key: "affiliation", label: "What best describes your affiliation?", kind: "choice", options: AFFILIATIONS },
      { key: "first_time", label: "Was this your first time attending the Digital Nepal Conclave?", kind: "choice", options: ["Yes", "No"] },
    ],
  },
  {
    title: "Registration & Pre-Event Experience",
    questions: [
      { key: "registration_rating", label: "How would you rate your overall registration experience?", kind: "rating" },
      { key: "pass_access_rating", label: "How easy was it to access your registration confirmation/digital invitation pass?", kind: "rating" },
      { key: "pre_event_info_rating", label: "How satisfied were you with the information provided before the event regarding the venue, schedule, sessions, and logistics?", kind: "rating" },
    ],
  },
  {
    title: "Entrance & On-Site Experience",
    questions: [
      { key: "checkin_rating", label: "How would you rate the check-in/registration process at the venue?", kind: "rating" },
      { key: "venue_rating", label: "How would you rate the overall venue arrangements?", kind: "rating" },
      { key: "seating_rating", label: "How satisfied were you with the seating arrangements and overall comfort?", kind: "rating" },
    ],
  },
  {
    title: "Sessions & Content",
    questions: [
      { key: "session_quality_rating", label: "How would you rate the overall quality and relevance of the sessions?", kind: "rating" },
      { key: "relevance_rating", label: "How relevant were the discussions to your professional, academic, or personal interests?", kind: "rating" },
      { key: "diversity_rating", label: "How satisfied were you with the diversity of perspectives represented across the sessions?", kind: "rating" },
      { key: "most_valuable_sessions", label: "Which session(s) did you find most valuable?", kind: "short" },
      { key: "sessions_to_improve", label: "Which session(s) or topic(s) do you think could be improved?", kind: "short" },
      { key: "missing_topics", label: "Were there any topics you would have liked to see discussed at DNC 2026?", kind: "long" },
    ],
  },
  {
    title: "Networking & Engagement",
    questions: [
      { key: "interaction_opportunities", label: "Did the Conclave provide sufficient opportunities to interact with speakers, experts, organizations, and fellow participants?", kind: "choice", options: ["Yes, definitely", "To some extent", "Not really"] },
      { key: "connections_made", label: "Did you make any meaningful professional connections during the Conclave?", kind: "choice", options: ["Yes", "No", "Not sure yet"] },
      { key: "exhibitor_rating", label: "How would you rate the opportunities to engage with exhibitors/partners/showcase participants?", kind: "rating" },
    ],
  },
  {
    title: "Overall Experience",
    questions: [
      { key: "overall_rating", label: "Overall, how satisfied are you with your experience at Digital Nepal Conclave 2026?", kind: "rating" },
      { key: "expectations", label: "To what extent did DNC 2026 meet your expectations?", kind: "choice", options: ["Exceeded my expectations", "Met my expectations", "Partially met my expectations", "Did not meet my expectations"] },
      { key: "attend_again", label: "How likely are you to attend a future edition of Digital Nepal Conclave?", kind: "choice", options: ["Very likely", "Likely", "Neutral", "Unlikely", "Very unlikely"] },
    ],
  },
  {
    title: "Final Feedback",
    questions: [
      { key: "liked_most", label: "What did you like most about Digital Nepal Conclave 2026?", kind: "long" },
      { key: "one_improvement", label: "What is one thing we could improve for the next edition?", kind: "long" },
      { key: "dnc_2027_suggestions", label: "Do you have any suggestions for themes, speakers, or sessions for DNC 2027?", kind: "long" },
      { key: "other_feedback", label: "Any other feedback or message for the organizing team?", kind: "long" },
    ],
  },
];

const QUESTIONS = SECTIONS.flatMap((s) => s.questions);
const EMPTY: Record<string, string> = Object.fromEntries(QUESTIONS.map((q) => [q.key, ""]));

function Rating({
  label,
  value,
  onSelect,
}: {
  label: string;
  value: string;
  onSelect: (value: string) => void;
}) {
  return (
    <Field label={label} required hint="1 = Very poor, 5 = Excellent">
      <div className="flex gap-2">
        {["1", "2", "3", "4", "5"].map((n) => (
          <button
            key={n}
            type="button"
            aria-pressed={value === n}
            onClick={() => onSelect(n)}
            className={`w-12 h-12 rounded-xl border text-sm font-bold transition-colors ${
              value === n
                ? "bg-dnc-blue border-dnc-blue text-white"
                : "bg-slate-50 border-slate-200 text-slate-600 hover:border-dnc-blue/40"
            }`}
          >
            {n}
          </button>
        ))}
      </div>
    </Field>
  );
}

export default function FeedbackPage() {
  const [data, setData] = useState(EMPTY);
  const [otherAffiliation, setOtherAffiliation] = useState("");
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState("");

  const set = (key: string) => (value: string) => {
    setData((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Ratings and choices are mandatory; written answers are optional.
    const missing = QUESTIONS.some((q) => (q.kind === "rating" || q.kind === "choice") && !data[q.key]);
    if (missing || (data.affiliation === "Other" && !otherAffiliation.trim())) {
      setError("Please answer all mandatory questions (marked with *).");
      return;
    }

    setState("sending");
    try {
      const affiliation =
        data.affiliation === "Other" ? `Other: ${otherAffiliation.trim()}` : data.affiliation;
      await postForm({ ...data, affiliation }, "feedback", {}, FEEDBACK_SCRIPT_URL);
      setState("success");
      setData(EMPTY);
      setOtherAffiliation("");
    } catch (err) {
      setState("error");
      setError(readableError(err));
      setTimeout(() => setState("idle"), 5000);
    }
  };

  if (state === "success") {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
        <div className="bg-white rounded-3xl p-8 max-w-md w-full text-center shadow-xl">
          <span className="inline-flex p-3 bg-emerald-50 text-emerald-600 rounded-2xl border border-emerald-200">
            <CheckCircle className="w-7 h-7" />
          </span>
          <h2 className="mt-4 font-display font-extrabold text-2xl text-slate-900 tracking-tight">
            Thank You for Your Feedback
          </h2>
          <p className="mt-2 text-sm text-slate-500 leading-relaxed">
            Your responses will help us make the next edition of Digital Nepal Conclave even better.
          </p>
          <Link
            to="/"
            className="mt-6 w-full py-3.5 bg-dnc-blue hover:bg-dnc-blue/90 transition text-white font-bold text-sm rounded-xl flex items-center justify-center gap-2 shadow-md hover:shadow-lg active:scale-[0.99]"
          >
            <Home className="w-4 h-4" />
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-14">
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Share Your Feedback
          </h1>
          <p className="mt-2 text-sm text-slate-500 max-w-2xl mx-auto leading-relaxed font-sans">
            Thank you for attending Digital Nepal Conclave 2026. Please take a few minutes to tell
            us about your experience.
          </p>
        </div>

        <FormCard title="DNC 2026 Participant Feedback">
          <form onSubmit={submit} className="space-y-8">
            {SECTIONS.map((section, i) => (
              <div
                key={section.title}
                className={`space-y-6 ${i ? "border-t border-slate-100 pt-8" : ""}`}
              >
                <SectionHeading step={i + 1} title={section.title} />
                {section.questions.map((q) => {
                  if (q.kind === "rating") {
                    return <Rating key={q.key} label={q.label} value={data[q.key]} onSelect={set(q.key)} />;
                  }
                  if (q.kind === "choice") {
                    return (
                      <div key={q.key} className="space-y-3">
                        <ChoiceGroup
                          label={q.label}
                          options={q.options}
                          value={[data[q.key]]}
                          onSelect={set(q.key)}
                          required
                        />
                        {q.key === "affiliation" && data.affiliation === "Other" && (
                          <input
                            value={otherAffiliation}
                            onChange={(e) => setOtherAffiliation(e.target.value)}
                            placeholder="Please specify"
                            className={textareaClass}
                          />
                        )}
                      </div>
                    );
                  }
                  return (
                    <Field key={q.key} label={q.label}>
                      <textarea
                        value={data[q.key]}
                        onChange={(e) => set(q.key)(e.target.value)}
                        rows={q.kind === "short" ? 2 : 4}
                        className={textareaClass}
                      />
                    </Field>
                  );
                })}
              </div>
            ))}

            <StatusBlock state={state} error={error} />
            <SubmitButton state={state} label="Submit Feedback" />
          </form>
        </FormCard>
      </div>
    </div>
  );
}
