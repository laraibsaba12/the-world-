import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaFileExcel,
  FaLanguage,
  FaFigma,
} from "react-icons/fa";

import { Link } from "react-router-dom";

const careers = [
  {
    icon: <FaLaptopCode />,
    title: "Web Development",
    desc: "HTML, CSS, JavaScript, React & Node.js.",
    career: "Full Stack Developer",
    link: "/courses#web-development",
  },
  {
    icon: <FaPaintBrush />,
    title: "Graphic Designing",
    desc: "Photoshop, Illustrator & Canva.",
    career: "Graphic Designer",
    link: "/courses#graphic-designing",
  },
  {
    icon: <FaBullhorn />,
    title: "Digital Marketing",
    desc: "SEO, Social Media & Google Ads.",
    career: "Digital Marketer",
    link: "/courses#digital-marketing",
  },
  {
    icon: <FaFileExcel />,
    title: "MS Office",
    desc: "Word, Excel & PowerPoint.",
    career: "Office Professional",
    link: "/courses#ms-office",
  },
  {
    icon: <FaLanguage />,
    title: "English Language",
    desc: "Speaking, Grammar & Communication.",
    career: "English Speaker",
    link: "/courses#english-language",
  },
  {
    icon: <FaFigma />,
    title: "UI / UX Design",
    desc: "Figma, Wireframes & Prototyping.",
    career: "UI/UX Designer",
    link: "/courses#ui-ux",
  },
];

export default function CareerPaths() {
  return (
    <section className="relative py-20 bg-[#07101d] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="uppercase tracking-[5px] text-cyan-400 font-semibold text-sm">
            Career Opportunities
          </span>

          <h2 className="text-3xl lg:text-4xl font-bold text-white mt-3">
            Choose Your{" "}
            <span className="text-cyan-400">Career Path</span>
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-4">
            Learn industry-ready skills and start your professional career.
          </p>
        </div>

        {/* Cards */}
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-5">
          {careers.map((career) => (
            <div
              key={career.title}
              className="group bg-[#162233]/90 border border-cyan-500/10 rounded-2xl p-5 hover:border-cyan-400 hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-xl group-hover:bg-cyan-500 group-hover:text-white transition">
                {career.icon}
              </div>

              {/* Title */}
              <h3 className="text-white text-xl font-bold mt-4">
                {career.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-6 mt-2">
                {career.desc}
              </p>

              {/* Career */}
              <div className="border-t border-white/10 mt-4 pt-3">
                <p className="text-cyan-400 text-sm font-semibold">
                  Career
                </p>

                <p className="text-white text-base font-medium mt-1">
                  {career.career}
                </p>
              </div>

              {/* Button */}
              <Link
                to={career.link}
                className="block text-center w-full mt-5 py-2.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-white font-semibold transition"
              >
                Learn More
              </Link>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}