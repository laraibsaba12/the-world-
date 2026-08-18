import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "Who can apply for admission?",
    answer:
      "Anyone interested in learning IT skills can apply. Beginners, students, job seekers and professionals are all welcome.",
  },
  {
    question: "What courses are available?",
    answer:
      "We offer Web Development, Graphic Designing, Digital Marketing, UI/UX course, English Language and Microsoft Office courses with practical training.",
  },
  {
    question: "Will I receive a certificate?",
    answer:
      "Yes. Every student receives a ComputerWorld course completion certificate after successfully completing the course.",
  },
  {
    question: "Are practical classes included?",
    answer:
      "Yes. Every course includes practical assignments, live projects and hands-on learning in modern computer labs.",
  },
  {
    question: "How do I confirm my admission?",
    answer:
      "Complete the admission form, submit the required documents and pay the admission fee to confirm your seat.",
  },
  {
    question: "Do you provide career guidance?",
    answer:
      "Yes. We help students with interview preparation, CV guidance and career support after course completion.",
  },
];

export default function AdmissionFAQ() {
  const [active, setActive] = useState(null);

  const toggle = (index) => {
    setActive(active === index ? null : index);
  };

  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[140px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 blur-[170px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Frequently Asked Questions
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Admission
            <span className="text-cyan-400"> FAQs</span>
          </h2>

          <p className="mt-5 text-gray-400 leading-8">
            Find answers to the most common questions about admissions,
            courses and the learning process at ComputerWorld.
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
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center p-6 text-left"
              >

                <span className="text-white text-lg font-semibold">

                  {faq.question}

                </span>

                <span className="text-cyan-400">

                  {active === index ? <FaMinus /> : <FaPlus />}

                </span>

              </button>

              <div
                className={`transition-all duration-300 overflow-hidden ${
                  active === index ? "max-h-40" : "max-h-0"
                }`}
              >

                <p className="px-6 pb-6 text-gray-400 leading-8">

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