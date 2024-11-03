import About from "../Screens/About/About";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import { IScreenList } from "./Routing.types";

export const screenList: IScreenList = {
   home: { path: '/', component: <Home /> },
   about: { path: '/about', component: <About /> },
   contact: { path: '/contact', component: <Contact /> },
   catalog: { path: "/catalog", component: <div>Catalog</div> }
};