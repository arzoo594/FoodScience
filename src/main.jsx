import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";
import { router } from "./Routes/Router.jsx";
import LoadingScreen from "./Components/LoadingScreen/LoadingScreen.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LoadingScreen />
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
