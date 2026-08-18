import { Link } from "react-router-dom";
import { FaDesktop, FaGlobe } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="fixed top-12 left-0 w-full z-50 px-4 md:px-6">

      {/* FULL WIDTH GLASS NAVBAR */}
      <div
        className="
          w-full
          flex items-center justify-between
          px-6 lg:px-9
          py-4
          rounded-[24px]
          bg-white/[0.07]
          backdrop-blur-2xl
          border border-white/[0.13]
          shadow-[0_8px_40px_rgba(0,0,0,0.28)]
        "
      >

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="flex items-center gap-4 group shrink-0"
        >

          {/* Computer + World Icon */}
          <div className="relative w-[58px] h-[58px] flex items-center justify-center">

            {/* Outer Circle */}
            <div
              className="
                absolute inset-0
                rounded-full
                border border-cyan-400/30
                bg-cyan-400/[0.05]
                shadow-[0_0_25px_rgba(34,211,238,0.18)]
                transition-all duration-500
                group-hover:border-cyan-400/60
                group-hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]
              "
            />

            {/* Computer */}
            <div
              className="
                relative z-10
                w-10 h-10
                rounded-xl
                flex items-center justify-center
                bg-gradient-to-br
                from-cyan-400/20
                to-blue-500/20
                border border-cyan-400/40
                text-cyan-300
                transition duration-500
                group-hover:scale-105
              "
            >
              <FaDesktop className="text-[21px]" />
            </div>

            {/* Rotating World */}
            <div
              className="
                absolute
                -top-1
                -right-1
                z-20
                w-6 h-6
                rounded-full
                flex items-center justify-center
                bg-[#090b24]
                border border-cyan-400/60
                shadow-[0_0_15px_rgba(34,211,238,0.4)]
              "
            >
              <FaGlobe
                className="
                  text-cyan-300
                  text-[13px]
                  animate-[spin_5s_linear_infinite]
                "
              />
            </div>

          </div>


          {/* Logo Name */}
          <div className="flex flex-col leading-none">

            <div className="text-[24px] xl:text-[26px] font-extrabold tracking-[-1px] whitespace-nowrap">
              <span className="text-white">
                The Computer
              </span>

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  to-blue-500
                  bg-clip-text
                  text-transparent
                "
              >
                World
              </span>
            </div>

            <span
              className="
                mt-1
                text-[8px]
                tracking-[4px]
                uppercase
                text-gray-400
                font-semibold
              "
            >
              IT ACADEMY
            </span>

          </div>

        </Link>


        {/* ================= MENU ================= */}
        <ul
          className="
            hidden
            lg:flex
            items-center
            justify-center
            gap-1
            xl:gap-2
            text-white
            font-semibold
            ml-auto
            mr-8
          "
        >

          <li>
            <Link
              to="/"
              className="
                block px-4 xl:px-5 py-3
                rounded-xl
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-white/[0.06]
              "
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/courses"
              className="
                block px-4 xl:px-5 py-3
                rounded-xl
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-white/[0.06]
              "
            >
              IT Courses
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className="
                block px-4 xl:px-5 py-3
                rounded-xl
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-white/[0.06]
              "
            >
              About
            </Link>
          </li>

          <li>
            <Link
              to="/trainers"
              className="
                block px-4 xl:px-5 py-3
                rounded-xl
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-white/[0.06]
              "
            >
              Trainers
            </Link>
          </li>

          <li>
            <Link
              to="/admission"
              className="
                block px-4 xl:px-5 py-3
                rounded-xl
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-white/[0.06]
              "
            >
              Admissions
            </Link>
          </li>

          <li>
            <Link
              to="/contact"
              className="
                block px-4 xl:px-5 py-3
                rounded-xl
                transition-all duration-300
                hover:text-cyan-400
                hover:bg-white/[0.06]
              "
            >
              Contact
            </Link>
          </li>

        </ul>


        {/* ================= ENROLL ================= */}
        <Link
          to="/admission#admission-form"
          className="
            hidden
            lg:flex
            items-center
            gap-3
            shrink-0
            px-6 xl:px-7
            py-3.5
            rounded-full
            bg-cyan-500
            hover:bg-cyan-400
            text-white
            font-bold
            transition-all duration-300
            shadow-[0_8px_25px_rgba(6,182,212,0.30)]
            hover:shadow-[0_8px_35px_rgba(6,182,212,0.50)]
            hover:-translate-y-0.5
          "
        >
          Enroll Now
          <span className="text-lg">→</span>
        </Link>

      </div>
    </nav>
  );
};

export default Navbar;