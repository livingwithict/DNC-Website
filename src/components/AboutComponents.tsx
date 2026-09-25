import React from "react";
import { useParams, useNavigate, Navigate, Link } from "react-router-dom";
import { Info, Building2, Users, ShieldCheck, HeartHandshake, Award, ExternalLink, Globe, Sparkles, Shield, Smartphone, Database, TrendingUp } from "lucide-react";
import { TEAM_MEMBERS,} from "../data";
import { SESSION_THEMES, getSessionSlug } from "../agendaData";

const SUB_THEME_FOCUS = [
  {
    title: "Governance & Resilience",
    session: "01 | Governance & Resilience",
    description: SESSION_THEMES["01 | Governance & Resilience"],
    icon: Shield,
    accent: "bg-dnc-blue",
    text: "text-dnc-blue",
  },
  {
    title: "Digital Public Services",
    session: "02 | Digital Public Services",
    description: SESSION_THEMES["02 | Digital Public Services"],
    icon: Smartphone,
    accent: "bg-teal-600",
    text: "text-teal-600",
  },
  {
    title: "AI Sovereignty & Data",
    session: "03 | AI Sovereignty & Data",
    description: SESSION_THEMES["03 | AI Sovereignty & Data"],
    icon: Database,
    accent: "bg-dnc-red",
    text: "text-dnc-red",
  },
  {
    title: "The Digital Economy Engine",
    session: "04 | The Digital Economy Engine",
    description: SESSION_THEMES["04 | The Digital Economy Engine"],
    icon: TrendingUp,
    accent: "bg-dnc-orange",
    text: "text-dnc-orange",
  },
  {
    title: "Leadership Dialogue",
    session: "05 | Leadership Dialogue",
    description: SESSION_THEMES["05 | Leadership Dialogue"],
    icon: Award,
    accent: "bg-slate-700",
    text: "text-slate-700",
  },
];

