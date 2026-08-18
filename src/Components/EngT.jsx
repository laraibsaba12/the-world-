import {
  FaBullhorn,
  FaGoogle,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

import bg from "../assets/trainers-bg.png";
import eng from "../assets/eng.png";

export default function EnglishTrainer() {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050816]/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Trainer Card */}
        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-lg">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div data-aos="fade-right">

              <p className="text-cyan-400 uppercase text-sm tracking-widest mb-2">
             English Language Trainer
              </p>

              <h3 className="text-3xl font-bold text-white mb-4">
                Sir Adil
              </h3>


              <p className="text-gray-300 leading-7 text-[16px]">
              Sir Adil is our English Language Trainer with a strong focus on communication, grammar, vocabulary and confident speaking. He helps students improve their English through practical activities, interactive lessons and real-world conversations. </p>
            

              {/* Skills */}
              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">
                  <FaGoogle className="text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                   English Grammar & Vocabulary
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBullhorn className="text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                   Spoken English & Communication
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaChartLine className="text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                 Reading, Writing & Presentation Skills
                  </span>
                </div>

              </div>

            </div>

            {/* Right Image */}
            <div
              className="flex justify-center"
              data-aos="fade-left"
            >
              <div className="relative">

                <div className="absolute -inset-2 bg-cyan-500/20 blur-xl rounded-2xl"></div>

                <div className="relative w-64 h-72 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-800 flex items-center justify-center">

                  {/* Replace with your image later */}

                  
                  <img
                    src={eng}
                    alt="Sir Adil"
                    className="w-full h-full object-cover"
                  />
                

                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}