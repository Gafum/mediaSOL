import About from "../Screens/About/About";
import { Catalog } from "../Screens/Catalog/Catalog";
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import { ConsultationServiceContent } from "../Screens/ServicesScreen/ServicesContent/Consultation";
import { MaintenanceServiceContent } from "../Screens/ServicesScreen/ServicesContent/Maintenance";
import { NetworkSetupContent } from "../Screens/ServicesScreen/ServicesContent/NetworkSetup";
import { TechnicalSupportContent } from "../Screens/ServicesScreen/ServicesContent/TechnicalSupport";
import { ServicesScreenGenerator } from "../Screens/ServicesScreen/ServicesScreenGenerator";
import { Item } from "../Screens/Item/Item";

import { IScreenList } from "./Routing.types";

export const screenList: IScreenList = {
   home: { path: "/", component: <Home />, name: "Startseite" },
   about: { path: "/about", component: <About />, name: "Über uns" },
   contact: { path: "/contact", component: <Contact />, name: "Kontakt" },
   catalog: { path: "/catalog", component: <Catalog />, name: "Katalog" },
   item: { path: "/item/:itemId", component: <Item />, name: "Item" },
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
      path: "/service/technicalSupport",
      component: (
         <ServicesScreenGenerator ServicesList={TechnicalSupportContent} />
      ),
      name: "Technischer Support und Service",
   },
};
