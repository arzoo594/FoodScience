import { Link } from "react-router";
import banner from "../../assets/pexels-photo-1435904 (1).webp";
import { FaCheck } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const NutritionSection = () => {
  const topics = [
    "Vitamins & Minerals",
    "Balanced Diet",
    "Gut Health",
    "Protein & Muscle",
    "Weight Management",
    "Children's Nutrition",
  ];

  return (
    <ScrollReveal>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden">
            <img
              src={banner}
              alt="Healthy vegetables"
              className="h-[420px] w-[500px] transition duration-300 hover:scale-105  rounded-2xl object-cover"
            />
          </div>

          <div>
            <h2 className="text-3xl font-bold text-black">
              Nutrition Based on Science, Not Trends
            </h2>

            <div className="mt-8 space-y-5">
              {topics.map((topic, index) => (
                <div key={index} className="flex items-center gap-5">
                  <div className="flex h-7 w-12 items-center justify-center rounded-full bg-green-100">
                    <FaCheck className="text-sm text-green-600" />
                  </div>

                  <p className="text-base text-[#806f6f]">{topic}</p>
                </div>
              ))}
            </div>

            <Link
              to={"/learn-nutrition"}
              className="mt-10  inline-block rounded-lg  bg-green-600 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-green-700 hover:scale-105"
            >
              Learn Nutrition
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default NutritionSection;
