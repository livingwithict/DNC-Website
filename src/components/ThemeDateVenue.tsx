import React from "react";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Globe, Shield, Smartphone, Database, TrendingUp, Award, Video, LucideIcon } from "lucide-react";
import { getSessionSlug } from "../agendaData";

interface SubTheme {
  number: string;
  title: string;
  session: string;
  description: string;
  icon: LucideIcon;
  bar: string;
  iconWrap: string;
  iconText: string;
  border: string;
  hoverBorder: string;
  hoverText: string;
}

const SUB_THEMES: SubTheme[] = [
  {
    number: "01",
    title: "Governance & Resilience",
    session: "01 | Governance & Resilience",
    description: "Architecting the Digital Foundation.",
    icon: Shield,
    bar: "bg-dnc-blue",
    iconWrap: "bg-dnc-blue/10 border-dnc-blue/10",
    iconText: "text-dnc-blue",
    border: "border-dnc-blue/25",
    hoverBorder: "hover:border-dnc-blue/50",
    hoverText: "group-hover:text-dnc-blue",
  },
  {
    number: "02",
    title: "Digital Public Services",
    session: "02 | Digital Public Services",
    description: "The Gateway for Disaster Response.",
    icon: Smartphone,
    bar: "bg-teal-600",
    iconWrap: "bg-teal-600/10 border-teal-600/10",
    iconText: "text-teal-600",
    border: "border-teal-600/25",
    hoverBorder: "hover:border-teal-600/50",
    hoverText: "group-hover:text-teal-600",
  },
  {
    number: "03",
    title: "AI Sovereignty & Data",
    session: "03 | AI Sovereignty & Data",
    description: "Intelligence for a Resilient Nation.",
    icon: Database,
    bar: "bg-dnc-red",
    iconWrap: "bg-dnc-red/10 border-dnc-red/10",
    iconText: "text-dnc-red",
    border: "border-dnc-red/25",
    hoverBorder: "hover:border-dnc-red/50",
    hoverText: "group-hover:text-dnc-red",
  },
  {
    number: "04",
    title: "The Digital Economy Engine",
    session: "04 | The Digital Economy Engine",
    description: "Prosperity through Sustainable Innovation.",
    icon: TrendingUp,
    bar: "bg-dnc-orange",
    iconWrap: "bg-dnc-orange/10 border-dnc-orange/10",
    iconText: "text-dnc-orange",
    border: "border-dnc-orange/25",
    hoverBorder: "hover:border-dnc-orange/50",
    hoverText: "group-hover:text-dnc-orange",
  },
  {
    number: "05",
    title: "Leadership Dialogue",
    session: "05 | Leadership Dialogue",
    description: "Digital Roadmap to 2027.",
    icon: Award,
    bar: "bg-slate-700",
    iconWrap: "bg-slate-700/10 border-slate-700/10",
    iconText: "text-slate-700",
    border: "border-slate-700/25",
    hoverBorder: "hover:border-slate-700/50",
    hoverText: "group-hover:text-slate-700",
  },
];

