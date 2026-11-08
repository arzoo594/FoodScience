import ScrollReveal from "../ScrollReveal/ScrollReveal";
import photo from "../../assets/Untitled design_20260915_175014_0000.webp";
import { Link } from "react-router";

const SisterBrand = () => {
  return (
    <ScrollReveal>
      <section className="relative w-full overflow-hidden">
        <img
          src={photo}
          alt="Food Science About Us"
          className="block h-auto w-full object-cover"
        />

        <a
          href="https://gardenscience.bd/"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute  left-[50%] top-[76%] -translate-x-1/2 rounded-full bg-green-700 px-5 py-2.5 text-xs font-semibold text-white shadow-md transition duration-300 hover:bg-green-800 hover:shadow-lg sm:left-[46%] sm:top-[74%] sm:px-7 sm:py-3 sm:text-sm md:left-[42%] md:top-[73%] md:px-8 md:py-3.5 md:text-base lg:left-[39%] lg:top-[72%] hover:scale-105"
        >
          Explore Garden Science
        </a>
      </section>
    </ScrollReveal>
  );
};

export default SisterBrand;
