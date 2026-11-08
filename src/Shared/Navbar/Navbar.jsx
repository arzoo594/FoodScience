import { useState } from "react";
import SocialIcon from "../../Components/SocialIcon.jsx/SocialIcon";
import Navlink from "../../Components/Navlinks/Navlink";
import { Link } from "react-router";
import HealthCalculatorDropdown from "../../Components/HealthCalculatorDropdown/HealthCalculatorDropdown";
import Logo from "../../Components/Logo/Logo";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar sticky top-0 py-6  bg-base-100 shadow-sm  z-50">
        <div className="navbar-start">
          <Link to={"/"} className="btn btn-ghost text-xl">
            <Logo />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu text-[15px] font-semibold menu-horizontal px-6 gap-4">
            <Navlink to={"/"}>
              <a className="">Home</a>
            </Navlink>
            <HealthCalculatorDropdown />
            <Navlink to={"/blog"}>
              <a>Blog</a>
            </Navlink>
            <Navlink to={"/food-safety"}>
              <a>Food Safety</a>
            </Navlink>
            <Navlink to={"/healthy-recipes"}>
              <a>Healthy Recipes</a>
            </Navlink>
            {/* <Navlink to={"/myth-fact"}>
              <a className="">Myth vs Fact</a>
            </Navlink> */}
            <Navlink to={"/cooking-science"}>
              <a>Cooking Science</a>
            </Navlink>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <SocialIcon />
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-base-100 lg:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <Link to={"/"} className="text-xl font-bold">
              FoodScience
            </Link>

            <button
              onClick={() => setIsOpen(false)}
              className="btn btn-ghost btn-circle"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <div className="px-6 ">
            <ul className="flex flex-col gap-1 text-[15px]">
              <Navlink to={"/"}>
                <a className="font-semibold" onClick={() => setIsOpen(false)}>
                  Home
                </a>
              </Navlink>
              <HealthCalculatorDropdown
                mobile={true}
                closeMenu={() => setIsOpen(false)}
              />
              <Navlink to={"/blog"}>
                <a className="font-semibold" onClick={() => setIsOpen(false)}>
                  Blog
                </a>
              </Navlink>
              <Navlink to={"/food-safety"}>
                <a className="font-semibold" onClick={() => setIsOpen(false)}>
                  Food Safety
                </a>
              </Navlink>
              {/* <Navlink to={"/myth-fact"}>
                <a onClick={() => setIsOpen(false)}>Myth Vs Fact</a>
              </Navlink> */}
              <Navlink to={"/healthy-recipes"}>
                <a className="font-semibold" onClick={() => setIsOpen(false)}>
                  Healthy Recipes
                </a>
              </Navlink>

              <Navlink to={"/cooking-science"}>
                <a className="font-semibold" onClick={() => setIsOpen(false)}>
                  Cooking Science
                </a>
              </Navlink>
            </ul>

            <div className="mt-10 border-t border-base-300 pt-6">
              <SocialIcon />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
