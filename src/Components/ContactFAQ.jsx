import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply online through our Admission Form or visit our ComputerWorld IT Academy campus to complete your registration.",
  },
  {
    question: "Which IT courses do you offer?",
    answer:
      "We offer Web Development, Graphic Designing, Digital Marketing, MS Office, UI/UX Design and many other professional IT courses.",
  },
  {
    question: "Do you provide certificates?",
    answer:
      "Yes. Students receive a ComputerWorld Course Completion Certificate after successfully completing their course.",
  },
  {
    question: "Are practical classes included?",
    answer:
      "Yes. Every course includes practical lab sessions, live projects and hands-on assignments to build real-world skills.",
  },
  {
    question: "How can I contact ComputerWorld?",
    answer:
      "You can contact us by phone, email or visit our campus during office hours. Our team is always available to guide you.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[170px]"></div>

      <div className="relative max-w-5xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">

            Have Questions?
            <span className="text-cyan-400"> We've Got Answers</span>

          </h2>

          <p className="mt-6 text-gray-400 leading-8 max-w-2xl mx-auto">
            Find answers to the most common questions about admissions,
            courses and ComputerWorld IT Academy.
          </p>

        </div>

        {/* FAQ */}

        <div className="space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={index}
              className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl overflow-hidden"
            >

              <button
                onClick={() =>
                  setOpen(open === index ? null : index)
                }
                className="w-full flex justify-between items-center px-7 py-6 text-left"
              >

                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <FaChevronDown
                  className={`text-cyan-400 transition duration-300 ${
                    open === index ? "rotate-180" : ""
                  }`}
                />

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  open === index ? "max-h-40" : "max-h-0"
                }`}
              >

                <p className="px-7 pb-6 text-gray-400 leading-8">
                  {faq.answer}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}