import { About } from "../Screens/About/About";
import { Catalog } from "../Screens/Catalog/Catalog";
import { Contact } from "../Screens/Contact/Contact";
import { Home } from "../Screens/Home/Home";
import { ConsultationServiceContent } from "../Screens/ServicesScreen/ServicesContent/Consultation";
import { MaintenanceServiceContent } from "../Screens/ServicesScreen/ServicesContent/Maintenance";
import { NetworkSetupContent } from "../Screens/ServicesScreen/ServicesContent/NetworkSetup";
import { TechnicalSupportContent } from "../Screens/ServicesScreen/ServicesContent/TechnicalSupport";
import { ServicesScreenGenerator } from "../Screens/ServicesScreen/ServicesScreenGenerator";
import { Item } from "../Screens/Item/Item";

import { IScreenList } from "./Routing.types";
import { Cart } from "../Screens/Cart/Cart";
import { Favorites } from "../Screens/Favorites/Favorites";

export const screenList: IScreenList = {
   home: {
      path: import.meta.env.BASE_URL,
      component: <Home />,
      name: "Startseite",
   },
   about: {
      path: import.meta.env.BASE_URL + "/about",
      component: <About />,
      name: "Über uns",
   },
   contact: {
      path: import.meta.env.BASE_URL + "/contact",
      component: <Contact />,
      name: "Kontakt",
   },
   catalog: {
      path: import.meta.env.BASE_URL + "/catalog",
      component: <Catalog />,
      name: "Katalog",
   },
   item: {
      path: import.meta.env.BASE_URL + "/item/:itemId",
      component: <Item />,
      name: "Ware",
   },
   cart: { path: "/cart", component: <Cart />, name: "Korb" },
   favorites: {
      path: import.meta.env.BASE_URL + "/favorites",
      component: <Favorites />,
      name: "Favoriten",
   },
   consultationService: {
      path: import.meta.env.BASE_URL + "/service/consultation",
      component: (
         <ServicesScreenGenerator ServicesList={ConsultationServiceContent} />
      ),
      name: "Beratung",
   },
   maintenanceService: {
      path: import.meta.env.BASE_URL + "/service/maintenance",
      component: (
         <ServicesScreenGenerator ServicesList={MaintenanceServiceContent} />
      ),
      name: "Wartung der Rechner",
   },
   networkSetupService: {
      path: import.meta.env.BASE_URL + "/service/networkSetup",
      component: <ServicesScreenGenerator ServicesList={NetworkSetupContent} />,
      name: "Netzwerkeinstellungen und Einrichtung",
   },
   technicalSupportService: {
      path: import.meta.env.BASE_URL + "/service/technicalSupport",
      component: (
         <ServicesScreenGenerator ServicesList={TechnicalSupportContent} />
      ),
      name: "Technischer Support und Service",
   },
};
