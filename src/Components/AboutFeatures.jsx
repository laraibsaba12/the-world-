import {
  FaLaptopCode,
  FaUsers,
  FaCertificate,
  FaGraduationCap,
  FaBriefcase,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Practical Training",
    desc: "Hands-on projects with real industry experience.",
  },
  {
    icon: <FaGraduationCap />,
    title: "Career Guidance",
    desc: "Complete support for internships, freelancing and job interviews.",
  },
  {
    icon: <FaUsers />,
    title: "Expert Trainers",
    desc: "Learn from experienced IT professionals with real industry knowledge.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    desc: "Receive an industry-recognized certificate after course completion.",
  },
  {
    icon: <FaBriefcase />,
    title: "Live Projects",
    desc: "Work on real client-based practical projects to build your portfolio.",
  },
  {
    icon: <FaAward />,
    title: "Professional Skills",
    desc: "Improve communication, teamwork and interview preparation skills.",
  },
];

export default function AboutFeatures() {
  return (
    <section className="relative bg-[#050816] py-24 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[170px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-[170px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="inline-block px-5 py-2 rounded-full border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 uppercase tracking-[4px] text-sm">
            Why Choose ComputerWorld
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-white mt-6">
            Why Students
            <span className="text-cyan-400">
              {" "}Love ComputerWorld
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 leading-8">
            We provide practical IT education, experienced instructors,
            modern computer labs and career-focused learning to prepare
            students for today's technology industry.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-3xl p-8 hover:border-cyan-400 hover:-translate-y-2 duration-500"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400 text-3xl mb-6 group-hover:scale-110 duration-300">
                {item.icon}
              </div>

              <h3 className="text-2xl font-semibold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-400 leading-7">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}