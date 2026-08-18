import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import AdmissionHero from "../Components/AdmissionHero";
import AdmissionProcess from "../Components/AdmissionProcess";
import AdmissionForm from "../Components/AdmissionForm";
import RequiredDocuments from "../Components/RequiredDocuments";
import AdmissionFAQ from "../Components/AdmissionFAQ";
import CallToAction from "../Components/CallToAction";

export default function Admission() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === "#admission-form") {
      setTimeout(() => {
        const form = document.getElementById("admission-form");

        if (form) {
          form.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      <TopBar />
      <Navbar />

      <main className="bg-[#050816] overflow-hidden">

        <AdmissionHero />

        <AdmissionProcess />

        <AdmissionForm />

        <RequiredDocuments />

        <AdmissionFAQ />

        <CallToAction />

      </main>

      <Footer />
    </>
  );
}