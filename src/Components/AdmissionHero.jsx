import {
  FaArrowRight,
  FaPlay,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function AdmissionHero() {
  const navigate = useNavigate();

  // Apply Now
  const handleApplyNow = () => {
    const section = document.getElementById("admission-form");

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Explore Courses
  const handleExploreCourses = () => {
    navigate("/courses#explore-courses");
  };

  return (
    <section className="admission-hero relative min-h-[calc(100vh-145px)] overflow-hidden bg-[#050816]">

      {/* ================= BACKGROUND VIDEO ================= */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          objectPosition: "center center",
          filter: "brightness(0.82) saturate(0.9)",
        }}
      >
        <source src="/admission.mp4" type="video/mp4" />
      </video>

      {/* ================= BACKGROUND IMAGE ================= */}
      <img
        src="/admission-bg.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-[0.08] pointer-events-none"
      />

      {/* ================= LIGHT VIDEO OVERLAY ================= */}
      <div className="absolute inset-0 bg-[#050816]/5 pointer-events-none" />

      {/* Left readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/50 via-[#050816]/15 to-transparent pointer-events-none" />

      {/* Bottom protection */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/65 via-transparent to-[#050816]/10 pointer-events-none" />

      {/* ================= CYAN GLOW ================= */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-500/12 blur-[150px] pointer-events-none" />

      {/* Purple Glow */}
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] rounded-full bg-purple-600/10 blur-[170px] pointer-events-none" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[200px] rounded-full bg-cyan-400/8 blur-[130px] pointer-events-none" />

      {/* ================= SUBTLE GRID ================= */}
      <div className="absolute inset-0 opacity-[0.025] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-12 pb-20">

        <div className="min-h-[calc(100vh-220px)] flex items-center">

          {/* ================= LEFT SIDE ================= */}
          <div className="max-w-[760px]">

            {/* BADGE */}
            <div className="badge-animation">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] backdrop-blur-xl text-cyan-300 text-[11px] md:text-xs font-semibold uppercase tracking-[3px]">

                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#22d3ee]" />

                <FaUserGraduate className="text-cyan-400" />

                Admissions Open 2026
              </span>
            </div>

            {/* SMALL HEADING */}
            <p className="small-heading mt-7 text-cyan-400 text-xs md:text-sm font-semibold uppercase tracking-[3px]">
              Your journey starts here
            </p>

            {/* MAIN HEADING */}
            <h1 className="mt-4 font-heading text-[42px] sm:text-[50px] md:text-[58px] lg:text-[68px] xl:text-[72px] font-extrabold leading-[1.02] tracking-[-2.5px] text-white">

              <span className="block overflow-hidden">
                <span className="hero-line line-one inline-block">
                  Start Your
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="hero-line line-two inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  IT Career
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="hero-line line-three inline-block">
                  With ComputerWorld
                </span>
              </span>

            </h1>

            {/* DECORATIVE LINE */}
            <div className="fade-content mt-6 flex items-center gap-3">
              <div className="w-16 h-[2px] rounded-full bg-cyan-400" />
              <div className="w-6 h-[2px] rounded-full bg-cyan-400/50" />
              <div className="w-2 h-[2px] rounded-full bg-cyan-400/30" />
            </div>

            {/* DESCRIPTION */}
            <p className="fade-content mt-6 max-w-[620px] text-[15px] md:text-[16px] lg:text-[17px] text-gray-300 leading-7">
              Prepare yourself for a successful career in the technology industry.
            </p>

            {/* BUTTONS */}
            <div className="fade-content flex flex-wrap gap-4 mt-7">

              {/* APPLY NOW */}
              <button
                type="button"
                onClick={handleApplyNow}
                className="group px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-sm md:text-base font-semibold flex items-center gap-3 shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.45)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Apply Now

                <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* EXPLORE COURSES */}
              <button
                type="button"
                onClick={handleExploreCourses}
                className="group px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.07] backdrop-blur-xl hover:bg-white/[0.14] text-white text-sm md:text-base font-semibold flex items-center gap-3 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                <FaPlay className="text-cyan-400 text-xs group-hover:scale-110 transition-transform duration-300" />

                Explore Courses
              </button>

            </div>

            {/* TRUST POINTS */}
            <div className="fade-content mt-6 flex flex-wrap gap-x-6 gap-y-2">

              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <FaCheckCircle className="text-cyan-400" />
                Expert Trainers
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <FaCheckCircle className="text-cyan-400" />
                Practical Projects
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <FaCheckCircle className="text-cyan-400" />
                Career Guidance
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}
      <button
        type="button"
        onClick={handleApplyNow}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        aria-label="Scroll to admission form"
      >
        <div className="w-9 h-9 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4 text-cyan-400 animate-bounce"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>

        </div>
      </button>

      {/* ================= ANIMATIONS ================= */}
      <style>{`
        .admission-hero {
          font-family: "Manrope", Arial, sans-serif;
          isolation: isolate;
        }

        .font-heading {
          font-family: "Plus Jakarta Sans", "Manrope", Arial, sans-serif;
        }

        /* BADGE */
        .badge-animation {
          opacity: 0;
          animation: badgeIn 0.7s ease-out 0.15s forwards;
        }

        /* SMALL HEADING */
        .small-heading {
          opacity: 0;
          transform: translateY(15px);
          animation: fadeUp 0.7s ease-out 0.3s forwards;
        }

        /* HERO HEADING */
        .hero-line {
          opacity: 0;
          transform: translateY(105%);
          animation: lineIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .line-one {
          animation-delay: 0.42s;
        }

        .line-two {
          animation-delay: 0.56s;
        }

        .line-three {
          animation-delay: 0.70s;
        }

        /* CONTENT */
        .fade-content {
          opacity: 0;
          transform: translateY(18px);
          animation: fadeUp 0.7s ease-out 0.85s forwards;
        }

        /* KEYFRAMES */
        @keyframes lineIn {
          from {
            opacity: 0;
            transform: translateY(105%);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes badgeIn {
          from {
            opacity: 0;
            transform: translateY(-12px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .admission-hero {
            min-height: calc(100vh - 145px);
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .admission-hero {
            min-height: auto;
          }

          .hero-line {
            letter-spacing: -1.5px;
          }

          .admission-hero video {
            object-position: center center;
          }
        }

        /* REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          .badge-animation,
          .small-heading,
          .hero-line,
          .fade-content {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

    </section>
  );
}