import {
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaArrowRight,
} from "react-icons/fa";

import bg from "../assets/trainers-bg.png";
import qaswa from "../assets/qaswa.png";

export default function MsTrainer() {
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
                  MS Office Trainer
                </p>

                <h3 className="text-3xl font-bold text-white mb-4">
                  Miss Qaswa
                </h3>

                <p className="text-gray-300 leading-7 text-[16px]">
                  Miss Qaswa is our MS Office Trainer with extensive practical
                  experience in Microsoft Office applications. She helps
                  students master Word, Excel, PowerPoint and office
                  productivity skills through hands-on practice and real-life
                  assignments.
                </p>

                {/* Skills */}
                <div className="mt-6 space-y-3">

                  <div className="flex items-center gap-3">
                    <FaFileWord className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      Microsoft Word
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaFileExcel className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      Microsoft Excel
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <FaFilePowerpoint className="text-cyan-400" />
                    <span className="text-gray-300 text-sm">
                      Microsoft PowerPoint
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

                  <div className="relative w-64 h-72 rounded-2xl overflow-hidden border border-cyan-500/30 bg-slate-800">

                    <img
                      src={qaswa}
                      alt="Miss Qaswa"
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