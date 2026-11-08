import AboutBanner from "../../assets/About_Us_food_science (1).webp";
import ScrollReveal from "../ScrollReveal/ScrollReveal";

const AboutHero = () => {
  return (
    <ScrollReveal>
      <section className="w-full overflow-hidden">
        <img
          src={AboutBanner}
          alt="Food Science About Us"
          className="w-full h-auto object-cover"
        />
      </section>
    </ScrollReveal>
  );
};

export default AboutHero;
