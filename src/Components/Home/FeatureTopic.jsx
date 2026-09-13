import {
  FaAppleAlt,
  FaFlask,
  FaShieldAlt,
  FaUtensils,
  FaTimes,
} from "react-icons/fa";
import { GiChefToque } from "react-icons/gi";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const FeatureTopic = () => {
  const topics = [
    {
      title: "Nutrition",
      description:
        "Science-backed guides to vitamins, minerals, and balanced eating.",
      icon: <FaAppleAlt />,
      bg: "bg-green-50",
      iconColor: "text-green-500",
    },
    {
      title: "Food Science Facts",
      description: "Discover the chemistry and biology behind your food.",
      icon: <FaFlask />,
      bg: "bg-blue-50",
      iconColor: "text-blue-400",
    },
    {
      title: "Food Safety",
      description: "Learn safe storage, handling, and cooking practices.",
      icon: <FaShieldAlt />,
      bg: "bg-red-50",
      iconColor: "text-blue-500",
    },
    {
      title: "Cooking Science",
      description: "Understand the reactions that make food taste great.",
      icon: <GiChefToque />,
      bg: "bg-yellow-50",
      iconColor: "text-orange-400",
    },
    {
      title: "Healthy Recipes",
      description: "Nutritious meals designed for everyday cooking.",
      icon: <FaUtensils />,
      bg: "bg-orange-50",
      iconColor: "text-gray-400",
    },
    {
      title: "Myth vs Fact",
      description: "Debunking common food misconceptions with evidence.",
      icon: <FaTimes />,
      bg: "bg-purple-50",
      iconColor: "text-red-500",
    },
  ];

  return (
    <ScrollReveal>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-black">Featured Topics</h1>

            <p className="mt-2 text-[#928a8a]">
              Explore our core areas of food education
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {topics.map((topic, index) => (
              <div
                key={index}
                className={`${topic.bg} flex min-h-[175px] cursor-pointer flex-col items-center justify-center px-5 py-6 text-center transition duration-300 hover:-translate-y-1 hover:shadow-md`}
              >
                <div className={`text-4xl ${topic.iconColor}`}>
                  {topic.icon}
                </div>

                <h2 className="mt-5 text-xl font-bold text-black">
                  {topic.title}
                </h2>

                <p className="mt-3 max-w-md text-base leading-tight text-[#928a8a]">
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

export default FeatureTopic;
