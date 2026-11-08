import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";

const AboutLayout = () => {
  return (
    <div className="mx-auto  ">
      <ScrollToTop />
      <Navbar />
      <main className="min-h-[calc(100vh-245px)] mx-auto ">
        <Outlet />
      </main>
    </div>
  );
};

export default AboutLayout;
