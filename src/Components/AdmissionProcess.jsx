import {
  FaFileAlt,
  FaUserCheck,
  FaCreditCard,
  FaGraduationCap,
} from "react-icons/fa";

const steps = [
  {
    no: "01",
    icon: <FaFileAlt />,
    title: "Submit Application",
    text: "Fill out the admission form with your personal details and choose your desired IT course.",
  },
  {
    no: "02",
    icon: <FaUserCheck />,
    title: "Counselling Session",
    text: "Meet our admission team for career guidance and course selection according to your goals.",
  },
  {
    no: "03",
    icon: <FaCreditCard />,
    title: "Confirm Admission",
    text: "Complete the registration process and submit the required documents and admission fee.",
  },
  {
    no: "04",
    icon: <FaGraduationCap />,
    title: "Start Learning",
    text: "Join your classes, work on live projects and begin your journey toward a successful IT career.",
  },
];

export default function AdmissionProcess() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[170px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Admission Process
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Join ComputerWorld
            <span className="text-cyan-400"> In 4 Easy Steps</span>
          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Our admission process is simple, transparent and designed to
            help you begin your IT learning journey quickly.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {steps.map((step, index) => (

            <div
              key={index}
              className="relative group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-cyan-400/40 p-8 transition-all duration-300 hover:-translate-y-3"
            >

              {/* Step Number */}

              <span className="absolute top-6 right-6 text-5xl font-extrabold text-white/5">

                {step.no}

              </span>

              {/* Icon */}

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-3xl text-cyan-400 group-hover:scale-110 duration-300">

                {step.icon}

              </div>

              {/* Title */}

              <h3 className="mt-8 text-2xl font-semibold text-white">

                {step.title}

              </h3>

              {/* Text */}

              <p className="mt-4 text-gray-400 leading-7">

                {step.text}

              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}