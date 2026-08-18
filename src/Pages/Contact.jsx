import TopBar from "../components/TopBar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ContactHero from "../Components/ContactHero";
import ContactCards from "../Components/ContactCards";
import MapSection from "../Components/MapSection";
import ContactFAQ from "../Components/ContactFAQ";

export default function Contact() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main className="bg-[#050816] overflow-hidden">

        <ContactHero />

        <ContactCards />

        <MapSection />

        <ContactFAQ />

      </main>

      <Footer />
    </>
  );
}