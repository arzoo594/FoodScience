import { Link } from "react-router";
import banner from "../../assets/foodscience_banner.webp";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Banner = () => {
  return (
    <ScrollReveal>
      <section className="relative h-[430px] w-full overflow-hidden sm:h-[500px] lg:h-[620px]">
        <img
          src={banner}
          alt="Food Science Banner"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center text-white sm:px-6">
          <h1 className="max-w-5xl text-2xl font-bold leading-tight sm:text-3xl md:text-4xl lg:text-[46px]">
            Understand Food. Eat Better. Live Healthier.
          </h1>

          <p className="mt-4 max-w-3xl text-xs font-medium leading-relaxed sm:mt-6 sm:text-sm md:text-lg lg:mt-8 lg:text-xl">
            Evidence-based nutrition, food safety, cooking science, healthy
            recipes, and practical food knowledge—all in one trusted place.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:gap-5 lg:mt-10">
            <Link
              to="/articles"
              className="rounded-full hover:scale-105 bg-white px-6 py-2.5 text-sm font-semibold text-black transition hover:bg-gray-200 sm:px-8 sm:py-3 sm:text-base"
            >
              Explore Articles
            </Link>

            <Link
              to="/healthy-recipes"
              className="rounded-full hover:scale-105 bg-red-500 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-red-600 sm:px-8 sm:py-3 sm:text-base"
            >
              Healthy Recipes
            </Link>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default Banner;
