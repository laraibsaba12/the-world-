import {
  HiArrowRight,
  HiOutlineAcademicCap,
} from "react-icons/hi";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function TrainersHero() {
  const navigate = useNavigate();

  // Meet Trainers
  const handleMeetTrainers = () => {
    const section = document.getElementById("trainers");

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
    <section className="trainers-hero relative min-h-[calc(100vh-145px)] overflow-hidden bg-[#050816]">

      {/* =====================================================
                          BACKGROUND VIDEO
      ====================================================== */}

      <div className="absolute inset-x-0 top-0 bottom-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{
            objectPosition: "center center",
            filter: "brightness(0.82) saturate(0.92)",
          }}
        >
          <source src="/trainers.mp4" type="video/mp4" />
        </video>
      </div>

      {/* =====================================================
                       LIGHT VIDEO OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 z-[1] bg-[#050816]/08 pointer-events-none" />

      {/* Left readability gradient */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[#050816]/48 via-[#050816]/18 to-transparent pointer-events-none" />

      {/* Top protection - navbar ke neeche video nahi jayegi visually */}
      <div className="absolute top-0 left-0 right-0 h-32 z-[2] bg-gradient-to-b from-[#050816]/75 via-[#050816]/30 to-transparent pointer-events-none" />

      {/* Bottom fade */}
      <div className="absolute inset-x-0 bottom-0 h-44 z-[1] bg-gradient-to-t from-[#050816]/75 to-transparent pointer-events-none" />

      {/* =====================================================
                            CYAN GLOW
      ====================================================== */}

      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-500/10 blur-[150px] pointer-events-none z-[2]" />

      {/* Purple Glow */}
      <div className="absolute top-1/2 -right-40 w-[430px] h-[430px] rounded-full bg-purple-600/8 blur-[170px] pointer-events-none z-[2]" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[200px] rounded-full bg-cyan-400/8 blur-[130px] pointer-events-none z-[2]" />

      {/* =====================================================
                            SUBTLE GRID
      ====================================================== */}

      <div className="absolute inset-0 z-[2] opacity-[0.018] pointer-events-none">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />
      </div>

      {/* =====================================================
                            MAIN CONTENT
      ====================================================== */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-10 pb-16">

        <div className="min-h-[calc(100vh-220px)] flex items-center">

          {/* =================================================
                              HERO CONTENT
          ================================================= */}

          <div className="max-w-[720px]">

            {/* BADGE */}

            <div className="badge-animation">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] backdrop-blur-xl text-cyan-300 text-[10px] md:text-[11px] font-semibold uppercase tracking-[2.5px]">

                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />

                <HiOutlineAcademicCap className="text-cyan-400 text-sm" />

                Meet Our Professional Trainers
              </span>
            </div>

            {/* SMALL HEADING */}
<br /><br />
            <p className="small-heading mt-6 text-cyan-400 text-[11px] md:text-xs font-semibold uppercase tracking-[3px]">
              Learn from the experts
            </p>

            {/* MAIN HEADING */}

            <h1 className="mt-4 font-heading text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] xl:text-[68px] font-extrabold leading-[1.04] tracking-[-2.5px] text-white">

              <span className="block overflow-hidden">
                <span className="hero-line line-one inline-block">
                  Learn From
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="hero-line line-two inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  Professional
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="hero-line line-three inline-block">
                  Trainers
                </span>
              </span>

            </h1>

            {/* DECORATIVE LINE */}

            <div className="fade-content mt-5 flex items-center gap-2.5">
              <div className="w-14 h-[2px] rounded-full bg-cyan-400" />
              <div className="w-5 h-[2px] rounded-full bg-cyan-400/50" />
              <div className="w-2 h-[2px] rounded-full bg-cyan-400/30" />
            </div>

            {/* DESCRIPTION */}

            <p className="fade-content mt-5 max-w-[590px] text-[14px] md:text-[15px] lg:text-[16px] text-gray-200 leading-7">
              Learn directly from experienced IT professionals who combine
              practical teaching, real-world projects and industry knowledge
              to help you build skills that matter.
            </p>

            {/* BUTTONS */}

            <div className="fade-content flex flex-wrap gap-3.5 mt-7">

              {/* MEET TRAINERS */}

              <button
                type="button"
                onClick={handleMeetTrainers}
                className="group px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold flex items-center gap-2.5 shadow-[0_10px_30px_rgba(6,182,212,0.28)] hover:shadow-[0_12px_38px_rgba(6,182,212,0.42)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Meet Trainers

                <HiArrowRight className="text-base group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* EXPLORE COURSES */}

              <button
                type="button"
                onClick={handleExploreCourses}
                className="group px-6 py-3 rounded-full border border-white/20 bg-white/[0.06] backdrop-blur-xl hover:bg-white/[0.13] text-white text-sm font-semibold flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Explore Courses

                <HiArrowRight className="text-sm opacity-70 group-hover:translate-x-1 transition-transform duration-300" />
              </button>

            </div>

            {/* TRUST POINTS */}

            <div className="fade-content mt-6 flex flex-wrap gap-x-6 gap-y-2">

              <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                <FaCheckCircle className="text-cyan-400 text-[11px]" />
                Expert Trainers
              </div>

              <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                <FaCheckCircle className="text-cyan-400 text-[11px]" />
                Live Projects
              </div>

              <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                <FaCheckCircle className="text-cyan-400 text-[11px]" />
                Practical Learning
              </div>

            </div>

          </div>
        </div>
      </div>

      {/* =====================================================
                         SCROLL INDICATOR
      ====================================================== */}

      <button
        type="button"
        onClick={handleMeetTrainers}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        aria-label="Scroll to trainers"
      >
        <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center hover:bg-white/10 transition">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-3.5 h-3.5 text-cyan-400 animate-bounce"
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

      {/* =====================================================
                            ANIMATIONS
      ====================================================== */}

      <style>{`
        .trainers-hero {
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

        /* MOBILE */

        @media (max-width: 640px) {
          .trainers-hero {
            min-height: auto;
          }

          .hero-line {
            letter-spacing: -1.5px;
          }

          .trainers-hero video {
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