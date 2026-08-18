import {
  FaLaptopCode,
  FaUserGraduate,
  FaCertificate,
  FaProjectDiagram,
  FaChalkboardTrainer,
  FaBriefcase,
} from "react-icons/fa";

const features = [
  {
    icon: <FaLaptopCode />,
    title: "Modern Computer Labs",
    text: "Learn with the latest computers and industry-standard software in a practical environment.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Live Projects",
    text: "Work on real-world projects to build confidence and a strong professional portfolio.",
  },
  {
    icon: <FaChalkboardTrainer />,
    title: "Expert Trainers",
    text: "Learn from experienced professionals with practical industry knowledge.",
  },
  {
    icon: <FaCertificate />,
    title: "Professional Certificate",
    text: "Receive a recognized course completion certificate after successful training.",
  },
  {
    icon: <FaBriefcase />,
    title: "Career Support",
    text: "Interview preparation, CV guidance and career counseling for every student.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Job Ready Skills",
    text: "Gain practical experience that prepares you for internships and professional jobs.",
  },
];

export default function WhyJoin() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Why Choose ComputerWorld
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Everything You Need
            <span className="text-cyan-400"> To Succeed</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            We provide practical IT education through modern classrooms,
            experienced instructors, industry projects and career-focused
            learning that prepares students for the real world.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">

          {features.map((item, index) => (

            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl hover:border-cyan-400/40 hover:-translate-y-2 duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-3xl group-hover:scale-110 duration-300">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">

                {item.title}

              </h3>

              <p className="mt-4 text-gray-400 leading-7">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}