import React from "react";
import { ArrowUpRight, User, Building2, Video, Check } from "lucide-react";

const REGISTRATION_URL = "https://register.digitalconclave.org";

const TIERS = [
  {
    label: "Participant Registration",
    icon: <User className="w-5 h-5" />,
    price: "NPR 5,000 - 7,500",
    details: ["General, Student and Standard attendee tiers", "Access to sessions, kit, meals & networking"],
  },
  {
    label: "Digital Solutions Showcase",
    icon: <Building2 className="w-5 h-5" />,
    price: "Rs. 50,000 / stall",
    details: ["8 ft x 8 ft stall, 2 representatives", "Stage slot & event day media coverage"],
  },
  {
    label: "Media Registration",
    icon: <Video className="w-5 h-5" />,
    price: "Complimentary",
    details: ["For accredited journalists & press", "Valid press ID required"],
  },
];

export default function RegisterRedirectPage() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dnc-blue/5 text-dnc-blue text-sm font-sans font-bold rounded-full uppercase tracking-wider mb-3">
          DNC 2026 Registration
        </span>
        <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
          Registration is now open
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-500 max-w-xl mx-auto leading-relaxed font-sans">
          Registrations for the Digital Nepal Conclave 2026 are being handled on our dedicated
          registration portal. Head over there to sign up.
        </p>

        <a
          href={REGISTRATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-dnc-blue hover:bg-dnc-blue/90 text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg active:scale-[0.99] transition-all duration-300"
        >
          Go to register.digitalconclave.org
          <ArrowUpRight className="w-4 h-4" />
        </a>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {TIERS.map((tier) => (
            <div
              key={tier.label}
              className="flex flex-col bg-white border border-slate-200 rounded-3xl p-6 shadow-sm"
            >
              <span className="w-11 h-11 rounded-2xl bg-dnc-blue/10 border border-dnc-blue/10 text-dnc-blue flex items-center justify-center mb-4">
                {tier.icon}
              </span>
              <h2 className="font-display font-bold text-base text-slate-900">{tier.label}</h2>
              <p className="font-display font-black text-lg text-dnc-blue mt-1">{tier.price}</p>
              <ul className="mt-3 space-y-2">
                {tier.details.map((d) => (
                  <li key={d} className="flex gap-1.5 text-xs text-slate-600 leading-snug">
                    <Check className="w-3.5 h-3.5 text-dnc-orange shrink-0 mt-0.5" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
