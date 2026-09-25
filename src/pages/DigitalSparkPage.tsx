import React, { useState } from "react";
import { ArrowRight, Globe, X } from "lucide-react";
import { STAGE_PRESENTERS, STALL_EXHIBITORS, StagePresenter, StallExhibitor } from "../data";

interface DetailItem {
  name: string;
  logo?: string;
  subtitle?: string;
  subtitlePhoto?: string;
  website?: string;
  bio: string;
}

function toWebsiteHref(website: string) {
  return website.startsWith("http") ? website : `https://${website}`;
}

function parsePresenter(raw: string) {
  const parts = raw.split(",").map((p) => p.trim()).filter(Boolean);
  return {
    name: parts[0] || raw,
    title: parts[1],
    org: parts.slice(2).join(", ") || undefined,
  };
}

function CompanyLogo({ name, logo }: { name: string; logo?: string }) {
  return (
    <div className="w-16 h-16 shrink-0 flex items-center justify-center">
      {logo ? (
        <img src={logo} alt={`${name} logo`} className="max-h-full max-w-full object-contain" />
      ) : (
        <div className="w-16 h-16 rounded-xl bg-slate-100 flex items-center justify-center">
          <span className="font-display font-black text-lg text-slate-400">{name.charAt(0)}</span>
        </div>
      )}
    </div>
  );
}

function DetailCard({ item, onOpen }: { item: DetailItem; onOpen: () => void }) {
  return (
    <div
      onClick={onOpen}
      className="bg-white rounded-2xl border border-slate-100 shadow-xs p-6 hover:shadow-md transition-all duration-300 h-full cursor-pointer"
    >
      <div className="flex items-center gap-4 mb-4">
        <CompanyLogo name={item.name} logo={item.logo} />
        <div className="min-w-0 text-left">
          <h3 className="font-display font-bold text-lg text-slate-900 leading-tight">{item.name}</h3>
        </div>
      </div>
      <p className="text-sm text-slate-500 font-sans leading-relaxed line-clamp-3">{item.bio}</p>
      <div className="mt-4 flex items-center justify-between">
        {item.website ? (
          <a
            href={toWebsiteHref(item.website)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs text-dnc-blue font-sans font-bold hover:underline"
          >
            <Globe className="w-3.5 h-3.5" />
            Visit Website
          </a>
        ) : (
          <span />
        )}
        <ArrowRight className="w-3.5 h-3.5 text-dnc-blue shrink-0" />
      </div>
    </div>
  );
}

export default function DigitalSparkPage() {
  const [selected, setSelected] = useState<DetailItem | null>(null);

  const stagePresenters: DetailItem[] = STAGE_PRESENTERS.map((p: StagePresenter) => ({
    name: p.name,
    logo: p.logo,
    subtitle: p.presenter,
    subtitlePhoto: p.presenterPhoto,
    website: p.website,
    bio: p.bio,
  }));

  const stallExhibitors: DetailItem[] = STALL_EXHIBITORS.map((e: StallExhibitor) => ({
    name: e.name,
    logo: e.logo,
    website: e.website,
    bio: e.bio,
  }));

  return (
    <section className="min-h-screen bg-slate-50 py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h1 className="font-display font-black text-3xl sm:text-4xl text-slate-900 tracking-tight mb-4">
            Digital Initiative Showcase
          </h1>
          <p className="text-slate-500 font-sans text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Digital Spark features companies presenting their products live on stage and hosting
            stalls throughout the venue, giving attendees a hands-on look at what they're building.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight mb-6 text-center">
            Digital Spark
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stagePresenters.map((item) => (
              <DetailCard key={item.name} item={item} onOpen={() => setSelected(item)} />
            ))}
          </div>
        </div>

        <div>
          <h2 className="font-display font-bold text-2xl text-slate-900 tracking-tight mb-6 text-center">
            Exhibition Stalls
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {stallExhibitors.map((item, idx) => (
              <DetailCard key={`${item.name}-${idx}`} item={item} onOpen={() => setSelected(item)} />
            ))}
          </div>
        </div>
      </div>

      {selected && (
        <div
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-3xl w-full max-w-xl max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 p-2 bg-slate-50 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-800 transition shadow-2xs z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="p-6 sm:p-8">
              <div className="flex items-center gap-4 mb-4">
                <CompanyLogo name={selected.name} logo={selected.logo} />
                <div className="min-w-0 text-left">
                  <h3 className="font-display font-extrabold text-xl text-slate-950 tracking-tight leading-tight">
                    {selected.name}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-sans text-justify">
                {selected.bio}
              </p>

              {selected.subtitle && (() => {
                const { name, title, org } = parsePresenter(selected.subtitle!);
                return (
                  <div className="flex items-center gap-3 px-3 py-2.5 bg-slate-50 border border-slate-200 rounded-xl mt-4">
                    <div className="w-12 h-12 shrink-0 rounded-lg bg-white border border-slate-200 flex items-center justify-center overflow-hidden">
                      {selected.subtitlePhoto ? (
                        <img src={selected.subtitlePhoto} alt={name} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-base font-display font-bold text-slate-400">
                          {name.replace(/^(Mr\.|Ms\.|Mrs\.|Dr\.|Prof\.)\s*/g, "").charAt(0)}
                        </span>
                      )}
                    </div>
                    <div className="flex flex-col justify-center min-w-0 gap-0.5">
                      <span className="text-sm font-bold text-slate-900 leading-tight truncate">{name}</span>
                      {title && (
                        <span className="text-xs font-sans font-medium text-slate-600 leading-tight truncate">{title}</span>
                      )}
                      {org && (
                        <span className="text-xs font-sans text-slate-400 leading-tight truncate">{org}</span>
                      )}
                    </div>
                  </div>
                );
              })()}

              {selected.website && (
                <div className="flex justify-end mt-4">
                  <a
                    href={toWebsiteHref(selected.website)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-dnc-blue/20 bg-dnc-blue/5 text-dnc-blue text-xs sm:text-sm font-sans font-bold hover:bg-dnc-blue/10 transition-colors"
                  >
                    <Globe className="w-3.5 h-3.5" />
                    Visit Website
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
