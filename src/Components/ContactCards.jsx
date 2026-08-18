import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

const cards = [
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Our Campus",
    info: "ComputerWorld IT Academy\nYour City, Pakistan",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Call Us",
    info: "+92 300 1234567\n+92 321 7654321",
  },
  {
    icon: <FaEnvelope />,
    title: "Email Us",
    info: "info@computerworld.com\nsupport@computerworld.com",
  },
  {
    icon: <FaClock />,
    title: "Office Hours",
    info: "Monday - Saturday\n09:00 AM - 06:00 PM",
  },
];

export default function ContactCards() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[170px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Get In Touch
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">

            We're Here To
            <span className="text-cyan-400"> Help You</span>

          </h2>

          <p className="mt-6 text-gray-400 leading-8">
            Whether you have questions about admissions, courses or career
            guidance, our team is always ready to assist you.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">

          {cards.map((card, index) => (

            <div
              key={index}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-400/40 hover:-translate-y-3 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 flex items-center justify-center text-cyan-400 text-3xl group-hover:scale-110 transition">

                {card.icon}

              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">

                {card.title}

              </h3>

              <p className="mt-4 whitespace-pre-line text-gray-400 leading-8">

                {card.info}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}