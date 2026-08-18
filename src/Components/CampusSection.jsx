import {
  FaCheckCircle,
  FaLaptopCode,
  FaUsers,
  FaWifi,
} from "react-icons/fa";

export default function CampusSection() {
  return (
    <section className="relative py-24 bg-[#050B1E] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/20 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-500/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}

          <div>

            <span className="text-cyan-400 uppercase tracking-[4px] font-semibold">
              OUR CAMPUS
            </span>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mt-4 leading-tight">
              Learn In A
              <span className="text-cyan-400"> Real IT Environment</span>
            </h2>

            <p className="text-gray-400 text-lg leading-8 mt-6">
              ComputerWorld provides a modern computer lab with
              high-performance systems, practical learning,
              real projects and experienced trainers to prepare
              students for successful IT careers.
            </p>

            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              <div className="flex gap-4 items-start">
                <FaLaptopCode className="text-cyan-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Latest Computers
                  </h4>
                  <p className="text-gray-400 text-sm">
                    High-end systems for coding & designing.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaUsers className="text-cyan-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Small Batches
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Better learning with personal attention.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaWifi className="text-cyan-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Fast Internet
                  </h4>
                  <p className="text-gray-400 text-sm">
                    High-speed internet for practical work.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <FaCheckCircle className="text-cyan-400 text-2xl mt-1" />
                <div>
                  <h4 className="text-white font-semibold">
                    Live Projects
                  </h4>
                  <p className="text-gray-400 text-sm">
                    Gain real-world industry experience.
                  </p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT */}

          <div className="relative">

            <div className="absolute -inset-5 bg-cyan-500/20 blur-3xl rounded-3xl"></div>

            <div className="relative rounded-3xl overflow-hidden border border-cyan-400/20 shadow-2xl">

              <img
                src="/computer-lab.png"
                alt="Computer Lab"
                className="w-full h-[520px] object-cover hover:scale-105 duration-700"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#050B1E] via-transparent to-transparent"></div>

              <div className="absolute bottom-6 left-6 bg-[#081426]/80 backdrop-blur-xl px-6 py-4 rounded-2xl border border-cyan-400/20">

                <h3 className="text-cyan-400 text-3xl font-bold">
                  1000+
                </h3>

                <p className="text-gray-300">
                  Successful Students
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}