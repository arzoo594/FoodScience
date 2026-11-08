import BmiCalculator from "../../Components/BmiCalculator/BmiCalculator";
import Banner from "../../Components/Home/Banner";
import CookingScience from "../../Components/Home/CookingScience";
import FeatureTopic from "../../Components/Home/FeatureTopic";
import FoodSafety from "../../Components/Home/FoodSafety";
import MythVsFact from "../../Components/Home/MythVsFact";
import Newsletter from "../../Components/Home/Newsletter";
import NutritionSection from "../../Components/Home/NutritionSection";
import WhyTrustFoodScience from "../../Components/Home/WhyTrustFoodScience";

const Home = () => {
  return (
    <div>
      <Banner />
      <FeatureTopic />
      <NutritionSection />
      <FoodSafety />

      <CookingScience />
      <MythVsFact />
      <WhyTrustFoodScience />
      <Newsletter />
      <BmiCalculator />
    </div>
  );
};

export default Home;
