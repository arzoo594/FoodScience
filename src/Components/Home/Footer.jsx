import { Link } from "react-router";
import { FaFacebook, FaInstagramSquare, FaYoutube } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import FooterLogo from "../../Components/FooterLogo/FooterLogo";
const Footer = () => {
  return (
    <footer className=" bg-black text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <FooterLogo />

          <p className="mt-6 max-w-xs text-gray-300">
            An educational platform dedicated to helping people understand the
            science behind food through evidence-based content.
          </p>

          <div className="mt-6">
            <div className="flex items-center gap-4">
              <FaFacebook className="text-3xl text-[#1877F2] hover:scale-110 transition-transform cursor-pointer" />

              <FaInstagramSquare className="text-3xl text-[#E4405F] hover:scale-110 transition-transform cursor-pointer" />

              <AiFillTikTok className="text-3xl text-white dark:text-white hover:scale-110 transition-transform cursor-pointer" />

              <FaYoutube className="text-3xl text-[#FF0000] hover:scale-110 transition-transform cursor-pointer" />

              <FaXTwitter className="text-3xl text-white dark:text-white hover:scale-110 transition-transform cursor-pointer" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Categories</h2>

          <div className="mt-6 flex flex-col gap-4 text-gray-300">
            <Link to="/myth-fact" className="hover:text-white">
              Myth vs Fact
            </Link>
            <Link to="/cooking-science" className="hover:text-white">
              Cooking Science
            </Link>
            <Link to="/food-safety" className="hover:text-white">
              Food Safety
            </Link>
            <Link to="/healthy-recipes" className="hover:text-white">
              Healthy Recipes
            </Link>

            <Link to="/blog" className="hover:text-white">
              Blog
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Company</h2>

          <div className="mt-6 flex flex-col gap-4 text-gray-300">
            <Link to="/about" className="hover:text-white">
              About Us
            </Link>

            <Link to="/contact" className="hover:text-white">
              Contact
            </Link>

            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>

            <Link to="/terms" className="hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-bold">Contact Us</h2>

          <div className="mt-6 flex flex-col gap-5 text-gray-300">
            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-500">📍</span>
              <span>Nalitabari, Sherpur</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-500">📞</span>
              <span>(+880) 1330717182</span>
            </div>

            <div className="flex items-start gap-3">
              <span className="mt-1 text-green-500">✉️</span>
              <span>info@foodscience.bd</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 text-sm text-gray-300 md:flex-row md:items-center md:justify-between">
          <p>© 2022-2026 Food Science. All Rights Reserved.</p>

          <div className="flex flex-wrap gap-4">
            <Link to="/myth-fact" className="hover:text-white">
              Myth vs Fact
            </Link>

            <Link to="/cooking-science" className="hover:text-white">
              Cooking Science
            </Link>

            <Link to="/food-safety" className="hover:text-white">
              Food Safety
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
