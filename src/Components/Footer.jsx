import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowRight,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#050816] border-t border-cyan-500/20 mt-24">

      {/* Glow */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">

          {/* Logo */}
          <div>

            <h2 className="text-4xl font-bold text-white">
              Computer
              <span className="text-cyan-400">World</span>
            </h2>

            <p className="text-gray-400 leading-8 mt-6">
              Empowering students with practical IT skills,
              live projects and career-focused training to
              build a successful future.
            </p>

            <div className="flex gap-4 mt-8">

              {[
                <FaFacebookF />,
                <FaInstagram />,
                <FaLinkedinIn />,
                <FaYoutube />,
              ].map((icon, index) => (
                <div
                  key={index}
                  className="w-12 h-12 rounded-xl bg-white/5 border border-white/10
                  flex items-center justify-center text-cyan-400
                  hover:bg-cyan-500 hover:text-white transition duration-300 cursor-pointer"
                >
                  {icon}
                </div>
              ))}

            </div>

          </div>

          {/* Links */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Quick Links
            </h3>

            {[
              "Home",
              "IT Courses",
              "About",
              "Trainers",
              "Admissions",
              "Contact",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 mb-4 text-gray-400 hover:text-cyan-400 cursor-pointer transition"
              >
                <FaArrowRight className="text-xs" />
                {item}
              </div>
            ))}

          </div>

          {/* Courses */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Popular Courses
            </h3>

            {[
              "Web Development",
              "Graphic Designing",
              "Digital Marketing",
              "MS Office",
              "Python",
              "Cloud Computing",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 mb-4 text-gray-400 hover:text-cyan-400 cursor-pointer transition"
              >
                <FaArrowRight className="text-xs" />
                {item}
              </div>
            ))}

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-white text-xl font-semibold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <div className="flex gap-4">
                <FaPhoneAlt className="text-cyan-400 mt-1" />
                <span className="text-gray-400">
                  +92 300 1234567
                </span>
              </div>

              <div className="flex gap-4">
                <FaEnvelope className="text-cyan-400 mt-1" />
                <span className="text-gray-400">
                  info@computerworld.com
                </span>
              </div>

              <div className="flex gap-4">
                <FaMapMarkerAlt className="text-cyan-400 mt-1" />
                <span className="text-gray-400">
                  Karachi, Pakistan
                </span>
              </div>

            </div>

          </div>

        </div>

        {/* Stats */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">

          {[
            ["1000+", "Students"],
            ["20+", "Expert Trainers"],
            ["15+", "Courses"],
            ["95%", "Placement Support"],
          ].map(([num, text]) => (
            <div
              key={text}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl py-8 text-center hover:border-cyan-400 transition"
            >
              <h3 className="text-cyan-400 text-4xl font-bold">
                {num}
              </h3>

              <p className="text-gray-400 mt-2">
                {text}
              </p>
            </div>
          ))}

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-gray-500">
            © 2026 ComputerWorld IT Academy. All Rights Reserved.
          </p>

          <p className="text-gray-500 mt-4 md:mt-0">
            Built with
            <span className="text-cyan-400"> React • Tailwind CSS</span>
          </p>

        </div>

      </div>

    </footer>
  );
}