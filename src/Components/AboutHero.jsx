import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { HiOutlineAcademicCap } from "react-icons/hi";

export default function AboutHero() {
  return (
    <section className="about-hero relative min-h-[calc(100vh-145px)] overflow-hidden bg-[#050816]">

      {/* =====================================================
                          BACKGROUND VIDEO
      ====================================================== */}

      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 z-0 w-full h-full object-cover"
        style={{
          objectPosition: "center center",
          filter: "brightness(0.82) saturate(1.05)",
        }}
      >
        <source src="/about.mp4" type="video/mp4" />
      </video>

      {/* =====================================================
                          VIDEO LIGHT OVERLAY
      ====================================================== */}

      <div className="absolute inset-0 z-[1] bg-[#050816]/10 pointer-events-none" />

      {/* Left readability gradient */}
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#050816]/55 via-[#050816]/25 to-transparent pointer-events-none" />

      {/* =====================================================
                        NAVBAR PROTECTION
      ====================================================== */}

      <div className="absolute top-0 left-0 right-0 z-[3] h-32 bg-gradient-to-b from-[#050816]/90 via-[#050816]/45 to-transparent pointer-events-none" />

      {/* =====================================================
                          BOTTOM GRADIENT
      ====================================================== */}

      <div className="absolute inset-x-0 bottom-0 z-[2] h-40 bg-gradient-to-t from-[#050816]/80 to-transparent pointer-events-none" />

      {/* =====================================================
                            CYAN GLOW
      ====================================================== */}

      <div className="absolute z-[2] -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-400/10 blur-[150px] pointer-events-none" />

      {/* Purple Glow */}
      <div className="absolute z-[2] top-1/2 -right-40 w-[450px] h-[450px] rounded-full bg-purple-500/10 blur-[170px] pointer-events-none" />

      {/* Bottom Cyan Glow */}
      <div className="absolute z-[2] bottom-0 left-1/3 w-[400px] h-[180px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none" />

      {/* =====================================================
                            SUBTLE GRID
      ====================================================== */}

      <div className="absolute inset-0 z-[2] opacity-[0.025] pointer-events-none">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-20 pb-16">

        <div className="min-h-[calc(100vh-220px)] flex items-center">

          {/* =================================================
                            LEFT CONTENT
          ================================================= */}

          <div className="max-w-[700px]">

            {/* Badge */}

            <div className="about-badge">

              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-cyan-400/25 bg-cyan-400/[0.07] backdrop-blur-xl text-cyan-300 text-[10px] md:text-[11px] font-semibold uppercase tracking-[2.5px]">

                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_10px_#22d3ee]" />

                <HiOutlineAcademicCap className="text-cyan-400 text-sm" />

                About ComputerWorld

              </span>

            </div>

            {/* Small Heading */}
<br />
            <p className="about-small-heading mt-6 text-cyan-400 text-[11px] md:text-xs font-semibold uppercase tracking-[3px]">
              Building Skills For The Future
            </p>

            {/* Main Heading */}

            <h1 className="mt-4 font-heading text-[40px] sm:text-[48px] md:text-[54px] lg:text-[60px] xl:text-[64px] font-extrabold leading-[1.04] tracking-[-2px] text-white">

              <span className="block overflow-hidden">
                <span className="about-line line-one inline-block">
                  Learn In A
                </span>
              </span>

              <span className="block overflow-hidden">
                <span className="about-line line-two inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  Real IT Environment
                </span>
              </span>

            </h1>

            {/* Decorative Line */}

            <div className="about-fade mt-5 flex items-center gap-2.5">

              <div className="w-14 h-[2px] rounded-full bg-cyan-400" />

              <div className="w-5 h-[2px] rounded-full bg-cyan-400/50" />

              <div className="w-2 h-[2px] rounded-full bg-cyan-400/30" />

            </div>

            {/* Description */}

            <p className="about-fade mt-5 max-w-[580px] text-[14px] md:text-[15px] lg:text-[16px] text-gray-200 leading-7">

              ComputerWorld provides practical IT education through
              experienced trainers, modern computer labs, live projects
              and industry-focused learning that prepares students for
              successful careers in technology.

            </p>

            {/* Buttons */}

            <div className="about-fade flex flex-wrap gap-3.5 mt-6">

              {/* Explore Courses */}

              <Link
                to="/courses#explore-courses"
                className="group px-6 py-3 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-sm font-semibold flex items-center gap-2.5 shadow-[0_10px_30px_rgba(6,182,212,0.28)] hover:shadow-[0_12px_38px_rgba(6,182,212,0.42)] hover:-translate-y-1 transition-all duration-300"
              >
                Explore Courses

                <FaArrowRight className="text-xs group-hover:translate-x-1.5 transition-transform duration-300" />

              </Link>

              {/* Contact */}

              <Link
                to="/contact"
                className="group px-6 py-3 rounded-full border border-white/20 bg-white/[0.07] backdrop-blur-xl hover:bg-white/[0.13] text-white text-sm font-semibold flex items-center gap-2.5 hover:-translate-y-1 transition-all duration-300"
              >
                Contact Us

                <FaArrowRight className="text-xs opacity-70 group-hover:translate-x-1 transition-transform duration-300" />

              </Link>

            </div>

            {/* Trust Points */}

            <div className="about-fade mt-5 flex flex-wrap gap-x-5 gap-y-2">

              <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                <FaCheckCircle className="text-cyan-400 text-[11px]" />
                Practical Learning
              </div>

              <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                <FaCheckCircle className="text-cyan-400 text-[11px]" />
                Expert Trainers
              </div>

              <div className="flex items-center gap-1.5 text-gray-300 text-xs">
                <FaCheckCircle className="text-cyan-400 text-[11px]" />
                Career Focused
              </div>

            </div>

          </div>

        </div>

      </div>

      {/* =====================================================
                          SCROLL INDICATOR
      ====================================================== */}

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20">

        <div className="w-8 h-8 rounded-full border border-white/15 bg-white/5 backdrop-blur-xl flex items-center justify-center">

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

      </div>

      {/* =====================================================
                            ANIMATIONS
      ====================================================== */}

      <style>{`

        .about-hero {
          font-family: "Manrope", Arial, sans-serif;
        }

        .font-heading {
          font-family: "Plus Jakarta Sans", "Manrope", Arial, sans-serif;
        }

        /* BADGE */

        .about-badge {
          opacity: 0;
          animation: aboutBadgeIn 0.7s ease-out 0.15s forwards;
        }

        /* SMALL HEADING */

        .about-small-heading {
          opacity: 0;
          transform: translateY(15px);
          animation: aboutFadeUp 0.7s ease-out 0.3s forwards;
        }

        /* MAIN HEADING */

        .about-line {
          opacity: 0;
          transform: translateY(105%);
          animation: aboutLineIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }

        .line-one {
          animation-delay: 0.42s;
        }

        .line-two {
          animation-delay: 0.56s;
        }

        /* CONTENT */

        .about-fade {
          opacity: 0;
          transform: translateY(18px);
          animation: aboutFadeUp 0.7s ease-out 0.75s forwards;
        }

        /* KEYFRAMES */

        @keyframes aboutLineIn {

          from {
            opacity: 0;
            transform: translateY(105%);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        @keyframes aboutFadeUp {

          from {
            opacity: 0;
            transform: translateY(18px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }

        }

        @keyframes aboutBadgeIn {

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

          .about-hero {
            min-height: auto;
          }

          .about-line {
            letter-spacing: -1.5px;
          }

          .about-hero video {
            object-position: center center;
            filter: brightness(0.72) saturate(1);
          }

        }

        /* REDUCED MOTION */

        @media (prefers-reduced-motion: reduce) {

          .about-badge,
          .about-small-heading,
          .about-line,
          .about-fade {
            animation: none;
            opacity: 1;
            transform: none;
          }

        }

      `}</style>

    </section>
  );
}