import { FaCheckCircle } from "react-icons/fa";
import academy from "../assets/hero-laptop.png"; // apni image yahan use karo

const features = [
  "Modern Computer Labs",
  "Live Practical Classes",
  "One Computer Per Student",
  "Industry Projects",
  "Job Interview Preparation",
  "Free Certificate",
  "Career Guidance",
];

const LearningEnvironment = () => {
  return (
    <section className="bg-[#070B1A] py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left Image */}
        <div className="relative group">

          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-purple-600/30 blur-2xl group-hover:blur-3xl transition duration-500"></div>

          <img
            src={academy}
            alt="Computer Lab"
            className="relative rounded-3xl border border-cyan-500/20 shadow-[0_0_40px_rgba(0,255,255,.15)] hover:scale-[1.02] duration-500"
          />

          {/* Floating Badge */}
          <div className="absolute bottom-6 left-6 bg-[#0E1630]/90 backdrop-blur-xl border border-cyan-500/20 rounded-2xl px-6 py-4">

            <h2 className="text-3xl font-bold text-cyan-400">
              1000+
            </h2>

            <p className="text-gray-300 text-sm">
              Students Trained
            </p>

          </div>

        </div>

        {/* Right Side */}
        <div>

          <span className="text-cyan-400 uppercase tracking-[5px] font-semibold">
            Learn In A Real Environment
          </span>

          <h2 className="text-5xl font-bold text-white mt-4 leading-tight">
            Why Students Love
            <br />
            <span className="text-cyan-400">
              ComputerWorld
            </span>
          </h2>

          <p className="text-gray-400 mt-6 leading-8">
            Learn with expert trainers in a professional computer lab,
            work on real-world projects and build the skills needed to
            start your IT career with confidence.
          </p>

          {/* Features */}
          <div className="grid sm:grid-cols-2 gap-5 mt-10">

            {features.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 text-white"
              >
                <FaCheckCircle className="text-cyan-400 text-xl" />

                <span>{item}</span>

              </div>
            ))}

          </div>

       

        </div>

      </div>
    </section>
  );
};

export default LearningEnvironment;