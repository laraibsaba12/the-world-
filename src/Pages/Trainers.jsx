import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import TrainersHero from "../Components/TrainersHero";
import WebTrainer from "../Components/WebTrainer";
import MsTrainer from "../Components/MsTrainer";
import GraphicTrainer from "../Components/GraphicsTrainer";
import DigitalTrainer from "../Components/DigitalTrainer";
import EngT from "../Components/EngT";
import Footer from "../Components/Footer";

import bg from "../assets/trainers-bg.png";

export default function Trainers() {
  return (
    <main className="bg-[#050816] overflow-hidden">

      <TopBar />
      <Navbar />

      {/* Hero */}
      <TrainersHero />

      {/* Trainers Section */}
      <section
        id="trainers"
        className="relative py-20"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "2200px",
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-[#050816]/70"></div>

        {/* Trainers Content */}
        <div className="relative z-10">

          <WebTrainer />

          <MsTrainer />

          <GraphicTrainer />

          <DigitalTrainer />

          <EngT />

        </div>

      </section>

      <Footer />

    </main>
  );
}