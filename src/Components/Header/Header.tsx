import { Link } from "react-router-dom";
import { screenList } from "../../Routing/RoutingList";
import { CustomNavLink } from "./MyComponents/CustomNavLink";
import { IRoutingList } from "../../Routing/Routing.types";
import { CartIcon } from "./MyComponents/CartIcon";

const screenNavList: IRoutingList[] = [
   screenList.contact,
   screenList.about,
   screenList.catalog,
];

export const Header = (): JSX.Element => {
   return (
      <>
         <div className="container py-6 opacity-0 text-2xl w-full invisible">
            {/* background header */}
            MediaSOL
         </div>
         <header className="fixed top-0 left-0 w-full pt-6 pb-2 bg-white z-20">
            <div className="flex gap-4 justify-between container w-full pb-0">
               <Link
                  to={"/"}
                  className="flex justify-center items-center gap-2 text-2xl"
                  title="Startseite"
               >
                  <img src="/mainIcon.svg" alt="M" className="h-[15px]" />
                  <span className="font-bold whitespace-nowrap transition-opacity duration-300 hover:opacity-60">
                     MediaSOL
                  </span>
               </Link>

               <nav className="flex gap-4 justify-center items-center font-semibold">
                  {/* Generated with special List with name params */}
                  {screenNavList.map((screen) => {
                     return (
                        <CustomNavLink
                           key={screen.path}
                           myPath={screen.path}
                           myName={screen.name}
                        />
                     );
                  })}

                  {/* Icons */}
                  <CartIcon />
               </nav>
            </div>
            <div className="bg-gradient-to-b from-white to-transparent h-4 absolute bottom-[-16px] w-full left-0" />
         </header>
      </>
   );
};
