import { NavLink } from "react-router";

const Navlink = ({ to, children, className = "" }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${className} ${isActive ? "text-green-600 underline  font-extrabold" : "hover:text-green-500 hover:font-semibold"}`
      }
    >
      {children}
    </NavLink>
  );
};

export default Navlink;
