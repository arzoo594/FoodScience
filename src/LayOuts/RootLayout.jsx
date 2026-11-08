import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Components/Home/Footer";
import ScrollToTop from "../Components/ScrollToTop/ScrollToTop";
import LoadingScreen from "../Components/LoadingScreen/LoadingScreen";

const RootLayout = () => {
  return (
    <div className="mx-auto min-h-screen">
      <ScrollToTop />
      <LoadingScreen />
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] mx-auto">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
