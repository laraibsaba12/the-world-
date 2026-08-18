import {
  FaLaptopCode,
  FaPaintBrush,
  FaBullhorn,
  FaFileExcel,
  FaLanguage,
  FaPencilRuler,
} from "react-icons/fa";

const categories = [
  { icon: <FaLaptopCode />, title: "Web Development", id: "web-development" },
  { icon: <FaPaintBrush />, title: "Graphic Designing", id: "graphic-design" },
  { icon: <FaBullhorn />, title: "Digital Marketing", id: "digital-marketing" },
  { icon: <FaFileExcel />, title: "MS Office", id: "ms-office" },
  { icon: <FaLanguage />, title: "English Language", id: "english-language" },
  { icon: <FaPencilRuler />, title: "UI/UX Design", id: "ui-ux" },
];

export default function CourseCategories() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
   <section
  id="explore-courses"
  className="relative py-20 bg-[#050816]"
>
      <div className="relative max-w-7xl mx-auto px-6">
        <h2 className="text-center text-white text-5xl font-bold">
          Explore Our Courses
        </h2>

        <p className="text-center text-gray-400 mt-4 max-w-2xl mx-auto">
          Choose from our industry-focused courses designed to help you
          build practical skills and start your professional career.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {categories.map((item) => (
            <button
              key={item.title}
              onClick={() => scrollToSection(item.id)}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl py-10 px-6 flex flex-col items-center hover:border-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-4xl mb-6">
                {item.icon}
              </div>

              <h3 className="text-white text-xl font-semibold text-center">
                {item.title}
              </h3>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}