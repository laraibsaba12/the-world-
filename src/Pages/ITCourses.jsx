import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import CourseHero from "../Components/CourseHero";
import CourseCategories from "../Components/CourseCategories";
import WebDevelopmentSection from "../Components/WebDevelopmentSection";
import MS from "../Components/MS";
import Digital from "../Components/Digital";
import Graphics from "../Components/Graphics";
import UI from "../Components/UI";
import Language from "../Components/Language";
import Footer from "../Components/Footer";

export default function ITCourses() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");

      setTimeout(() => {
        const element = document.getElementById(id);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 500);
    }
  }, [location]);

  return (
    <>
      <TopBar />
      <Navbar />
      <CourseHero />
      <CourseCategories />

      <WebDevelopmentSection />
      <MS />
      <Digital />
      <Graphics />
      <UI />
      <Language />

      <Footer />
    </>
  );
}