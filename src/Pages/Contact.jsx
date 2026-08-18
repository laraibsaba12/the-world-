import TopBar from "../Components/TopBar";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

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