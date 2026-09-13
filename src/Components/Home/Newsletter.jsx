import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Newsletter = () => {
  return (
    <ScrollReveal>
      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl rounded-[24px] bg-green-700 px-5 py-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Stay Updated with the Latest Food Science
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm text-white">
            Receive evidence-based nutrition tips, healthy recipes, and food
            science articles every week.
          </p>

          <form className="mx-auto mt-6 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 rounded-md bg-white px-4 py-3 text-sm text-black outline-none"
            />

            <button
              type="submit"
              className="rounded-full cursor-pointer bg-red-500 px-7 py-3 font-semibold text-white transition duration-300 hover:bg-red-600"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Newsletter;
