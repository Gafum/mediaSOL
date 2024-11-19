import About from "../Screens/About/About"
import { Catalog } from "../Screens/Catalog/Catalog"
import Contact from "../Screens/Contact/Contact"
import Home from "../Screens/Home/Home"
import { IScreenList } from "./Routing.types"

export const screenList: IScreenList = {
   home: { path: "/", component: <Home />, name: "Home" },
   about: { path: "/about", component: <About />, name: "About" },
   contact: { path: "/contact", component: <Contact />, name: "Contact" },
   catalog: { path: "/catalog", component: <Catalog />, name: "Catalog" },
}
