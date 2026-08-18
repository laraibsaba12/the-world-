import {
  FaCode,
  FaReact,
  FaNodeJs,
  FaArrowRight,
} from "react-icons/fa";

import bg from "../assets/trainers-bg.png";
import webt from "../assets/webt.png";

export default function WebTrainer() {
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
                  Web Development Trainer
                </p>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Sir Subhan Ali
                </h3>

                <p className="text-gray-300 leading-7 text-[16px]">
                  Sir Subhan Ali is our Web Development Trainer and Full Stack
                  Developer. He teaches students modern web technologies through
                  practical projects, helping them build responsive websites and
                  real-world applications using the latest development tools.
                </p>

                {/* Skills */}
                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    <FaCode className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      HTML, CSS & JavaScript
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaReact className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      React.js & Tailwind CSS
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaNodeJs className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      Node.js, Express & MongoDB
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
                      src={webt}
                      alt="Sir Subhan Ali"
                      className="w-full h-full object-cover"
                    />
                   

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