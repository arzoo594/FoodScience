import {
  FaSnowflake,
  FaVirus,
  FaHandsWash,
  FaTemperatureHigh,
  FaSkullCrossbones,
  FaCalendarAlt,
} from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const FoodSafety = () => {
  const safetyTopics = [
    {
      title: "Safe Food Storage",
      description:
        "Proper temperatures and containers to keep food fresh and safe.",
      icon: <FaSnowflake />,
      color: "text-[#00a8ff]",
    },
    {
      title: "Food Poisoning Prevention",
      description:
        "Recognise risks and prevent bacterial contamination at home.",
      icon: <FaVirus />,
      color: "text-green-600",
    },
    {
      title: "Kitchen Hygiene",
      description:
        "Essential cleaning routines for a safe cooking environment.",
      icon: <FaHandsWash />,
      color: "text-yellow-500",
    },
    {
      title: "Cooking Temperatures",
      description:
        "Internal temperatures that ensure meat and poultry are safe to eat.",
      icon: <FaTemperatureHigh />,
      color: "text-black",
    },
    {
      title: "Cross Contamination",
      description:
        "How to separate raw and cooked foods to avoid harmful bacteria.",
      icon: <FaSkullCrossbones />,
      color: "text-[#00a8ff]",
    },
    {
      title: "Expiration Dates",
      description:
        "Understanding use-by vs best-before and reducing food waste.",
      icon: <FaCalendarAlt />,
      color: "text-indigo-500",
    },
  ];

  return (
    <ScrollReveal>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-black">
            Food Safety Essentials
          </h2>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {safetyTopics.map((topic, index) => (
              <div
                key={index}
                className="min-h-[150px] rounded-lg border border-gray-300 bg-white p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div className={`text-2xl ${topic.color}`}>{topic.icon}</div>

                <h3 className="mt-4 text-lg font-bold text-black">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm leading-tight text-[#807676]">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default FoodSafety;
