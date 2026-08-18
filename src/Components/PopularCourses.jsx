import { useNavigate } from "react-router-dom";

import web from "../assets/web-dev.png";
import graphic from "../assets/graphics.png";
import ms from "../assets/ms.png";
import digital from "../assets/digital.png";
import ui from "../assets/UI.png";
import language from "../assets/language.png";

const courses = [
  {
    title: "Web Development",
    image: web,
    path: "/courses#web-development",
  },
  {
    title: "Graphic Design",
    image: graphic,
    path: "/courses#graphic-design",
  },
  {
    title: "MS Office",
    image: ms,
    path: "/courses#ms-office",
  },
  {
    title: "Digital Marketing",
    image: digital,
    path: "/courses#digital-marketing",
  },
  {
    title: "UI/UX Design",
    image: ui,
    path: "/courses#ui-ux",
  },
  {
    title: "English Language",
    image: language,
    path: "/courses#english-language",
  },
];

export default function PopularCourses() {
  const navigate = useNavigate();

  return (
    <section className="relative py-20 bg-[#050816]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-cyan-400 font-semibold uppercase tracking-widest">
            Our Courses
          </span>

          <h2 className="text-5xl font-bold text-white mt-3">
            Learn In-Demand Skills
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            Professional IT courses with live projects, practical training
            and career guidance.
          </p>
        </div>

        {/* Courses */}
        <div className="grid lg:grid-cols-2 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-[30px] border border-cyan-500/20 bg-[#0d1329]"
            >
              {/* Image */}
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-[320px] object-cover duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#050816] via-transparent to-transparent pointer-events-none"></div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-8">
                <span className="bg-cyan-500 text-white px-4 py-2 rounded-full text-sm">
                  IT Course
                </span>

                <h3 className="text-white text-4xl font-bold mt-4">
                  {course.title}
                </h3>

                {/* Explore Button */}
                <button
                  onClick={() => navigate(course.path)}
                  className="mt-4 text-cyan-400 font-semibold hover:text-white duration-300"
                >
                  Explore Course →
                </button>
              </div>

              {/* Border Effect */}
              <div className="absolute inset-0 rounded-[30px] border border-cyan-400 opacity-0 group-hover:opacity-100 duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}