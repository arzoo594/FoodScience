import { Link } from "react-router";
import banner from "../../assets/foodscience_banner.webp";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const Banner = () => {
  return (
    <ScrollReveal>
      <div className="relative w-full">
        <img
          className="w-full h-[620px] object-cover"
          src={banner}
          alt="Food Science Banner"
        />

        <div className="absolute inset-0 bg-black/45"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-5">
          <h1 className="text-3xl md:text-4xl lg:text-[46px] font-bold leading-tight max-w-5xl">
            Understand Food. Eat Better. Live Healthier.
          </h1>

          <p className="mt-8 text-base md:text-lg lg:text-xl font-medium max-w-3xl leading-snug">
            Evidence-based nutrition, food safety, cooking science, healthy
            recipes, and practical food knowledge—all in one trusted place.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 mt-10">
            <Link
              to={"/articles"}
              className="bg-white cursor-pointer text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-200 transition"
            >
              Explore Articles
            </Link>

            <Link
              to={"/healthy-recipes"}
              className="bg-red-500 cursor-pointer text-white px-8 py-3 rounded-full font-semibold hover:bg-red-600 transition"
            >
              Healthy Recipes
            </Link>
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default Banner;
