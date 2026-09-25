import React, { useState, useEffect } from "react";
import { ArrowRight, Calendar, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const PARALLAX_IMAGES = [
  "/images/hero/hero1.jpg",
  "/images/hero/hero2.jpg",
  "/images/hero/hero3.jpg",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);

  // Handle crossfade slideshow
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % PARALLAX_IMAGES.length);
    }, 6000);
    return () => clearInterval(slideTimer);
  }, []);

  return (
    <section
      id="hero-parallax-section"
      className="relative w-full h-[85vh] sm:h-[90vh] md:h-[95vh] overflow-hidden bg-[#121652] flex items-center justify-center select-none"
    >
      {/* BACKGROUND LAYER: Crossfade carousel */}
      <div className="absolute inset-0 w-full h-full z-0">
        {PARALLAX_IMAGES.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${idx === currentBg ? "opacity-100" : "opacity-0"
              }`}
          >
            <img
              src={img}
              alt={`Himalayan Summit backdrop ${idx + 1}`}
              className="w-full h-full object-cover filter brightness-[0.7] saturate-[0.85]"
              referrerPolicy="no-referrer"
            />
          </div>
        ))}
        {/* Futuristic Grid Map overlay on top of mountains */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(46,41,146,0.3)_0%,transparent_100%)] opacity-35" />
      </div>

      {/* MIDGROUND LAYER: Linear Gradient Falloffs to assure flawless text readability */}
      <div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-b from-[#121652]/30 via-[#121652]/40 to-[#121652]/50" />

      {/* FOREGROUND CONTENT LAYER */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center h-full">

        <div className="mb-8 flex flex-col sm:flex-row items-center gap-3 sm:gap-4 bg-white/[0.05] border border-white/15 backdrop-blur-md px-5 py-2.5 sm:px-6 sm:py-3 rounded-2xl shadow-xl">
          <div className="flex items-center gap-2 text-white font-sans text-sm sm:text-base font-extrabold tracking-wider">
            <Calendar className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#eb0000]" />
            <span>SUNDAY, 20TH SEPTEMBER 2026</span>
          </div>
          <span className="hidden sm:inline text-white/30 text-sm">|</span>
          <div className="flex items-center gap-2 text-slate-100 font-sans text-sm sm:text-base font-semibold tracking-wide">
            <MapPin className="w-4 h-4 sm:w-4.5 sm:h-4.5 text-[#eb0000]" />
            <span>THE PLAZA, PULCHOWK</span>
          </div>
        </div>

        {/* Highlighted Digital Nepal Conclave Title only */}
        <h1 className="font-display font-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-white tracking-tight leading-none drop-shadow-2xl">
          Digital Nepal Conclave <span className="text-[#eb0000]">2026</span>
        </h1>
        <div className="font-display font-black text-xl sm:text-2xl md:text-3xl lg:text-4xl text-dnc-orange leading-none drop-shadow-2xl mt-4 mb-4">
          "Driving Nepal’s Digital Future"
        </div>

        {/* Primary Call to Action Controls in Centered Layout */}
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto px-4 sm:px-0">
          <Link
            to="/feedback"
            className="w-full sm:w-auto px-8 py-3.5 bg-[#eb0000] hover:bg-[#c20000] text-white font-bold rounded-2xl shadow-lg shadow-red-950/20 uppercase tracking-widest text-[11px] transition-all duration-300 transform hover:scale-[1.01] active:scale-[0.99] cursor-pointer text-center"
          >
            Feedback
          </Link>

          <Link
            to="/agenda"
            className="w-full sm:w-auto px-8 py-3.5 bg-white/5 hover:bg-white/10 text-white border border-white/20 font-bold rounded-2xl uppercase tracking-widest text-[11px] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-[1.01] active:scale-[0.99] cursor-pointer backdrop-blur-md"
          >
            Explore Schedule
            <ArrowRight className="w-4 h-4 text-dnc-orange-light" />
          </Link>
        </div>

        <p className="mt-14 font-display font-black text-lg sm:text-xl text-white uppercase tracking-wide drop-shadow-2xl">
          Thank You for Attending
          <br />
          Digital Nepal Conclave 2026
        </p>

      </div>

      {/* Bottom Scenic mountain outline path for smooth transition to layout body */}
      <div className="absolute bottom-0 inset-x-0 h-16 w-full bg-gradient-to-t from-[#121652] to-transparent pointer-events-none z-10" />
    </section>
  );
}