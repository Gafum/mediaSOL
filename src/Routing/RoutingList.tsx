import About from "../Screens/About/About";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import { ConsultationServiceContent } from "../Screens/ServicesScreen/ServicesData/Consultation";
import { MaintenanceServiceContent } from "../Screens/ServicesScreen/ServicesData/Maintenance";
import { NetworkSetupContent } from "../Screens/ServicesScreen/ServicesData/NetworkSetup";
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
   consultationService: {
      path: "/service/consultation",
      component: (
         <ServicesScreenGenerator ServicesList={ConsultationServiceContent} />
      ),
      name: "Beratung",
   },
   maintenanceService: {
      path: "/service/maintenance",
      component: (
         <ServicesScreenGenerator ServicesList={MaintenanceServiceContent} />
      ),
      name: "Wartung der Rechner",
   },
   networkSetupService: {
      path: "/service/networkSetup",
      component: <ServicesScreenGenerator ServicesList={NetworkSetupContent} />,
      name: "Netzwerkeinstellungen und Einrichtung",
   },
   technicalSupportService: {
      path: "/service/maintenance",
      component: (
         <ServicesScreenGenerator ServicesList={ConsultationServiceContent} />
      ),
      name: "Wartung der Rechner",
   },
};
