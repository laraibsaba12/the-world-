import { Link } from "react-router-dom";
import {
  FaCode,
  FaPalette,
  FaChartLine,
  FaFileWord,
  FaLanguage,
  FaFigma,
  FaArrowRight,
} from "react-icons/fa";

const courses = [
  {
    icon: <FaCode />,
    title: "Web Development",
    desc: "HTML • CSS • JavaScript • React • Node.js",
    link: "/courses#web-development",
  },
  {
    icon: <FaPalette />,
    title: "Graphic Designing",
    desc: "Photoshop • Illustrator • Canva • Branding",
    link: "/courses#graphic-designing",
  },
  {
    icon: <FaChartLine />,
    title: "Digital Marketing",
    desc: "SEO • Social Media • Google Ads • Meta Ads",
    link: "/courses#digital-marketing",
  },
  {
    icon: <FaFileWord />,
    title: "MS Office",
    desc: "Word • Excel • PowerPoint • Outlook",
    link: "/courses#ms-office",
  },
  {
    icon: <FaLanguage />,
    title: "English Language",
    desc: "Speaking • Grammar • Communication",
    link: "/courses#english-language",
  },
  {
    icon: <FaFigma />,
    title: "UI / UX Design",
    desc: "Figma • Wireframes • Prototyping",
    link: "/courses#ui-ux-design",
  },
];

export default function WhatWeTeach() {
  return (
    <section className="relative py-20 overflow-hidden bg-[#050816]">

      {/* Background Glow */}
      <div className="absolute -top-20 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-[140px]" />

      <div className="relative max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">

          <span className="text-cyan-400 uppercase tracking-[4px] text-xs font-semibold">
            WHAT WE TEACH
          </span>

          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
            Industry Focused
            <span className="text-cyan-400"> IT Courses</span>
          </h2>

          <p className="mt-4 max-w-xl mx-auto text-gray-400 text-sm leading-6">
            We offer practical IT training designed to help students develop
            real-world skills and build successful careers in technology.
          </p>

        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

          {courses.map((course, index) => (
            <div
              key={index}
              className="
                group
                relative
                rounded-2xl
                border border-white/10
                bg-[#111827]/80
                backdrop-blur-xl
                p-5
                min-h-[205px]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-cyan-400/50
                hover:shadow-lg
                hover:shadow-cyan-500/10
              "
            >

              {/* Small Top Glow */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-cyan-400/5 rounded-full blur-2xl group-hover:bg-cyan-400/10 transition" />

              {/* Icon */}
              <div
                className="
                  relative
                  w-11 h-11
                  rounded-xl
                  bg-cyan-500/10
                  border border-cyan-400/10
                  flex items-center justify-center
                  text-lg
                  text-cyan-400
                  group-hover:bg-cyan-500
                  group-hover:text-white
                  transition-all
                  duration-300
                "
              >
                {course.icon}
              </div>

              {/* Title */}
              <h3 className="mt-4 text-lg font-bold text-white">
                {course.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-gray-400 text-sm leading-6">
                {course.desc}
              </p>

              {/* Learn More */}
              <Link
                to={course.link}
                className="
                  inline-flex
                  items-center
                  gap-2
                  mt-4
                  text-cyan-400
                  text-sm
                  font-semibold
                  hover:text-cyan-300
                  transition-all
                "
              >
                Learn More

                <FaArrowRight
                  className="
                    text-xs
                    group-hover:translate-x-1
                    transition-transform
                  "
                />
              </Link>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}