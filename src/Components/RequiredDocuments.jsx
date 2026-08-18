import {
  FaIdCard,
  FaImage,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaCheckCircle,
} from "react-icons/fa";

const documents = [
  {
    icon: <FaIdCard />,
    title: "CNIC / B-Form",
    desc: "Submit a copy of your valid CNIC or B-Form for identity verification.",
  },
  {
    icon: <FaImage />,
    title: "Passport Size Photos",
    desc: "Provide two recent passport-size photographs for your student profile.",
  },
  {
    icon: <FaFileAlt />,
    title: "Educational Certificate",
    desc: "Submit your latest educational certificate or result card.",
  },
  {
    icon: <FaMoneyCheckAlt />,
    title: "Admission Fee",
    desc: "Pay the admission fee to confirm your seat in the selected course.",
  },
];

export default function RequiredDocuments() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Glow */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-cyan-500/10 blur-[130px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 blur-[160px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Required Documents
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Documents Needed For
            <span className="text-cyan-400"> Admission</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
            Please prepare the following documents before completing
            your admission process.
          </p>

        </div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {documents.map((item, index) => (
            <div
              key={index}
              className="group rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10 p-8 hover:border-cyan-400/40 hover:-translate-y-2 transition-all duration-300"
            >

              <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-3xl group-hover:scale-110 transition">

                {item.icon}

              </div>

              <h3 className="mt-6 text-2xl font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-4 text-gray-400 leading-7">
                {item.desc}
              </p>

            </div>
          ))}

        </div>

        {/* Important Note */}

        <div className="mt-16 rounded-3xl border border-cyan-400/20 bg-cyan-500/10 backdrop-blur-xl p-8 flex items-start gap-4">

          <FaCheckCircle className="text-cyan-400 text-3xl mt-1" />

          <div>

            <h3 className="text-white text-2xl font-semibold">
              Important Note
            </h3>

            <p className="mt-3 text-gray-300 leading-8">
              Make sure all submitted documents are clear and valid.
              Incomplete applications may delay your admission process.
              Our admission team will contact you if any additional
              information is required.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}