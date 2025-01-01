import About from "../Screens/About/About";
import { Catalog } from "../Screens/Catalog/Catalog"
import Contact from "../Screens/Contact/Contact";
import Home from "../Screens/Home/Home";
import { ConsultationServiceContent } from "../Screens/ServicesScreen/ServicesContent/Consultation";
import { MaintenanceServiceContent } from "../Screens/ServicesScreen/ServicesContent/Maintenance";
import { NetworkSetupContent } from "../Screens/ServicesScreen/ServicesContent/NetworkSetup";
import { TechnicalSupportContent } from "../Screens/ServicesScreen/ServicesContent/TechnicalSupport";
import { ServicesScreenGenerator } from "../Screens/ServicesScreen/ServicesScreenGenerator";
import { Item } from "../Screens/Item/Item"

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
}
