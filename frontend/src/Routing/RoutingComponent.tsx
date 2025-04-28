import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { SimpleError } from "../Components/Errors/SimpleError";
import { screenList } from "./RoutingList";
import { Header } from "../Components/Header/Header";
import { Footer } from "../Components/Footer/Footer";
import { useEffect } from "react";

export const Router = (): JSX.Element => {
   const location = useLocation();
   useEffect(() => {
      let screenName: string | undefined = Object.values(screenList).find(
         (e) => {
            return e.path == location.pathname;
         }
      )?.name;

      if (!screenName) {
         screenName;
         // console.log("EROR WITH PATH NAME", screenName);

         document.title = `MediaSOL - Computerpflege`;
      } else {
         document.title = `${screenName} - MediaSOL - Computerpflege`;
      }

      window.scrollTo(0, 0);
   }, [location]);

   return (
      <Routes location={location} key={location.pathname}>
         {Object.values(screenList).map((screen) => (
            <Route
               key={screen.path}
               path={screen.path}
               element={<div className="container">{screen.component}</div>}
            />
         ))}

         <Route path="*" element={<SimpleError />} />
      </Routes>
   );
};

export const MainRouter = (): JSX.Element => {
   return (
      <BrowserRouter>
         <div className="flex flex-col h-full">
            <div className="flex-1">
               <Header />
               <Router />
            </div>
            <div className="flex-0">
               <Footer />
            </div>
         </div>
      </BrowserRouter>
   );
};
