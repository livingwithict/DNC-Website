import React from "react";
import Hero from "../components/Hero";
import ThemeDateVenue from "../components/ThemeDateVenue";
import HomeDetails from "../components/HomeDetails";
import RoadblockAd from "../components/RoadblockAd";

export default function HomePage() {
  return (
    <div id="home-subpage-container" className="animate-fade-in relative z-10">
      {/* <RoadblockAd /> */}
      <Hero />
      <ThemeDateVenue />
      <HomeDetails />
    </div>
  );
}
