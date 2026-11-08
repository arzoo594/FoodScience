import {
  FaLeaf,
  FaShieldAlt,
  FaLightbulb,
  FaUsers,
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const promises = [
  {
    icon: FaLeaf,
    title: "Science-based",
    description: "content",
  },
  {
    icon: FaShieldAlt,
    title: "No false",
    description: "information",
  },
  {
    icon: FaLightbulb,
    title: "Simple &",
    description: "practical tips",
  },
  {
    icon: FaUsers,
    title: "A healthier",
    description: "community",
  },
];

const OurPromise = () => {
  return (
    <ScrollReveal>
      <section className="bg-green-800 mt-3 py-10 text-white">
        <div className="mx-auto items-center grid max-w-6xl gap-10 px-6 lg:grid-cols-[2fr_1fr]">
          <div>
            <h2 className="text-3xl font-bold">
              <span className="text-green-400">Our</span> Promise
            </h2>

            <div className="mt-6 grid grid-cols-2 md:grid-cols-4">
              {promises.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="border-white/20 transition duration-300 hover:-translate-y-2 px-5 text-center md:border-r last:border-r-0"
                  >
                    <Icon className="mx-auto text-2xl" />

                    <p className="mt-3 text-sm font-semibold">{item.title}</p>

                    <p className="text-sm">{item.description}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="border-t border-white/30 pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
            <h2 className="text-2xl font-bold">
              <span className="text-green-400">Stay</span> Connected
            </h2>

            <p className="mt-2 text-sm text-gray-200">
              Follow us for daily insights, tips and more.
            </p>

            <div className="mt-5 flex gap-4">
              <div className="flex items-center gap-4">
                <FaFacebook className="text-3xl text-[#1877F2] hover:scale-110 transition-transform cursor-pointer" />

                <FaInstagramSquare className="text-3xl text-[#E4405F] hover:scale-110 transition-transform cursor-pointer" />

                <AiFillTikTok className="text-3xl text-white dark:text-white hover:scale-110 transition-transform cursor-pointer" />

                <FaYoutube className="text-3xl text-[#FF0000] hover:scale-110 transition-transform cursor-pointer" />

                <FaXTwitter className="text-3xl text-white dark:text-white hover:scale-110 transition-transform cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default OurPromise;
