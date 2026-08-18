import Silk from "./Silk";
import SplitText from "./SplitText";
import laptop from "../assets/hero-laptop.png";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden pt-32"
      style={{
        fontFamily: '"Manrope", Arial, sans-serif',
      }}
    >
      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 -z-10">
        <Silk
          color="#4B3FFF"
          speed={5}
          scale={1}
          noiseIntensity={1.2}
        />
      </div>

      <div className="absolute inset-0 bg-black/45 -z-10"></div>

      {/* ================= HERO ================= */}

      <div className="max-w-7xl mx-auto min-h-screen flex items-center justify-between px-10">

        {/* ================= LEFT ================= */}

        <div className="w-1/2">

          {/* Welcome */}

          <p
            className="hero-welcome text-cyan-400 font-semibold tracking-[3px] uppercase mb-5 text-sm"
          >
            Welcome to ComputerWorld
          </p>

          {/* ================= MAIN HEADING ================= */}

          <div className="hero-heading">

            <SplitText
              text="Build Your Future with IT Skills"
              className="text-6xl font-extrabold leading-[1.08] tracking-[-1.8px] text-white"
            />

          </div>

          {/* ================= DESCRIPTION ================= */}

          <p className="hero-description mt-8 text-gray-300 text-lg leading-9 max-w-xl font-medium">
            Learn Web Development, AI & Machine Learning,
            Cyber Security, Graphic Design, Digital Marketing
            and Cloud Computing through real-world projects
            guided by expert instructors.
          </p>

          {/* ================= BUTTON ================= */}

          <div className="flex gap-5 mt-10">

            <button
              type="button"
              onClick={() => navigate("/courses#explore-courses")}
              className="hero-button px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition text-white font-bold"
            >
              Explore Courses
            </button>

          </div>

          {/* ================= STATS ================= */}

          <div className="flex gap-10 mt-12 text-white">

            <div>
              <h2 className="hero-stat-number text-3xl font-bold">
                1000+
              </h2>

              <p className="hero-stat-label text-gray-400">
                Students
              </p>
            </div>

            <div>
              <h2 className="hero-stat-number text-3xl font-bold">
                20+
              </h2>

              <p className="hero-stat-label text-gray-400">
                Courses
              </p>
            </div>

            <div>
              <h2 className="hero-stat-number text-3xl font-bold">
                95%
              </h2>

              <p className="hero-stat-label text-gray-400">
                Success Rate
              </p>
            </div>

          </div>

        </div>

        {/* ================= RIGHT ================= */}

        <div className="w-1/2 flex justify-end">

          <img
            src={laptop}
            alt="Laptop"
            className="w-[650px] animate-float drop-shadow-[0_0_80px_rgba(59,130,246,.5)]"
          />

        </div>

      </div>

      {/* ================= FONT STYLES ================= */}

      <style>{`

        /* Main premium heading */
        .hero-heading,
        .hero-heading span {
          font-family:
            "Plus Jakarta Sans",
            "Manrope",
            Arial,
            sans-serif !important;
        }

        /* Welcome text */
        .hero-welcome {
          font-family:
            "Manrope",
            Arial,
            sans-serif;
        }

        /* Description */
        .hero-description {
          font-family:
            "Manrope",
            Arial,
            sans-serif;
        }

        /* Button */
        .hero-button {
          font-family:
            "Manrope",
            Arial,
            sans-serif;
        }

        /* Stats */
        .hero-stat-number {
          font-family:
            "Plus Jakarta Sans",
            "Manrope",
            Arial,
            sans-serif;
        }

        .hero-stat-label {
          font-family:
            "Manrope",
            Arial,
            sans-serif;
        }

      `}</style>

    </section>
  );
};

export default Hero;