import { Outlet } from "react-router";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Components/Home/Footer";

const RootLayout = () => {
  return (
    <div className="mx-auto  ">
      <Navbar />
      <main className="min-h-[calc(100vh-245px)] mx-auto px-6">
        <Outlet />
        <Footer />
      </main>
    </div>
  );
};

export default RootLayout;
// import { Outlet } from "react-router";
// import Navbar from "../Shared/Navbar/Navbar";

// const RootLayout = () => {
//   return (
//     <div className="mx-auto  ">
//       <Navbar />
//       <main className="min-h-[calc(100vh-245px)] w-1/121 mx-auto px-6">
//         <Outlet />
//       </main>
//     </div>
//   );
// };

// export default RootLayout;
