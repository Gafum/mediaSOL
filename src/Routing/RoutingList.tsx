import About from "../Screens/About/About";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import { ConsultationServiceData } from "../Screens/ServicesScreen/ServicesData/Consultation";
import { MaintenanceServiceData } from "../Screens/ServicesScreen/ServicesData/Maintenance";
import { ServicesScreenGenerator } from "../Screens/ServicesScreen/ServicesScreenGenerator";

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
      component: (
         <ServicesScreenGenerator ServicesList={ConsultationServiceData} />
      ),
      name: "Beratung",
   },
   maintenanceService: {
      path: "/service/maintenance",
      component: (
         <ServicesScreenGenerator ServicesList={MaintenanceServiceData} />
      ),
      name: "Wartung der Rechner",
   },
};
