import { FaBullseye, FaEye } from "react-icons/fa";

export default function MissionVision() {
  return (
    <section className="relative py-28 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 -left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-[170px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 uppercase tracking-[5px] text-sm">
            OUR PURPOSE
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Mission <span className="text-cyan-400">&</span> Vision
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
            We are committed to empowering students with practical skills,
            industry knowledge and confidence to build successful careers
            in the IT industry.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/20 bg-white/5 backdrop-blur-xl p-10 hover:-translate-y-2 duration-500">

            <div className="absolute top-0 right-0 w-44 h-44 bg-cyan-500/10 rounded-full blur-[90px]"></div>

            <div className="w-20 h-20 rounded-2xl bg-cyan-500/15 flex items-center justify-center text-cyan-400 text-4xl">
              <FaBullseye />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Our Mission
            </h3>

            <p className="mt-5 text-gray-400 leading-8">
              Our mission is to provide high-quality IT education through
              practical learning, live projects, modern computer labs and
              experienced trainers. We prepare every student with the
              technical skills and confidence required to succeed in today's
              technology-driven world.
            </p>

          </div>

          {/* Vision */}
          <div className="group relative overflow-hidden rounded-3xl border border-purple-400/20 bg-white/5 backdrop-blur-xl p-10 hover:-translate-y-2 duration-500">

            <div className="absolute bottom-0 left-0 w-44 h-44 bg-purple-500/10 rounded-full blur-[90px]"></div>

            <div className="w-20 h-20 rounded-2xl bg-purple-500/15 flex items-center justify-center text-purple-400 text-4xl">
              <FaEye />
            </div>

            <h3 className="mt-8 text-3xl font-bold text-white">
              Our Vision
            </h3>

            <p className="mt-5 text-gray-400 leading-8">
              Our vision is to become one of the leading IT training
              institutes by creating an innovative learning environment
              where students develop real-world skills, achieve their career
              goals and contribute to the future of technology.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}