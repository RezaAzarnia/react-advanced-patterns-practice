import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import router from "./router/route.jsx";
import "react-toastify/dist/ReactToastify.css";
import "./index.css";

createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <ToastContainer />
    <RouterProvider router={router} />
  </>
);
