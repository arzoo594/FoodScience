import { FaLeaf } from "react-icons/fa";
import { Link } from "react-router";

const AboutFooter = () => {
  return (
    <footer className="relative overflow-hidden bg-white">
      <div className="relative z-10 mx-auto flex min-h-[90px] max-w-7xl items-center justify-between gap-6 px-6 py-4 sm:px-10 lg:px-14">
        {/* Left */}
        <div className="shrink-0">
          <Link to="/" className="text-lg font-bold text-slate-800 sm:text-xl">
            Food <span className="text-green-700">Science</span>
          </Link>

          <ul className="mt-1 flex flex-wrap items-center gap-2 text-[10px] text-slate-500 sm:text-xs">
            <li>Science</li>
            <li className="text-green-600">•</li>
            <li>Nutrition</li>
            <li className="text-green-600">•</li>
            <li>Healthy Life</li>
          </ul>
        </div>

        {/* Center */}
        <div className="hidden text-center md:block">
          <h1 className="text-xs font-semibold text-slate-700 sm:text-sm">
            Discover the Science Behind Your Food
          </h1>
        </div>

        {/* Right */}
        <div className="relative flex h-[90px] w-24 shrink-0 items-center justify-center sm:w-32 lg:w-40">
          <div className="absolute inset-y-0 right-[-30px] w-36 bg-green-700 [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)] sm:w-48" />

          <FaLeaf className="relative z-10 text-3xl text-white sm:text-4xl" />
        </div>
      </div>

      {/* Mobile Center Text */}
      <div className="pb-3 text-center md:hidden">
        <h1 className="text-[10px] font-semibold text-green-400 sm:text-xs">
          Discover the Science Behind Your Food
        </h1>
      </div>
    </footer>
  );
};

export default AboutFooter;
