import { FaBookOpen, FaMicroscope, FaHeart, FaLightbulb } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const WhyTrustFoodScience = () => {
  const reasons = [
    {
      title: "Evidence-Based Content",
      description: "Every article is grounded in peer-reviewed research.",
      icon: <FaBookOpen />,
    },
    {
      title: "Reviewed Sources",
      description:
        "We cite scientific journals and verified health organisations.",
      icon: <FaMicroscope />,
    },
    {
      title: "Practical Tips",
      description:
        "Actionable advice you can apply in your everyday kitchen today.",
      icon: <FaHeart />,
    },
    {
      title: "Easy to Understand",
      description: "Complex science explained in clear, everyday language.",
      icon: <FaLightbulb />,
    },
  ];

  return (
    <ScrollReveal>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl bg-green-50 px-5 py-8">
          <h2 className="text-center text-2xl font-bold text-black">
            Why Trust Food Science?
          </h2>

          <div className="mt-10 grid grid-cols-1  gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="text-center transition duration-300 hover:scale-105"
              >
                <div className="flex justify-center text-3xl text-green-600">
                  {reason.icon}
                </div>

                <h3 className="mt-5 font-bold text-black">{reason.title}</h3>

                <p className="mt-4 text-sm leading-tight text-[#807676]">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default WhyTrustFoodScience;
