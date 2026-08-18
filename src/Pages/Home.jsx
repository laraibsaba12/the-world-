import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import PopularCourses from "../Components/PopularCourses";
import WhyChooseUs from "../Components/WhyChooseUs";
import CareerPaths from "../Components/CareerPaths";
import LearningEnvironment from "../Components/LearningEnvironment";
import Footer from "../Components/Footer";

function Home() {
  return (
    <>
      <TopBar />
      <Navbar />
      <Hero />
      <PopularCourses />
      <WhyChooseUs />
      <CareerPaths />
      <LearningEnvironment />
      <Footer />
    </>
  );
}

export default Home;