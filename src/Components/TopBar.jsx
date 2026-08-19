const items = [
  "Admissions Open 2026",
  "Web Development",
  "App Development",
  "AI & Machine Learning",
  "Cyber Security",
  "Graphic Designing",
  "Digital Marketing",
  "Cloud Computing",
  "Python Programming",
  "Professional IT Courses",
];

export default function TopBar() {
  return (
    <div
      className="
        fixed top-0 left-0 w-full z-50
        overflow-hidden
        bg-transparent
        backdrop-blur-[6px]
        border-b border-white/10
      "
    >
      <div className="marquee py-2.5">
        <div className="marquee-content">

          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="
                mx-8
                text-sm
                font-medium
                tracking-wide
                text-white/90
                whitespace-nowrap
              "
            >
              {item}
            </span>
          ))}

        </div>
      </div>
    </div>
  );
}