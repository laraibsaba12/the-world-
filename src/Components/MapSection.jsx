import { FaLocationArrow, FaMapMarkerAlt } from "react-icons/fa";

export default function MapSection() {
  return (
    <section className="relative py-24 bg-[#050816] overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-[150px]"></div>
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-purple-600/10 rounded-full blur-[180px]"></div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="text-cyan-400 uppercase tracking-[4px] text-sm">
            Visit Our Campus
          </span>

          <h2 className="mt-4 text-4xl md:text-5xl font-bold text-white">

            Find
            <span className="text-cyan-400"> ComputerWorld</span>

          </h2>

          <p className="mt-6 text-gray-400 leading-8">

            Visit our academy and explore a modern learning environment
            equipped with professional computer labs and experienced
            instructors.

          </p>

        </div>

        {/* Map */}

        <div className="relative mt-16 rounded-[30px] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl p-3">

          <iframe
            src="https://www.google.com/maps?q=Lyari,Karachi,Pakistan&output=embed"
            width="100%"
            height="550"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-[24px]"
          ></iframe>

          {/* Floating Location Card */}

          <div className="absolute left-8 bottom-8 hidden lg:flex items-center gap-5 bg-[#050816]/90 backdrop-blur-2xl border border-cyan-400/20 rounded-2xl px-6 py-5 shadow-xl">

            <div className="w-14 h-14 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-400 text-2xl">

              <FaLocationArrow />

            </div>

            <div>

              <h3 className="text-white text-xl font-bold">
                ComputerWorld IT Academy
              </h3>

              <p className="text-gray-400 mt-1 flex items-center gap-2">

                <FaMapMarkerAlt className="text-cyan-400" />

                Lyari, Karachi, Pakistan

              </p>

            </div>

          </div>

        </div>

        {/* Bottom Info */}

        <div className="grid md:grid-cols-3 gap-8 mt-14">

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h3 className="text-white text-xl font-semibold">
              📍 Location
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              ComputerWorld IT Academy
              <br />
              Lyari, Karachi,
              <br />
              Pakistan
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h3 className="text-white text-xl font-semibold">
              🕒 Office Hours
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Monday - Saturday
              <br />
              09:00 AM - 06:00 PM
            </p>

          </div>

          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 backdrop-blur-xl">

            <h3 className="text-white text-xl font-semibold">
              🚗 Easy Access
            </h3>

            <p className="text-gray-400 mt-4 leading-7">
              Easily accessible by public transport and private vehicles with convenient nearby parking.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}