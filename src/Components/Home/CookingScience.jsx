import { FaBreadSlice, FaEgg, FaSeedling, FaWater } from "react-icons/fa";
import { GiSteak, GiHoneyJar } from "react-icons/gi";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const CookingScience = () => {
  const cookingTopics = [
    {
      title: "Why Bread Rises",
      description:
        "Yeast fermentation produces CO₂ gas that gets trapped in gluten networks.",
      icon: <FaBreadSlice />,
    },
    {
      title: "Maillard Reaction",
      description:
        "Amino acids and sugars react at high heat to create complex flavours and browning.",
      icon: <GiSteak />,
    },
    {
      title: "Caramelisation",
      description:
        "Sugar breaks down above 170°C producing hundreds of new flavour compounds.",
      icon: <GiHoneyJar />,
    },
    {
      title: "Protein Denaturation",
      description:
        "Heat unfolds protein structures, changing texture from soft to firm.",
      icon: <FaEgg />,
    },
    {
      title: "Emulsification",
      description:
        "How lecithin and mustard keep oil and water mixed in sauces.",
      icon: <FaSeedling />,
    },
    {
      title: "Fermentation",
      description:
        "Microorganisms convert sugars into acids, gases, and alcohol.",
      icon: <FaWater />,
    },
  ];

  return (
    <ScrollReveal>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl bg-[#0f172a] px-5 py-8 sm:px-8 lg:px-10">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">
              The Science of Cooking
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-300">
              Understand the chemical reactions that transform raw ingredients
              into delicious meals.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cookingTopics.map((topic, index) => (
              <div
                key={index}
                className="min-h-[145px] rounded-lg bg-[#1e293b] p-5 transition duration-300 hover:-translate-y-1 hover:bg-[#263449]"
              >
                <div className="text-xl text-orange-300">{topic.icon}</div>

                <h3 className="mt-4 text-lg font-bold text-white">
                  {topic.title}
                </h3>

                <p className="mt-2 text-sm leading-tight text-gray-300">
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

export default CookingScience;
