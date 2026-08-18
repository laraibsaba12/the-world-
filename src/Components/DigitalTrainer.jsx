import {
  FaBullhorn,
  FaGoogle,
  FaChartLine,
  FaArrowRight,
} from "react-icons/fa";

import bg from "../assets/trainers-bg.png";
import rare from "../assets/rare.png";

export default function DigitalTrainer() {
  return (
    <section
      className="relative py-20 px-6 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-[#050816]/70"></div>

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Trainer Card */}
        <div className="bg-white/5 border border-cyan-500/20 rounded-3xl p-8 backdrop-blur-lg">

          <div className="grid lg:grid-cols-2 gap-10 items-center">

            {/* Left Content */}
            <div data-aos="fade-right">

              <p className="text-cyan-400 uppercase text-sm tracking-widest mb-2">
                Digital Marketing Trainer
              </p>

              <h3 className="text-3xl font-bold text-white mb-4">
                Sir Abdul Razzaq
              </h3>


              <p className="text-gray-300 leading-7 text-[16px]">
                Sir Abdul Razzaq is our Digital Marketing Trainer with practical
                experience in SEO, Social Media Marketing and Paid Advertising.
                He teaches students how to create successful digital campaigns
                using modern marketing tools and real-world strategies.
              </p>

              {/* Skills */}
              <div className="mt-6 space-y-3">

                <div className="flex items-center gap-3">
                  <FaGoogle className="text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                    SEO & Google Ads
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaBullhorn className="text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                    Social Media Marketing
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <FaChartLine className="text-cyan-400" />
                  <span className="text-gray-300 text-sm">
                    Analytics & Marketing Strategy
                  </span>
                </div>

              </div>

            </div>
{/* Right Image */}
<div
  className="flex justify-center"
  data-aos="fade-left"
>
  <div className="relative">

    {/* Glow */}
    <div className="absolute -inset-2 bg-cyan-500/20 blur-xl rounded-2xl"></div>

    {/* Exact rare.png */}
    <div className="relative w-[250px]">
      <img
        src={rare}
        alt="Sir Abdul Razzaq"
        className="w-full h-auto block rounded-2xl"
      />
    </div>

  </div>
</div>

          </div>

        </div>

      </div>
    </section>
  );
}