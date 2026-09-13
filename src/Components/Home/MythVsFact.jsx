import ScrollReveal from "../ScrollReveal/ScrollReveal";

const MythVsFact = () => {
  const facts = [
    {
      myth: "Brown sugar is healthier than white sugar.",
      fact: "Both contain similar calories. The nutritional difference is minimal.",
    },
    {
      myth: "Eating at night makes you gain weight.",
      fact: "Total calorie intake matters more than timing. Your body processes food the same way.",
    },
    {
      myth: "Microwaving food destroys all nutrients.",
      fact: "Microwaving preserves more nutrients than boiling due to shorter cooking times.",
    },
  ];

  return (
    <ScrollReveal>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-center text-3xl font-bold text-black">
            Myth vs Fact
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {facts.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden transition duration-300 hover:scale-105 rounded-lg"
              >
                <div className="bg-red-50 p-4">
                  <p className="font-semibold text-red-500">✕ Myth</p>
                  <p className="mt-3 text-sm text-black">{item.myth}</p>
                </div>

                <div className="bg-green-50 p-4">
                  <p className="font-semibold text-green-600">☑ Fact</p>
                  <p className="mt-3 text-sm text-red-500">{item.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default MythVsFact;
