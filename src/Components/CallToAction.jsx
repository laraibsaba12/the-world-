import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -top-20 left-10 w-80 h-80 bg-cyan-500/20 rounded-full blur-[140px]" />

      <div className="pointer-events-none absolute -bottom-20 right-10 w-96 h-96 bg-purple-600/20 rounded-full blur-[170px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* CTA Card */}
        <div className="relative overflow-hidden rounded-[35px] border border-white/10 bg-white/5 backdrop-blur-2xl p-10 md:p-16">

          {/* Decorative Glow */}
          <div className="pointer-events-none absolute -top-20 -right-20 w-60 h-60 bg-cyan-500/20 rounded-full blur-[120px]" />

          <div className="pointer-events-none absolute -bottom-20 -left-20 w-72 h-72 bg-purple-600/20 rounded-full blur-[140px]" />

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center">

            {/* LEFT */}
            <div>

              <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 uppercase tracking-[4px] text-sm">
                Admissions Open
              </span>

              <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                Start Your
                <span className="text-cyan-400"> IT Journey </span>
                Today
              </h2>

              <p className="mt-6 text-gray-300 leading-8 text-lg">
                Join ComputerWorld and learn from experienced instructors,
                modern computer labs and real-world projects that prepare
                you for a successful career in technology.
              </p>

            </div>

            {/* RIGHT */}
            <div className="relative z-20 flex flex-col sm:flex-row lg:flex-col gap-5 lg:items-end">

              {/* APPLY NOW */}
              <Link
                to="/admission#admission-form"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-cyan-500 hover:bg-cyan-400 transition-all duration-300 text-white font-semibold hover:scale-105 shadow-lg shadow-cyan-500/20 cursor-pointer"
              >
                Apply Now

                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </Link>

              {/* CONTACT US */}
              <Link
                to="/contact#contact-form"
                className="group flex items-center justify-center gap-3 px-8 py-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 backdrop-blur-xl text-white transition-all duration-300 hover:scale-105 cursor-pointer"
              >
                <FaPhoneAlt className="group-hover:scale-110 transition-transform duration-300" />

                Contact Us
              </Link>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}