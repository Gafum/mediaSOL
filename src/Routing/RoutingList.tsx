import About from "../Screens/About/About";
import Home from "../Screens/Home/Home";
import { IRoutingList } from "./Routing.types";

export const screenNavList: string[] = ["contact", "about", "catalog"]

export const screenList: IRoutingList[] = [
   {
      path: "/",
      name: "home",
      component: <Home />,
   },
   {
      path: "/contact",
      name: "contact",
      component: <div>Contact</div>,
   },
   {
      path: "/about",
      name: "about",
      component: <About />,
   },
   {
      path: "/catalog",
      name: "catalog",
      component: <div>Catalog</div>,
   }
];
