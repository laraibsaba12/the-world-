import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { MdOutlineWorkspacePremium } from "react-icons/md";

export default function OurStory() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]" />
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Side */}
          <div>

            <span className="inline-block px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 uppercase tracking-[4px] text-sm">
              Our Story
            </span>

            <h2 className="mt-6 text-4xl md:text-5xl font-bold text-white leading-tight">
              Empowering Students <br />
              Through <span className="text-cyan-400">Practical IT Education</span>
            </h2>

            <p className="mt-8 text-gray-400 leading-8 text-lg">
              ComputerWorld was established with one clear mission — to bridge
              the gap between classroom learning and real industry skills.
              Instead of focusing only on theory, we provide practical
              training, live projects and hands-on experience that prepare
              students for real careers in technology.
            </p>

            <p className="mt-6 text-gray-400 leading-8">
              Today, ComputerWorld continues to help students build confidence,
              create professional portfolios and gain the skills needed to
              succeed in Web Development, Graphic Designing, Digital Marketing
              and Microsoft Office.
            </p>

          </div>

          {/* Right Side */}
          <div className="grid gap-6">

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">
              <FaGraduationCap className="text-5xl text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white mt-5">
                Practical Learning
              </h3>
              <p className="mt-3 text-gray-400 leading-7">
                Every course includes hands-on practice, assignments and real projects.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">
              <FaLaptopCode className="text-5xl text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white mt-5">
                Industry Skills
              </h3>
              <p className="mt-3 text-gray-400 leading-7">
                Learn modern technologies and tools that companies actually use.
              </p>
            </div>

            <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 hover:border-cyan-400/40 transition duration-300">
              <MdOutlineWorkspacePremium className="text-5xl text-cyan-400" />
              <h3 className="text-2xl font-semibold text-white mt-5">
                Career Growth
              </h3>
              <p className="mt-3 text-gray-400 leading-7">
                Build your portfolio, improve interview skills and prepare for your professional journey.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}