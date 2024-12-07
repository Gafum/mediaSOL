import About from "../Screens/About/About";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import { ConsultationService } from "../Screens/Services/Consultation/Consultation";
import { IScreenList } from "./Routing.types";

export const screenList: IScreenList = {
   home: { path: "/", component: <Home />, name: "Startseite" },
   about: { path: "/about", component: <About />, name: "Über uns" },
   contact: { path: "/contact", component: <Contact />, name: "Kontakt" },
   catalog: {
      path: "/catalog",
      component: <div>Catalog</div>,
      name: "Katalog",
   },
   contationService: {
      path: "/service/consultation",
      component: <ConsultationService />,
      name: "Beratung",
   },
};
