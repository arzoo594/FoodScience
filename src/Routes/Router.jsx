import { createBrowserRouter } from "react-router";
import RootLayout from "../LayOuts/RootLayout";
import Home from "../Pages/Home/Home";
import MythVsFact from "../Pages/MythVsFact/MythVsFact";
import CookingScience from "../Pages/CookingScience/CookingScience";
import FoodSafety from "../Pages/FoodSafety/FoodSafety";
import HealthyRecipes from "../Pages/HealthyRecipes/HealthyRecipes";
import Blog from "../Pages/Blog/Blog";
import AboutUs from "../Pages/AboutUs/AboutUs";
import Contact from "../Pages/Contact/Contact";
import PrivacyPolicy from "../Pages/PrivacyPolicy/PrivacyPolicy";
import TermsOfUse from "../Pages/TermsOfUse/TermsOfUse";
import Articles from "../Pages/Articles/Articles";
import LearnNutrition from "../Pages/LearnNutrition/LearnNutrition";
import AboutLayout from "../LayOuts/AboutLayout";
import BmiCalculator from "../Components/BmiCalculator/BmiCalculator";
import BmrCalculator from "../Components/BmrCalculator/BmrCalculator";
import IdealWeight from "../Components/IdealWeight/IdealWeight";
import DailyCalorieCalculator from "../Components/DailyCalorieCalculator/DailyCalorieCalculator";
import DailyWaterIntake from "../Components/DailyWaterIntake/DailyWaterIntake";
import ProteinIntake from "../Components/ProteinIntake/ProteinIntake";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/myth-fact",
        element: <MythVsFact />,
      },
      {
        path: "/health-calculator/bmi",
        element: <BmiCalculator />,
      },
      {
        path: "/health-calculator/bmr",
        element: <BmrCalculator />,
      },
      {
        path: "/health-calculator/ideal-weight",
        element: <IdealWeight />,
      },
      {
        path: "/health-calculator/daily-calorie-calculator",
        element: <DailyCalorieCalculator />,
      },
      {
        path: "/health-calculator/daily-water-intake",
        element: <DailyWaterIntake />,
      },
      {
        path: "/health-calculator/protein-intake",
        element: <ProteinIntake />,
      },
      {
        path: "/cooking-science",
        element: <CookingScience />,
      },
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/food-safety",
        element: <FoodSafety />,
      },
      {
        path: "/healthy-recipes",
        element: <HealthyRecipes />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "/terms",
        element: <TermsOfUse />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/learn-nutrition",
        element: <LearnNutrition />,
      },
    ],
  },
  {
    path: "/about",
    element: <AboutLayout />,
    children: [
      {
        index: true,
        element: <AboutUs />,
      },
    ],
  },
]);
