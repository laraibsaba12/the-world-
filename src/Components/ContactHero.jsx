import {
  FaArrowRight,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheckCircle,
} from "react-icons/fa";

export default function ContactHero() {
  // Contact form par smooth scroll
  const handleContactClick = () => {
    const form = document.getElementById("contact-form");

    if (form) {
      form.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <section className="contact-hero relative min-h-[calc(100vh-145px)] overflow-hidden bg-[#050816]">

      {/* =====================================================
                          BACKGROUND VIDEO
      ====================================================== */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/contact.mp4" type="video/mp4" />
      </video>

      {/* =====================================================
                         LIGHT VIDEO OVERLAY
      ====================================================== */}
      <div className="absolute inset-0 bg-[#050816]/35 pointer-events-none" />

      {/* Light Left to Right Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#050816]/65 via-[#050816]/35 to-[#050816]/55 pointer-events-none" />

      {/* Bottom Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/85 via-transparent to-[#050816]/15 pointer-events-none" />

      {/* =====================================================
                          CYAN GLOW
      ====================================================== */}
      <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[150px] pointer-events-none" />

      {/* Purple Glow */}
      <div className="absolute top-1/2 -right-40 w-[450px] h-[450px] rounded-full bg-purple-600/15 blur-[170px] pointer-events-none" />

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/3 w-[350px] h-[200px] rounded-full bg-cyan-400/10 blur-[130px] pointer-events-none" />

      {/* =====================================================
                            SUBTLE GRID
      ====================================================== */}
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none">
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
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 pt-12 pb-16">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* =================================================
                              LEFT SIDE
          ================================================= */}
          <div className="max-w-[650px]">

            {/* BADGE */}
            <div className="badge-animation">
              <span className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-cyan-400/30 bg-cyan-400/[0.08] backdrop-blur-xl text-cyan-300 text-[11px] md:text-xs font-semibold uppercase tracking-[3px]">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_12px_#22d3ee]" />
                Contact ComputerWorld
              </span>
            </div>

        <br /><br />
            {/* MAIN HEADING */}
            <h1 className="mt-4 font-heading text-[42px] sm:text-[50px] md:text-[56px] lg:text-[62px] xl:text-[66px] font-extrabold leading-[1.03] tracking-[-2px] text-white">

              {/* LINE 1 */}
              <span className="block overflow-hidden">
                <span className="hero-line line-one inline-block">
                  Let's Build
                </span>
              </span>

              {/* LINE 2 */}
              <span className="block overflow-hidden">
                <span className="hero-line line-two inline-block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-500">
                  Your Future
                </span>
              </span>

              {/* LINE 3 */}
              <span className="block overflow-hidden">
                <span className="hero-line line-three inline-block">
                  Together.
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
            <p className="fade-content mt-6 max-w-[590px] text-[15px] md:text-[16px] lg:text-[17px] text-gray-300 leading-7">
              Have questions about our IT courses? Our expert team is here
              to guide you. Let's turn your goals into practical skills and
              build your professional future with{" "}
              <span className="text-cyan-400 font-bold">
                ComputerWorld.
              </span>
            </p>

            {/* BUTTONS */}
            <div className="fade-content flex flex-wrap gap-4 mt-7">

              {/* CONTACT NOW */}
              <button
                type="button"
                onClick={handleContactClick}
                className="group px-7 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-white text-sm md:text-base font-semibold flex items-center gap-3 shadow-[0_10px_30px_rgba(6,182,212,0.3)] hover:shadow-[0_12px_40px_rgba(6,182,212,0.45)] hover:-translate-y-1 transition-all duration-300 cursor-pointer"
              >
                Contact Now

                <FaArrowRight className="text-sm group-hover:translate-x-1.5 transition-transform duration-300" />
              </button>

              {/* GET DIRECTIONS */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Lyari%2C%20Karachi%2C%20Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="group px-7 py-3.5 rounded-full border border-white/20 bg-white/[0.07] backdrop-blur-xl hover:bg-white/[0.14] text-white text-sm md:text-base font-semibold flex items-center gap-3 hover:-translate-y-1 transition-all duration-300"
              >
                <FaMapMarkerAlt className="text-cyan-400 group-hover:scale-110 transition-transform duration-300" />

                Get Directions
              </a>

            </div>

            {/* TRUST POINTS */}
            <div className="fade-content mt-6 flex flex-wrap gap-x-5 gap-y-2">

              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <FaCheckCircle className="text-cyan-400" />
                Expert Trainers
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <FaCheckCircle className="text-cyan-400" />
                Practical Learning
              </div>

              <div className="flex items-center gap-2 text-gray-400 text-xs md:text-sm">
                <FaCheckCircle className="text-cyan-400" />
                Career Guidance
              </div>

            </div>

          </div>

          {/* =================================================
                              RIGHT SIDE
                     CENTERED CONTACT CARD
          ================================================= */}
          <div className="relative flex items-center justify-center">

            {/* Card Glow */}
            <div className="absolute w-72 h-72 rounded-full bg-cyan-400/15 blur-[100px] pointer-events-none" />

            {/* =================================================
                              CONTACT CARD
            ================================================= */}
            <div className="contact-card relative w-full max-w-[430px] rounded-[28px] border border-white/15 bg-white/[0.085] backdrop-blur-2xl p-6 md:p-7 shadow-[0_25px_80px_rgba(0,0,0,0.45)]">

              {/* Top Cyan Line */}
              <div className="absolute top-0 left-10 right-10 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />

              {/* CARD HEADER */}
              <div className="flex items-start justify-between mb-5">
<br /><br />
                <div>
                  <h2 className="font-heading text-[27px] md:text-[30px] font-bold text-white">
                    Contact Details
                  </h2>
                </div>

                {/* Email Icon */}
                <div className="w-11 h-11 shrink-0 rounded-2xl bg-cyan-400/10 border border-cyan-400/20 flex items-center justify-center">
                  <FaEnvelope className="text-cyan-400" />
                </div>

              </div>

              {/* PHONE */}
              <div className="contact-item phone-item flex gap-4 p-3 rounded-2xl hover:bg-white/[0.05] transition-all duration-300">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <FaPhoneAlt className="text-sm" />
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold mb-1">
                    Phone
                  </p>

                  <a
                    href="tel:+923001234567"
                    className="text-white text-sm md:text-base font-semibold hover:text-cyan-400 transition"
                  >
                    +92 300 1234567
                  </a>
                </div>

              </div>

              {/* EMAIL */}
              <div className="contact-item email-item flex gap-4 p-3 rounded-2xl hover:bg-white/[0.05] transition-all duration-300">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <FaEnvelope className="text-sm" />
                </div>

                <div className="min-w-0">
                  <p className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold mb-1">
                    Email
                  </p>

                  <a
                    href="mailto:info@computerworld.com"
                    className="text-white text-sm md:text-base font-semibold hover:text-cyan-400 transition break-all"
                  >
                    info@computerworld.com
                  </a>
                </div>

              </div>

              {/* ADDRESS */}
              <div className="contact-item address-item flex gap-4 p-3 rounded-2xl hover:bg-white/[0.05] transition-all duration-300">

                <div className="w-11 h-11 shrink-0 rounded-xl bg-cyan-400/10 border border-cyan-400/10 flex items-center justify-center text-cyan-400">
                  <FaMapMarkerAlt className="text-sm" />
                </div>

                <div>
                  <p className="text-gray-500 text-[10px] uppercase tracking-[2px] font-bold mb-1">
                    Visit Us
                  </p>

                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Lyari%2C%20Karachi%2C%20Pakistan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-sm md:text-base font-semibold leading-6 hover:text-cyan-400 transition"
                  >
                    ComputerWorld IT Academy
                    <br />

                    <span className="text-gray-400 font-normal">
                      Lyari, Karachi, Pakistan
                    </span>
                  </a>
                </div>

              </div>

              {/* BOTTOM MESSAGE */}
              <div className="mt-4 p-3.5 rounded-2xl bg-cyan-400/[0.06] border border-cyan-400/10">
                <p className="text-gray-400 text-xs md:text-sm leading-5">
                  Ready to start your IT journey?{" "}
                  <span className="text-cyan-400 font-semibold">
                    We're here to help.
                  </span>
                </p>
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
        onClick={handleContactClick}
        className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
        aria-label="Scroll to contact form"
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

      {/* =====================================================
                           ANIMATIONS
      ====================================================== */}
      <style>{`
        .contact-hero {
          font-family: "Manrope", Arial, sans-serif;
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

        /* CONTACT CARD */
        .contact-card {
          opacity: 0;
          transform: translateY(25px) scale(0.97);
          animation: cardIn 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.55s forwards;
        }

        /* CARD ITEMS */
        .contact-item {
          opacity: 0;
          transform: translateX(15px);
          animation: itemIn 0.55s ease-out forwards;
        }

        .phone-item {
          animation-delay: 0.90s;
        }

        .email-item {
          animation-delay: 1.03s;
        }

        .address-item {
          animation-delay: 1.16s;
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

        @keyframes cardIn {
          from {
            opacity: 0;
            transform: translateY(25px) scale(0.97);
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes itemIn {
          from {
            opacity: 0;
            transform: translateX(15px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* TABLET */
        @media (max-width: 1024px) {
          .contact-card {
            animation-name: cardMobile;
          }

          @keyframes cardMobile {
            from {
              opacity: 0;
              transform: translateY(30px) scale(0.97);
            }

            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
        }

        /* MOBILE */
        @media (max-width: 640px) {
          .contact-hero {
            min-height: auto;
          }

          .hero-line {
            letter-spacing: -1.5px;
          }
        }

        /* REDUCED MOTION */
        @media (prefers-reduced-motion: reduce) {
          .badge-animation,
          .small-heading,
          .hero-line,
          .fade-content,
          .contact-card,
          .contact-item {
            animation: none;
            opacity: 1;
            transform: none;
          }
        }
      `}</style>

    </section>
  );
}