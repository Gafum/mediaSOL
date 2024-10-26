import { NavLink } from "react-router-dom";
import { screenList } from "../../Routing/RoutingList";

function Header(): JSX.Element {
   return (<>
      <div className=" container py-6 opacity-0 text-3xl">
         {/* background header */}Hi
      </div>
      <header className="absolute top-0 left-0 w-full container py-6">
         <div className="flex gap-4 justify-between w-full">
            <NavLink to={"/"} className="flex justify-center items-center gap-2 text-2xl">
               <img src="/mainIcon.svg" alt="M" className="h-[15px]" />
               <span className="font-semibold">MediaSOL</span>
            </NavLink>
            <nav className="flex gap-4 justify-center items-center font-semibold">
               <NavLink
                  className="font-medium"
                  to={screenList.find((e) => e.name == "contact")?.path || "/"}
               >
                  Contact
               </NavLink>

               <NavLink
                  className="font-medium"
                  to={screenList.find((e) => e.name == "about")?.path || "/"}
               >
                  About
               </NavLink>

               <NavLink
                  className="font-medium"
                  to={screenList.find((e) => e.name == "Catalog")?.path || "/"}
               >
                  Catalog
               </NavLink>
            </nav>
         </div >
      </header >
   </>
   );
}

export default Header;