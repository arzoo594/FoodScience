import Banner from "../../Components/Home/Banner";
import CookingScience from "../../Components/Home/CookingScience";
import FeatureTopic from "../../Components/Home/FeatureTopic";
import FoodSafety from "../../Components/Home/FoodSafety";
import MythVsFact from "../../Components/Home/MythVsFact";
import Newsletter from "../../Components/Home/Newsletter";
import NutritionSection from "../../Components/Home/NutritionSection";
import WhyTrustFoodScience from "../../Components/Home/WhyTrustFoodScience";
import ScrollReveal from "../../Components/ScrollReveal/ScrollReveal";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureTopic />
      <NutritionSection />
      <ScrollReveal>
        <FoodSafety />
      </ScrollReveal>
      <ScrollReveal>
        <CookingScience />
      </ScrollReveal>
      <ScrollReveal>
        <MythVsFact />
      </ScrollReveal>
      <ScrollReveal>
        <WhyTrustFoodScience />
      </ScrollReveal>
      <ScrollReveal>
        <Newsletter />
      </ScrollReveal>
    </div>
  );
};

export default Home;
