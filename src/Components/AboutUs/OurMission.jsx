import { FaBullseye, FaBookOpen, FaHeart, FaLeaf } from "react-icons/fa";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const missionItems = [
  {
    icon: FaBookOpen,
    title: "Educate",
    description: "with scientific knowledge",
  },
  {
    icon: FaHeart,
    title: "Promote",
    description: "healthy eating habits",
  },
  {
    icon: FaLeaf,
    title: "Build",
    description: "a safer and smarter food future",
  },
];

const OurMission = () => {
  return (
    <ScrollReveal>
      <section className="bg-white py-14">
        <div className="mx-auto items-center grid max-w-6xl gap-10 px-6 lg:grid-cols-[1.1fr_2fr]">
          <div className="flex gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-green-700">
              <FaBullseye className="text-3xl text-white" />
            </div>

            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <span className="text-green-700">Our</span> Mission
              </h2>

              <p className="mt-3 max-w-md leading-6 text-gray-600">
                Our mission is to make food and nutrition science easy to
                understand and accessible to everyone.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 divide-y md:grid-cols-3 md:divide-x md:divide-y-0">
            {missionItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="flex flex-col items-center px-6 py-5 text-center transition duration-300 hover:-translate-y-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-50">
                    <Icon className="text-2xl text-green-700" />
                  </div>

                  <h3 className="mt-3 font-bold text-green-700">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-sm text-gray-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default OurMission;
