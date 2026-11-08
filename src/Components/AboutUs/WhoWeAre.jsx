import { FaAtom, FaShieldAlt, FaLightbulb, FaUsers } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const features = [
  {
    icon: FaAtom,
    title: "Science",
    subtitle: "Based",
  },
  {
    icon: FaShieldAlt,
    title: "Reliable",
    subtitle: "Information",
  },
  {
    icon: FaLightbulb,
    title: "Simple",
    subtitle: "Language",
  },
  {
    icon: FaUsers,
    title: "For Everyone",
    subtitle: "",
  },
];

const WhoWeAre = () => {
  return (
    <ScrollReveal>
      <section className="bg-white py-14">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-[1fr_2fr]">
          <div>
            <div className="mb-3 h-1 w-7 bg-green-700"></div>

            <h2 className="text-3xl font-bold text-gray-900">
              <span className="text-green-700">Who</span> We Are
            </h2>

            <p className="mt-3 max-w-md leading-7 text-gray-600">
              Food Science is a science-based platform for food, nutrition and
              healthy living. We share reliable information in simple language
              to help you understand the science behind every bite.
            </p>

            <button className="mt-5 rounded-full hover:scale-105 cursor-pointer bg-green-700 px-6 py-3 font-semibold text-white transition hover:bg-green-800">
              Learn More →
            </button>
          </div>

          <div className="grid grid-cols-2 gap-6 border-l-0 lg:border-l lg:pl-10 md:grid-cols-4">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center transition duration-300 hover:-translate-y-2 text-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-50">
                    <Icon className="text-4xl text-green-700" />
                  </div>

                  <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>

                  {item.subtitle && (
                    <p className="font-bold text-gray-900">{item.subtitle}</p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default WhoWeAre;
