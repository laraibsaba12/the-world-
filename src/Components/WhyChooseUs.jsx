import {
  FaLaptopCode,
  FaUserGraduate,
  FaProjectDiagram,
  FaCertificate,
} from "react-icons/fa";

const data = [
  {
    icon: <FaLaptopCode />,
    title: "Hands-on Learning",
    desc: "Build real projects instead of only watching videos.",
  },
  {
    icon: <FaProjectDiagram />,
    title: "Live Projects",
    desc: "Work on industry level projects with mentors.",
  },
  {
    icon: <FaUserGraduate />,
    title: "Expert Trainers",
    desc: "Learn from experienced developers and professionals.",
  },
  {
    icon: <FaCertificate />,
    title: "Certification",
    desc: "Receive a professional certificate after completion.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#070B1A] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center">

          <p className="uppercase tracking-[6px] text-cyan-400 font-semibold">
            Why Choose Us
          </p>

          <h2 className="text-5xl font-black text-white mt-3">
            Learn Skills That Build Careers
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg leading-8">
            ComputerWorld Academy helps students become industry-ready through
            practical learning, live projects, expert mentorship and career
            guidance.
          </p>

        </div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mt-20">

          {data.map((item, index) => (

            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-500 hover:-translate-y-3"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500 text-3xl text-white flex items-center justify-center mb-6 group-hover:rotate-12 transition">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
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
};

export default WhyChooseUs;