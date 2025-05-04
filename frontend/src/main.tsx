import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MainRouter } from "./Routing/RoutingComponent";
import "swiper/css";
import "swiper/css/pagination";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
   <StrictMode>
      <QueryClientProvider client={queryClient}>
         <MainRouter />
      </QueryClientProvider>
   </StrictMode>
);
