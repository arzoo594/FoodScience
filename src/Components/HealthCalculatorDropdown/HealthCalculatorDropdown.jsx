// import { useEffect, useState } from "react";
// import { Link, useLocation } from "react-router";
// import { FaChevronDown } from "react-icons/fa";

// const HealthCalculatorDropdown = ({ mobile = false, closeMenu }) => {
//   const [open, setOpen] = useState(false);
//   const location = useLocation();

//   const isActive = location.pathname.startsWith("/health-calculator");

//   useEffect(() => {
//     setOpen(false);
//   }, [location.pathname]);

//   const handleToggle = () => {
//     setOpen((prev) => !prev);
//   };

//   const handleNavigate = () => {
//     setOpen(false);

//     if (closeMenu) {
//       closeMenu();
//     }
//   };

//   if (mobile) {
//     return (
//       <div className="w-full">
//         <button
//           type="button"
//           onClick={handleToggle}
//           className={`flex w-full items-center justify-between py-3 font-semibold ${
//             isActive ? "text-green-600" : ""
//           }`}
//         >
//           <span>Health Calculator</span>

//           <FaChevronDown
//             className={`text-xs transition-transform duration-200 ${
//               open ? "rotate-180" : ""
//             }`}
//           />
//         </button>

//         {open && (
//           <div className="ml-3 flex flex-col border-l-2 border-green-500 pl-3">
//             <Link
//               to="/health-calculator/bmi"
//               onClick={handleNavigate}
//               className="rounded-lg px-4 py-3 text-sm hover:bg-green-50 hover:text-green-700"
//             >
//               BMI Calculator
//             </Link>

//             <Link
//               to="/health-calculator/bmr"
//               onClick={handleNavigate}
//               className="rounded-lg px-4 py-3 text-sm hover:bg-green-50 hover:text-green-700"
//             >
//               BMR Calculator
//             </Link>

//             <Link
//               to="/health-calculator/ideal-weight"
//               onClick={handleNavigate}
//               className="rounded-lg px-4 py-3 text-sm hover:bg-green-50 hover:text-green-700"
//             >
//               Ideal Body Weight Calculator
//             </Link>
//           </div>
//         )}
//       </div>
//     );
//   }

//   return (
//     <li className="relative list-none">
//       <button
//         type="button"
//         onClick={handleToggle}
//         className={`flex items-center gap-2 bg-transparent px-1 font-semibold ${
//           isActive
//             ? "text-green-600 underline decoration-2 underline-offset-4"
//             : ""
//         }`}
//       >
//         <span>Health Calculator</span>

//         <FaChevronDown
//           className={`text-xs transition-transform duration-200 ${
//             open ? "rotate-180" : ""
//           }`}
//         />
//       </button>

//       {open && (
//         <div className="absolute left-0 top-full z-[100] mt-4 w-64 rounded-xl border border-base-300 bg-base-100 p-2 shadow-xl">
//           <div className="flex flex-col gap-1">
//             <Link
//               to="/health-calculator/bmi"
//               onClick={handleNavigate}
//               className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
//             >
//               BMI Calculator
//             </Link>

//             <Link
//               to="/health-calculator/bmr"
//               onClick={handleNavigate}
//               className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
//             >
//               BMR Calculator
//             </Link>

//             <Link
//               to="/health-calculator/ideal-weight"
//               onClick={handleNavigate}
//               className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
//             >
//               Ideal Body Weight Calculator
//             </Link>
//           </div>
//         </div>
//       )}
//     </li>
//   );
// };

// export default HealthCalculatorDropdown;
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router";
import { FaChevronDown } from "react-icons/fa";

const HealthCalculatorDropdown = ({ mobile = false, closeMenu }) => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = location.pathname.startsWith("/health-calculator");

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  const handleNavigate = () => {
    setOpen(false);

    if (closeMenu) {
      closeMenu();
    }
  };

  if (mobile) {
    return (
      <div className="w-full">
        <button
          type="button"
          onClick={handleToggle}
          className={`flex w-full items-center justify-between  font-semibold ${
            isActive ? "text-green-600" : ""
          }`}
        >
          <span>Health Calculator</span>

          <FaChevronDown
            className={`text-xs transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>

        {open && (
          <div className="ml-3 flex flex-col border-l-2 border-green-500 pl-3">
            <Link
              to="/health-calculator/bmi"
              onClick={handleNavigate}
              className="rounded-lg px-4 py-2 text-sm transition hover:bg-green-50 hover:text-green-700"
            >
              BMI Calculator
            </Link>

            <Link
              to="/health-calculator/bmr"
              onClick={handleNavigate}
              className="rounded-lg px-4 py-2 text-sm transition hover:bg-green-50 hover:text-green-700"
            >
              BMR Calculator
            </Link>

            <Link
              to="/health-calculator/ideal-weight"
              onClick={handleNavigate}
              className="rounded-lg px-4 py-2 text-sm transition hover:bg-green-50 hover:text-green-700"
            >
              Ideal Body Weight Calculator
            </Link>
            <Link
              to="/health-calculator/daily-calorie-calculator"
              onClick={handleNavigate}
              className="rounded-lg px-4 py-2 text-sm transition hover:bg-green-50 hover:text-green-700"
            >
              Daily Calorie Calculator
            </Link>
            <Link
              to="/health-calculator/daily-water-intake"
              onClick={handleNavigate}
              className="rounded-lg px-4 py-2 text-sm transition hover:bg-green-50 hover:text-green-700"
            >
              Daily Water intake
            </Link>
            <Link
              to="/health-calculator/protein-intake"
              onClick={handleNavigate}
              className="rounded-lg px-4 py-2 text-sm transition hover:bg-green-50 hover:text-green-700"
            >
              Protein Intake
            </Link>
          </div>
        )}
      </div>
    );
  }

  return (
    <li className="relative flex h-full list-none items-center">
      <button
        type="button"
        onClick={handleToggle}
        className={`flex items-center gap-2 bg-transparent px-1 py-1 font-semibold leading-none ${
          isActive
            ? "text-green-600 underline decoration-2 underline-offset-4"
            : ""
        }`}
      >
        <span>Health Calculator</span>

        <FaChevronDown
          className={`text-xs transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="absolute left-0 top-full z-[100] mt-4 w-64 rounded-xl border border-base-300 bg-base-100 p-2 shadow-xl">
          <div className="flex flex-col gap-1">
            <Link
              to="/health-calculator/bmi"
              onClick={handleNavigate}
              className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
            >
              BMI Calculator
            </Link>

            <Link
              to="/health-calculator/bmr"
              onClick={handleNavigate}
              className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
            >
              BMR Calculator
            </Link>

            <Link
              to="/health-calculator/ideal-weight"
              onClick={handleNavigate}
              className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
            >
              Ideal Body Weight Calculator
            </Link>
            <Link
              to="/health-calculator/daily-calorie-calculator"
              onClick={handleNavigate}
              className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
            >
              Daily Calorie Calculator
            </Link>
            <Link
              to="/health-calculator/daily-water-intake"
              onClick={handleNavigate}
              className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
            >
              Daily Water intake
            </Link>
            <Link
              to="/health-calculator/protein-intake"
              onClick={handleNavigate}
              className="block w-full rounded-lg px-4 py-3 text-sm font-medium whitespace-nowrap transition hover:bg-green-50 hover:text-green-700"
            >
              Protein Intake
            </Link>
          </div>
        </div>
      )}
    </li>
  );
};

export default HealthCalculatorDropdown;
