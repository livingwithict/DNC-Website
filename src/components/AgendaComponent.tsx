import { useState } from "react";
import {
  Clock,
  MapPin,
  Briefcase,
  CloudLightning,
  Smartphone,
  Database,
  TrendingUp,
  Award,
  ArrowRight
} from "lucide-react";
import { AGENDA_DATA, AgendaItem, AgendaCategory, getSessionSlug, SESSION_THEMES } from "../agendaData";
import AgendaDetailModal from "./AgendaDetailModal";

export default function AgendaComponent() {
  const [activeFilter, setActiveFilter] = useState<"All" | AgendaCategory>("All");
  const [selectedItem, setSelectedItem] = useState<AgendaItem | null>(null);

  const filteredAgenda = activeFilter === "All"
    ? AGENDA_DATA
    : AGENDA_DATA.filter(item => item.category === activeFilter);

  const sessionGroups: { session: string; items: AgendaItem[] }[] = [];
  for (const item of filteredAgenda) {
    const lastGroup = sessionGroups[sessionGroups.length - 1];
    if (lastGroup && lastGroup.session === item.session) {
      lastGroup.items.push(item);
    } else {
      sessionGroups.push({ session: item.session, items: [item] });
    }
  }

  const getCategoryConfig = (category: string) => {
    switch (category) {
      case "Governance":
        return {
          color: "text-blue-700",
          bgColor: "bg-gradient-to-br from-blue-50/50 to-blue-25/50",
          borderColor: "border-blue-200/60",
          badgeColor: "bg-dnc-blue text-white",
          accentColor: "from-blue-0 to-dnc-blue",
          icon: Briefcase,
        };
      case "Climate":
        return {
          color: "text-emerald-700",
          bgColor: "bg-gradient-to-br from-emerald-50/50 to-emerald-25/50",
          borderColor: "border-emerald-200/60",
          badgeColor: "bg-emerald-700 text-white",
          accentColor: "from-emerald-0 to-emerald-700",
          icon: CloudLightning,
        };
      case "PublicServices":
        return {
          color: "text-teal-700",
          bgColor: "bg-gradient-to-br from-teal-50/50 to-teal-25/50",
          borderColor: "border-teal-200/60",
          badgeColor: "bg-teal-700 text-white",
          accentColor: "from-teal-0 to-teal-700",
          icon: Smartphone,
        };
      case "DataAI":
        return {
          color: "text-red-700",
          bgColor: "bg-gradient-to-br from-red-50/50 to-red-25/50",
          borderColor: "border-red-200/60",
          badgeColor: "bg-dnc-red text-white",
          accentColor: "from-red-0 to-dnc-red",
          icon: Database,
        };
      case "Economy":
        return {
          color: "text-orange-700",
          bgColor: "bg-gradient-to-br from-orange-50/50 to-orange-25/50",
          borderColor: "border-orange-200/60",
          badgeColor: "bg-dnc-orange text-white",
          accentColor: "from-orange-0 to-dnc-orange",
          icon: TrendingUp,
        };
      case "Leadership":
        return {
          color: "text-slate-700",
          bgColor: "bg-gradient-to-br from-slate-100/50 to-slate-50/50",
          borderColor: "border-slate-200/60",
          badgeColor: "bg-slate-700 text-white",
          accentColor: "from-slate-300 to-slate-700",
          icon: Award,
        };
      default:
        return {
          color: "text-slate-600",
          bgColor: "bg-slate-50/50",
          borderColor: "border-slate-200/60",
          badgeColor: "bg-slate-700 text-white",
          accentColor: "from-slate-300 to-slate-400",
          icon: Clock,
        };
    }
  };

  const getCategoryBadgeLabel = (category: string) => {
    if (category === "PublicServices") return "Digital Public Services";
    if (category === "DataAI") return "Data & AI Governance";
    if (category === "Climate") return "Climate & Disaster";
    if (category === "Leadership") return "Digital Leadership";
    if (category === "Economy") return "Digital Innovation & Economy";
    if (category === "Governance") return "Governance";
    return category;
  };

  const filters = ["All", "Governance", "Climate", "PublicServices", "DataAI", "Economy", "Leadership"] as const;

  return (
    <section id="agenda-section" className="bg-slate-50 py-20 sm:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Enhanced Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4 p-3 bg-gradient-to-br from-slate-100/60 to-slate-50/60 rounded-2xl border border-slate-200/70">
            <Clock className="w-5 h-5 text-slate-600 mr-2" />
            <span className="text-sm font-sans font-bold text-slate-700 uppercase tracking-wider">
              Sunday, 20th September 2026
            </span>
          </div>
          
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
            Schedule of Tracks & Sessions
          </h1>
        </div>

        {/* Enhanced Filter Tabs */}
        {/* <div className="mb-12">
          <div className="flex items-center gap-3 overflow-x-auto pb-4 scrollbar-subtle">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;
              const config = filter !== "All" ? getCategoryConfig(filter) : null;

              return (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`relative px-4 py-2.5 rounded-xl font-sans font-semibold text-sm whitespace-nowrap transition-all duration-300 border ${
                    isActive
                      ? filter === "All"
                        ? "bg-slate-800 to-slate-800 text-white border-slate-800 shadow-lg shadow-slate-400/20 scale-105"
                        : `${config?.badgeColor} border-transparent shadow-md shadow-slate-300/20`
                      : "bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  {filter === "All" ? `All Programs (${AGENDA_DATA.length})` : getCategoryBadgeLabel(filter)}
                </button>
              );
            })}
          </div>
        </div> */}

        {/* Session Cards with Connected Timeline */}
        <div className="flex flex-col gap-10">
          {sessionGroups.map((group) => {
            const headerConfig = getCategoryConfig(group.items[0].category);
            const HeaderIcon = headerConfig.icon;

            return (
              <div key={group.session} id={getSessionSlug(group.session)} className="scroll-mt-24">
                <div className={`rounded-3xl border ${headerConfig.borderColor} bg-white shadow-xs overflow-hidden`}>
                  <div className={`flex items-center gap-3 px-6 py-5 ${headerConfig.bgColor} border-b ${headerConfig.borderColor}`}>
                    <span className={`w-11 h-11 shrink-0 rounded-xl ${headerConfig.badgeColor} flex items-center justify-center`}>
                      <HeaderIcon className="w-5 h-5" />
                    </span>
                    <div>
                      <h2 className="font-display font-extrabold text-lg sm:text-xl text-slate-900 tracking-tight">
                        {group.session}
                      </h2>
                      {SESSION_THEMES[group.session] && (
                        <p className={`text-sm font-sans font-semibold ${headerConfig.color} mt-0.5`}>
                          {SESSION_THEMES[group.session]}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="relative px-6 py-4">
                    <span className="hidden sm:block absolute left-[38px] top-4 bottom-4 w-px bg-slate-200"></span>

                    <div className="flex flex-col">
                      {group.items.map((item, idx) => {
                        const itemConfig = getCategoryConfig(item.category);
                        return (
                          <div
                            key={idx}
                            onClick={() => setSelectedItem(item)}
                            role="button"
                            tabIndex={0}
                            onKeyDown={(e) => {
                              if (e.key === "Enter" || e.key === " ") setSelectedItem(item);
                            }}
                            className="group relative flex gap-4 sm:gap-5 py-3.5 px-2 -mx-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                          >
                            <div className="hidden sm:flex relative z-10 w-6 shrink-0 justify-center pt-1.5">
                              <span className={`w-3 h-3 rounded-full ${itemConfig.badgeColor} ring-4 ring-white`}></span>
                            </div>

                            <div className="flex-1 min-w-0">
                              <h3 className="font-display font-bold text-base sm:text-lg text-slate-900 leading-snug mb-1">
                                {item.title}
                              </h3>

                              {item.subtitle && (
                                <p className="text-sm text-slate-600 font-sans leading-relaxed">
                                  {item.subtitle}
                                </p>
                              )}

                              {item.room && (
                                <div className="mt-1.5 flex items-center gap-1.5">
                                  <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                                  <span className="text-xs font-sans font-semibold text-slate-500 uppercase tracking-wider">
                                    {item.room}
                                  </span>
                                </div>
                              )}
                            </div>

                            <div className="flex items-center gap-3 shrink-0 self-center">
                              <span className={`text-xs sm:text-sm font-sans font-bold ${itemConfig.color} whitespace-nowrap text-right`}>
                                {item.time}
                              </span>
                              <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-slate-500 group-hover:translate-x-0.5 transition-all shrink-0" />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {sessionGroups.length === 0 && (
            <div className="py-16 text-center">
              <Clock className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500 font-sans">No sessions found for this track.</p>
            </div>
          )}
        </div>

      </div>

      <AgendaDetailModal
        item={selectedItem}
        config={selectedItem ? getCategoryConfig(selectedItem.category) : null}
        categoryLabel={selectedItem ? getCategoryBadgeLabel(selectedItem.category) : ""}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}