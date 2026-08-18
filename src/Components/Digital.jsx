import { FaCheckCircle } from "react-icons/fa";

export default function Digital() {
  const skills = [
    "SEO Optimization",
    "Social Media Marketing",
    "Google Ads",
    "Facebook & Instagram Ads",
    "Content Marketing",
    "Live Campaign Projects",
  ];

  return (
   <section
  id="digital-marketing"
  className="relative py-20 ..."
>
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-cyan-500/10 blur-[150px] rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 blur-[150px] rounded-full"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT */}
          <div>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-400/20 text-cyan-300 text-xs font-semibold mb-5">
              📈 Digital Marketing Course
            </span>

            <h2 className="text-3xl lg:text-[36px] font-bold leading-[1.15] text-white">
              Become a{" "}
              <span className="text-cyan-400">
                Digital Marketing
              </span>
              <br />
              Expert
            </h2>

            <p className="mt-5 text-[17px] text-gray-300 leading-8 max-w-xl">
              Learn Digital Marketing from beginner to advanced level.
              Master SEO, Google Ads, Meta Ads, Social Media Marketing
              and content strategies through practical projects and
              live marketing campaigns.
            </p>

            {/* Skills */}
            <div className="grid sm:grid-cols-2 gap-3 mt-8">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center gap-3 bg-white/5 backdrop-blur-xl border border-cyan-400/10 rounded-xl px-4 py-3 hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
                >
                  <FaCheckCircle className="text-cyan-400 text-base" />

                  <span className="text-white font-medium text-base">
                    {skill}
                  </span>
                </div>
              ))}
            </div>

      
            
        
          </div>

          {/* RIGHT */}
          <div className="flex justify-center">
            <div className="relative">

              {/* Glow */}
              <div className="absolute -inset-5 bg-cyan-500/20 blur-3xl rounded-[35px]"></div>

              {/* Video */}
              <div className="relative w-[470px] h-[450px] rounded-[30px] overflow-hidden border border-cyan-400/20 bg-white/5 backdrop-blur-xl shadow-[0_0_60px_rgba(0,255,255,.25)]">

                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover"
                >
                  <source src="/digital.mp4" type="video/mp4" />
                </video>

              </div>

              {/* Top Card */}
              <div className="absolute top-5 -left-6 bg-[#07101d]/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-cyan-400 text-[11px] uppercase tracking-[2px]">
                  LIVE CAMPAIGNS
                </p>

                <h4 className="text-white text-lg font-bold">
                  Practical Learning
                </h4>
              </div>

              {/* Bottom Card */}
              <div className="absolute bottom-5 -right-6 bg-[#07101d]/95 backdrop-blur-xl border border-cyan-400/20 rounded-2xl px-5 py-3 shadow-lg">
                <p className="text-cyan-400 text-[11px] uppercase tracking-[2px]">
                  CERTIFICATE
                </p>

                <h4 className="text-white text-lg font-bold">
                  Included
                </h4>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}