const items = [
  "🚀 Admissions Open 2026",
  "💻 Web Development",
  "📱 App Development",
  "🤖 AI & Machine Learning",
  "🔒 Cyber Security",
  "🎨 Graphic Designing",
  "📊 Digital Marketing",
  "☁️ Cloud Computing",
  "🐍 Python Programming",
  "🎓 Professional IT Courses",
];

export default function TopBar() {
  return (
    <div
      className="fixed top-0 left-0 w-full z-50
      bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700
      text-white overflow-hidden py-3"
    >
      <div className="marquee">
        <div className="marquee-content">
          {[...items, ...items].map((item, index) => (
            <span
              key={index}
              className="mx-8 font-semibold whitespace-nowrap"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}