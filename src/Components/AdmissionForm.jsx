import { useState } from "react";
import emailjs from "@emailjs/browser";

import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function AdmissionForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    email: "",
    phone: "",
    course: "",
    qualification: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const templateParams = {
        student_name: formData.fullName,
        father_name: formData.fatherName,
        student_email: formData.email,
        phone: formData.phone,
        course: formData.course,
        qualification: formData.qualification,
        message: formData.message,
      };

      await emailjs.send(
        "Armeen_Shakeel",
        "Armeen123",
        templateParams,
        "qHQsInOX7W_DG1XC6"
      );

      setStatus(
        "Admission form submitted successfully! 🎉"
      );

      setFormData({
        fullName: "",
        fatherName: "",
        email: "",
        phone: "",
        course: "",
        qualification: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);

      setStatus(
        error?.text ||
          error?.message ||
          "Unable to send form. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="admission-form"
      className="relative py-24 bg-[#050816] overflow-hidden"
    >
      {/* Glow */}
      <div className="absolute -top-10 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-[130px]" />

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[170px]" />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Admission Form
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">
            Apply For
            <span className="text-cyan-400"> Admission</span>
          </h2>

          <p className="mt-5 max-w-2xl mx-auto text-gray-400 leading-8">
            Fill out the form below and our admission team will
            contact you shortly with complete course details.
          </p>

        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* ================= LEFT SIDE ================= */}
          <div className="lg:col-span-2">

            <div className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 h-full">

              <h3 className="text-3xl font-bold text-white">
                Need Help?
              </h3>

              <p className="mt-5 text-gray-400 leading-8">
                Our admission counselors are available to guide you
                in choosing the right course according to your career
                goals.
              </p>

              <div className="mt-10 space-y-8">

                {/* Phone */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <FaPhoneAlt />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      Phone
                    </h4>

                    <p className="text-gray-400">
                      +92 300 1234567
                    </p>
                  </div>

                </div>

                {/* Email */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <FaEnvelope />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      Email
                    </h4>

                    <p className="text-gray-400">
                      info@computerworld.com
                    </p>
                  </div>

                </div>

                {/* Address */}
                <div className="flex items-start gap-4">

                  <div className="w-12 h-12 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <h4 className="text-white font-semibold">
                      Address
                    </h4>

                    <p className="text-gray-400">
                      ComputerWorld IT Academy,
                      Your City, Pakistan
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          {/* ================= RIGHT SIDE ================= */}
          <div className="lg:col-span-3">

            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8"
            >

              <div className="grid md:grid-cols-2 gap-6">

                {/* Full Name */}
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Full Name"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                />

                {/* Father Name */}
                <input
                  type="text"
                  name="fatherName"
                  value={formData.fatherName}
                  onChange={handleChange}
                  placeholder="Father Name"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                />

                {/* Email */}
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                />

                {/* Phone */}
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                />

                {/* Course */}
                <select
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white outline-none focus:border-cyan-400"
                >
                  <option value="" className="text-black">
                    Select Course
                  </option>

                  <option className="text-black">
                    Web Development
                  </option>

                  <option className="text-black">
                    Graphic Designing
                  </option>

                  <option className="text-black">
                    Digital Marketing
                  </option>

                  <option className="text-black">
                    MS Office
                  </option>

                  <option className="text-black">
                    UI/UX Course
                  </option>

                  <option className="text-black">
                    English Language
                  </option>
                </select>

                {/* Qualification */}
                <input
                  type="text"
                  name="qualification"
                  value={formData.qualification}
                  onChange={handleChange}
                  placeholder="Highest Qualification"
                  required
                  className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
                />

              </div>

              {/* Message */}
              <textarea
                rows="5"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about yourself..."
                className="w-full mt-6 bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-white placeholder-gray-400 outline-none focus:border-cyan-400"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="mt-8 w-full py-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 transition text-white font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Sending..." : "Submit Admission Form"}
              </button>

              {/* Status */}
              {status && (
                <p
                  className={`mt-5 text-center font-medium ${
                    status.includes("successfully")
                      ? "text-green-400"
                      : "text-red-400"
                  }`}
                >
                  {status}
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}