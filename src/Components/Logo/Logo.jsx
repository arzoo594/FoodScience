import logo from "../../assets/logo.webp";

const Logo = () => {
  return (
    <div className="flex items-center mx-auto gap-2">
      <img
        src={logo}
        alt="FoodScience Logo"
        className="w-16 h-16 object-contain"
      />

      <div className="flex flex-col">
        <h1 className="text-3xl -ml-3 -mt-1  font-bold leading-none tracking-tight">
          <span className="text-[#005b3b]">Food</span>
          <span className="text-[#4caf2f]">Science</span>
        </h1>

        <p className="text-[9px] sm:text-[9px] tracking-[0.22em] text-[#005b3b] mt-1 whitespace-nowrap">
          Better Food <span className="mx-1">•</span> Healthier You
        </p>
      </div>
    </div>
  );
};

export default Logo;