export default function ThemeDateVenue() {
  const handleAddToCalendar = () => {
    const title = encodeURIComponent("Digital Nepal Conclave 2026");
    const dates = "20260917T031500Z/20260917T121500Z"; // UTC bounds
    const details = encodeURIComponent("Reimagining Governance, Data, AI & the Digital Economy.");
    const location = encodeURIComponent("The Plaza Hotel, Pulchowk, Lalitpur, Nepal");
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, "_blank");
  };

  const handleOpenMap = () => {
    const coords = "27.6756,85.3151"; 
    const url = `https://maps.app.goo.gl/ivnTe9m2cAai8x3g6`;
    window.open(url, "_blank");
  };

  return (
    <div className="w-full">
      
      {/* SECTION 1: THE EVENT PLENARY THEME & THREE STRATEGIC PILLARS */}
      <section className="bg-white py-24 relative overflow-hidden">
        {/* Soft floating grids */}
        <div className="absolute top-1/2 -left-32 w-96 h-96 bg-dnc-blue/[0.03] rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-dnc-orange/[0.03] rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          {/* Header detailing Theme intent */}
          <div className="max-w-full mb-16">
            <div className="inline-block mb-6">
              <p className="text-sm sm:text-lg text-black font-bold uppercase tracking-wider">THIS YEAR'S THEME</p>
              <span className="block w-full border-t border-dnc-blue/25 mt-2"></span>
            </div>

            <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-dnc-blue tracking-tight leading-none mb-4">
              BUILDING DIGITAL RESILIENCE
            </h2>
            <p className="font-display font-bold text-2xl sm:text-3xl text-dnc-red mb-6">
              Redefining the Governance, Data and Economy
            </p>

            <hr className="lock w-full border-t border-dnc-blue/25 mb-6" />

            <p className="text-slate-650 text-sm sm:text-base leading-relaxed font-sans max-w-full text-justify">
              Digital Nepal Conclave is an open platform for facilitating the effective dialogue to implement Digital Nepal Framework. It features keynotes from various renowned national and international experts and domain champions. It also highlights the issues of digital capability through various power panel samvad sessions, lightning talks, thematic presentations, feedback, and opinions from the domain champions and the audience.
            </p>
          </div>

          {/* Sub-Theme Grid */}
          <div className="mt-12">
            <div className="flex flex-wrap justify-center gap-5">
              {SUB_THEMES.map((theme) => {
                const IconComponent = theme.icon;
                return (
                  <Link
                    key={theme.number}
                    to={`/agenda#${getSessionSlug(theme.session)}`}
                    className={`w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] bg-slate-50/50 border-2 ${theme.border} ${theme.hoverBorder} rounded-2xl p-5 hover:bg-white hover:shadow-lg transition-all duration-300 flex flex-col group relative overflow-hidden`}
                  >
                    <div className={`absolute top-0 left-0 w-2 h-full ${theme.bar} transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300`} />
                    <div className="flex items-center gap-2.5 mb-3">
                      <div className={`w-9 h-9 shrink-0 rounded-xl ${theme.iconWrap} ${theme.iconText} border flex items-center justify-center group-hover:scale-105 transition-transform duration-300`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="font-display font-black text-lg text-slate-400">{theme.number}</span>
                    </div>
                    <h4 className={`font-display font-bold text-base text-slate-900 ${theme.hoverText} transition-colors mb-1.5`}>
                      {theme.title}
                    </h4>
                    <p className="text-xs text-slate-600 font-sans leading-relaxed">
                      {theme.description}
                    </p>
                  </Link>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* SECTION 1.5: LIVE STREAM */}
      <section className="bg-slate-50 py-14">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center gap-3 mb-8">
            <div className="flex items-center gap-2">
              <span className="p-2.5 bg-red-50 text-dnc-red rounded-xl border border-red-100">
                <Video className="w-6 h-6" />
              </span>
              <h3 className="font-display font-black text-2xl sm:text-3xl text-slate-800">
                Watch the Livestream
              </h3>
            </div>
            <span className="w-12 h-1 rounded-full bg-dnc-blue"></span>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-lg border border-slate-200 aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/qXOcFwsHvvU"
              title="Digital Nepal Conclave 2026 Livestream"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>
      </section>

      {/* SECTION 2: EVENT DATE & VENUE */}
      <section className="relative bg-gradient-to-b from-[#121652] to-[#111332] py-16 text-white overflow-hidden border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <p className="mb-3 text-sm text-dnc-orange font-bold uppercase tracking-wider">EVENT DETAILS</p>
          <h2 className="font-display font-black text-2xl sm:text-3xl text-white tracking-tight mb-8">
            When &amp; Where
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">

            <div className="bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-3xl p-8 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <span className="w-11 h-11 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-dnc-orange">
                    <Calendar className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-lg text-white leading-snug">Sunday, 20th September 2026</p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <span className="w-11 h-11 shrink-0 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-dnc-orange">
                    <MapPin className="w-5 h-5" />
                  </span>
                  <div>
                    <p className="font-display font-bold text-lg text-white leading-snug">The Plaza</p>
                    <p className="mt-1 text-sm text-slate-300 font-sans">Pulchowk, Lalitpur, Nepal</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row gap-3">
                <button
                  onClick={handleAddToCalendar}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#eb0000] hover:bg-[#c20000] text-white text-sm font-bold rounded-xl transition-all duration-300 shadow-md hover:shadow-lg cursor-pointer whitespace-nowrap"
                >
                  <Calendar className="w-4 h-4" />
                  Add to Calendar
                </button>
                <button
                  onClick={handleOpenMap}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/20 text-white text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer whitespace-nowrap"
                >
                  <Globe className="w-4 h-4 text-dnc-orange" />
                  View on Map
                </button>
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 overflow-hidden relative group min-h-[16rem]">
              <img
                src="/images/plaza.jpg"
                alt="The Plaza, Pulchowk, Lalitpur"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}