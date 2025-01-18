import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainRouter } from "./Routing/Routing";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <MainRouter />
   </StrictMode>
);