export default function AboutComponents() {
  // 1. Grab the section parameter from the URL (e.g., /about/team -> section = "team")
  const { section } = useParams<{ section: string }>();
  const navigate = useNavigate();

  // 2. Validate the section. If someone goes to /about or /about/invalid, default to "event"
  const validSections = ["event", "organizer", "team"];
  const isValidSection = section && validSections.includes(section);

  if (!isValidSection) {
    return <Navigate to="/about/event" replace />;
  }

  // Safely cast it now that we know it's valid
  const activeSection = section as "event" | "organizer" | "team";

  const renderEvent = () => (
    <div id="about-event-view" className="space-y-12">
      {/* Introduction Card */}
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs">
        <div className="max-w-auto mx-auto space-y-6 text-justify">
          <span className="text-sm font-bold font-sans text-dnc-blue tracking-widest uppercase block mb-2">5th Edition</span>
          <h2 className="font-display font-extrabold text-3xl text-dnc-black mb-6 leading-tight">
            The Biggest Digital Conference in Nepal
          </h2>
          <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
            <p>
              The <strong>Digital Nepal Conclave</strong> serves as a premier national forum for policy innovation and technological discourse, dedicated to accelerating the country&apos;s digital transformation. It functions as a primary catalyst for deliberations on digital governance, ICT infrastructure, and the expanding digital trade ecosystem, fostering a culture of innovation and sustainable economic expansion.
            </p>
            <p>
              Since its inception, this gathering has established an elite assembly of state policymakers, industry captains, and academic visionaries. By convening diverse stakeholders from the private sector and civil society, the summit facilitates high-level dialogue on evolving priorities and strategic frameworks essential for a future-ready technological landscape.
            </p>
            <p>
              Establishing itself as a credible architecture for institutional action, the Conclave has become the fundamental platform for cross-sectoral collaboration and knowledge exchange. It serves to showcase digital excellence and foster strategic partnerships that are instrumental in building a digitally resilient and globally competitive nation.
            </p>
            <p>
              Advancing the momentum toward a digitally empowered nation, the <strong>Digital Nepal Conclave 2026 – 5th Edition</strong> will explore the transformative potential of data ecosystems and robust public infrastructure as primary catalysts for socio-economic evolution.
            </p>
          </div>
        </div>
      </div>

      {/* Strategic Focus Deliberation Blocks */}
      <div>
        <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-905 mb-8 text-center">
          Sub-Themes & Deliberations
        </h3>

        <div className="flex flex-wrap justify-center gap-8">
          {SUB_THEME_FOCUS.map((theme) => {
            const IconComponent = theme.icon;
            return (
              <Link
                key={theme.title}
                to={`/agenda#${getSessionSlug(theme.session)}`}
                className="group w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.334rem)] bg-white rounded-3xl p-6 border border-slate-100 shadow-xs relative overflow-hidden hover:shadow-md transition-all duration-300"
              >
                <div className={`absolute top-0 left-0 w-2 h-full ${theme.accent}`}></div>
                <h4 className={`font-display font-bold text-md ${theme.text} mb-3 flex items-center gap-2 group-hover:underline`}>
                  <IconComponent className="w-4 h-4" />
                  {theme.title}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">{theme.description}</p>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Theme Insight Card */}
      <div className="bg-white text-white rounded-3xl p-8 shadow-xs border border-slate-100">
        <h4 className="font-display font-extrabold text-lg sm:text-xl text-dnc-blue mb-3">
          Behind the Theme: BUILDING DIGITAL RESILIENCE
        </h4>
        <div className="space-y-4 text-sm sm:text-sm text-slate-900 leading-relaxed">
          <p>
            This strategic theme underscores the vital synergy between digital governance reform, secure data frameworks, and robust public infrastructure, while placing climate and disaster resilience at the heart of Nepal's digital future. It emphasizes the pivotal role of artificial intelligence and frontier technologies in driving Nepal's socio-economic evolution and fostering a sustainable innovation culture.
          </p>
          <p>
            The Conclave explores the utilization of data-centric governance and cross-sectoral collaboration to refine public service delivery, enhance institutional resilience, and accelerate the digital trade ecosystem. Deliberations will further address digital public services, AI governance, and digital leadership, ensuring that the transition toward a global digital economy remains inclusive and equitable for all communities and sectors across the nation.
          </p>
        </div>
      </div>
    </div>
  );

  const renderOrganizer = () => (
    <div id="about-organizer-view" className="space-y-12">
      <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xs">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 space-y-4">
            <h2 className="font-display font-extrabold text-2xl sm:text-3xl text-dnc-black">
              ICT Foundation Nepal (IFN)
            </h2>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Founded in 2021, <strong>ICT Foundation Nepal</strong> is a nonprofit, non-distributing organization, which promotes innovation, startups, and ideas guided by the vision to build Digital Nepal promoting new ideas and startups.
              </p>
              <p>
                ICT Foundation Nepal engages and organizes a global network of public and private sector partners who develop community, national and regional innovative project models as the foundation to build e-society.
              </p>
              <p>
                ICT Foundation is an organization aimed to work towards the country’s mission of digital transformation. It works in policy level plans, discussions and execution of various ICT initiatives in collaboration to local and central level government bodies. It has been supporting the Nepali startups who work in the field of digital literacy with their growth and opportunity scalability.
              </p>
            </div>
          </div>

          {/* Parent grid item container */}
          <div className="md:col-span-4 flex flex-col gap-4">
            {/* 1. The Image Placeholder Box */}
            <div className="bg-slate border border-slate-100 rounded-2xl p-6 flex flex-col items-center justify-center h-[200px] w-full group overflow-hidden relative">
              <img 
                src="/images/IFN-Logo.png" 
                alt="ICT Foundation Nepal Logo" 
                className="h-50 w-auto object-contain max-w-full transition-transform duration-300 group-hover:scale-105" 
              /> 
            </div>

            {/* 2. The Action Button */}
            <div className="flex justify-center">
              <a
                href="https://ictfoundation.org.np"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-dnc-blue hover:bg-opacity-90 text-white font-sans font-bold text-xs sm:text-sm rounded-xl transition duration-200 shadow-2xs hover:shadow-xs"
              >
                <Globe className="w-4 h-4 text-white" />
                Visit Official IFN Website
                <ExternalLink className="w-3.5 h-3.5 opacity-80" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Sister Initiatives list */}
      <div>
        <div className="text-center mb-8">
          <h3 className="font-display font-bold text-xl sm:text-2xl text-slate-900">
            Pioneering National Initiatives
          </h3>
          <p className="text-sm font-semibold text-slate-500 mt-1 uppercase tracking-wide">
            Our ecosystem of tech progress
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Digital Samvad", logo: "/images/logos/digital-samvad.jpg" },
            { name: "Digital Nepal Conclave", logo: "/images/logos/dnc-logo.png" },
            { name: "Digital Karnali Conclave", logo: "/images/logos/dkc-logo.png" },
            { name: "Digital Madhesh Conclave", logo: "/images/logos/dmc-logo.png" },
            { name: "Nepal AI Summit", logo: "/images/logos/naic.png" },
            { name: "Startup & Idea Fest", logo: "/images/logos/snif.png" },
            { name: "ICT Gyan", logo: "/images/logos/ict-gyan.png" },
            { name: "Digital Leadership Dialogue", logo: "/images/logos/dld-logo.png" }
          ].map((item, index) => (
            <div key={index} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:border-dnc-blue transition-all duration-200">
              {/* Logo Placeholder */}
              <div className="h-40 rounded-lg mb-4 flex items-center justify-center overflow-hidden">
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`}
                  className="h-full w-full object-contain p-2"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <h4 className="font-display font-bold text-base text-slate-900 mb-1 leading-tight">{item.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderTeam = () => (
    <div id="about-team-view" className="space-y-16 animate-infinite-slide">
      {/* Team Section */}
      <div>
        <div className="text-center mb-10 max-w-lg mx-auto">
          <span className="px-2 py-1 bg-dnc-blue/5 text-dnc-blue text-2xl font-bold rounded font-sans uppercase tracking-widest">
            Patrons & Sectretariat of IFN
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {TEAM_MEMBERS.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-2xs flex flex-col items-center text-center hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
            >
              {/* Circular Photo Placeholder */}
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-slate-50 border border-slate-100 font-display font-bold text-slate-400 flex items-center justify-center mb-4 overflow-hidden group-hover:border-dnc-orange/30 transition-colors duration-300 shrink-0">
                {member.imageUrl ? (
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl tracking-wider">{member.avatarText || "IFN"}</span>
                )}
              </div>

              {/* Name */}
              <h4 className="font-display font-bold text-base text-slate-900 leading-tight mb-1">
                {member.name}
              </h4>

              {/* Designation */}
              <p className="text-sm font-medium text-dnc-blue leading-snug">
                {member.role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Patrons Section */}
      {/* <div id="advisory-patrons">
        <div className="text-center mb-10 max-w-lg mx-auto">
          <span className="px-2 py-1 bg-dnc-blue/5 text-dnc-blue text-2xl font-bold rounded font-sans uppercase tracking-widest">
            Our Patrons
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {PATRONS.map((patron, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-4 sm:p-6 border border-slate-100 shadow-2xs flex flex-col items-center text-center hover:shadow-md hover:border-slate-200 transition-all duration-300 group"
            >
              <div className="w-24 h-24 sm:w-36 sm:h-36 rounded-full bg-slate-50 border border-slate-100 font-display font-bold text-slate-400 flex items-center justify-center mb-4 overflow-hidden group-hover:border-dnc-blue/30 transition-colors duration-300 shrink-0">
                {patron.imageUrl ? (
                  <img src={patron.imageUrl} alt={patron.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-xl tracking-wider text-slate-300">Patron</span>
                )}
              </div>

              <h4 className="font-display font-bold text-base text-slate-900 leading-tight mb-1">
                {patron.name}
              </h4>

              <p className="text-sm font-medium text-dnc-blue leading-snug">
                {patron.role}
              </p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );

  return (
    <div id="about-group-page" className="bg-slate-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="font-display font-extrabold text-3xl sm:text-4xl text-dnc-black">
            Who we are
          </h1>

          {/* Sub Navigation Pills */}
          <div className="mt-6 inline-flex p-1.5 bg-slate-100 rounded-2xl border border-slate-200/50">
            <button
              onClick={() => navigate("/about/event")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-semibold transition ${
                activeSection === "event" ? "bg-white text-dnc-blue shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              About the Event
            </button>
            <button
              onClick={() => navigate("/about/organizer")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-semibold transition ${
                activeSection === "organizer" ? "bg-white text-dnc-orange shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              The Organizer (IFN)
            </button>
            <button
              onClick={() => navigate("/about/team")}
              className={`px-5 py-2 rounded-xl text-sm sm:text-sm font-semibold transition ${
                activeSection === "team" ? "bg-white text-dnc-black shadow-xs" : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Team & Patrons
            </button>
          </div>
        </div>

        {/* Selected subsection rendering */}
        {activeSection === "event" && renderEvent()}
        {activeSection === "organizer" && renderOrganizer()}
        {activeSection === "team" && renderTeam()}

      </div>
    </div>
  );
}