import {
  FaPaintBrush,
  FaPalette,
  FaImage,
  FaArrowRight,
} from "react-icons/fa";

import bg from "../assets/trainers-bg.png";
import muslim from "../assets/muslim.png";

export default function GraphicsTrainer() {
  return (
    <section className="py-20 px-6 bg-[#050816]">
      <div className="max-w-6xl mx-auto">

        {/* Trainer Card */}
        <div
          className="relative rounded-3xl overflow-hidden border border-cyan-500/20"
          style={{
            backgroundImage: `url(${bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#050816]/80"></div>

          {/* Content */}
          <div className="relative z-10 p-8">

            <div className="grid lg:grid-cols-2 gap-10 items-center">

              {/* Left Content */}
              <div data-aos="fade-right">

                <p className="text-cyan-400 uppercase text-sm tracking-widest mb-2">
                  Graphic Designing & UI/UX Design Trainer
                </p>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Sir Muslim
                </h3>

                <p className="text-gray-300 leading-7 text-[16px]">
                  Sir Muslim is our Graphic Designing and UI/UX Design Trainer
                  with professional experience in branding, visual communication,
                  and user-centered design. He helps students master industry
                  tools while developing creative thinking, modern design
                  principles, and practical skills required for professional
                  graphic and UI/UX projects.
                </p>

                {/* Skills */}
                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    <FaPaintBrush className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      Adobe Photoshop
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaPalette className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      Adobe Illustrator
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaImage className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      UI/UX Design (Figma) & Logo Branding
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

                   <img
                    src={muslim}
                     alt="Sir Muslim - Graphic Designing Trainer" className="w-full h-full object-cover" />
                  </div>

                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}