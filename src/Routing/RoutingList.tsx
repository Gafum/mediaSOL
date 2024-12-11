import About from "../Screens/About/About";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import { ConsultationService } from "../Screens/ServicesScreen/Consultation/Consultation";
import { Maintenance } from "../Screens/ServicesScreen/Maintenance/Maintenance";

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
   maintenanceService: {
      path: "/service/maintenance",
      component: <Maintenance />,
      name: "Wartung der Rechner",
   },
};
