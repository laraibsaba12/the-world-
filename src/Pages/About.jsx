import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";

import AboutHero from "../Components/AboutHero";
import OurStory from "../Components/OurStory";
import MissionVision from "../Components/MissionVision";
import AboutFeatures from "../Components/AboutFeatures";
import WhatWeTeach from "../Components/WhatWeTeach";
import CampusSection from "../Components/CampusSection";

import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <TopBar />
      <Navbar />

      <AboutHero />

      <OurStory />

      <MissionVision />

      <AboutFeatures />

      <WhatWeTeach />

      <CampusSection />

      <Footer />
    </>
  );
}