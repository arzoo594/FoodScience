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
        path: "/cooking-science",
        element: <CookingScience />,
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
        path: "/about",
        element: <AboutUs />,
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
]);
