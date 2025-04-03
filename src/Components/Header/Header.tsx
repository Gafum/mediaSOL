import { Link } from "react-router-dom";
import { screenList } from "../../Routing/RoutingList";
import { CustomNavLink } from "./MyComponents/CustomNavLink";
import { IRoutingList } from "../../Routing/Routing.types";
import { CartIcon } from "./MyComponents/CartIcon";
import { FavoritesIcon } from "./MyComponents/FavoritesIcon";
import { Hamburger } from "./MyComponents/Hamburger";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

const screenNavList: IRoutingList[] = [
   screenList.contact,
   screenList.about,
   screenList.catalog,
];

export const Header = (): JSX.Element => {
   const [openNav, setOpenNav] = useState(false);

   return (
      <>
         <div
            className="text-base sm500:text-2xl container pb-5 pt-3 sm500:pt-4 md:py-6 opacity-0 w-full invisible"
            translate="no"
         >
            {/* background header */}
            MediaSOL
         </div>
         <header className="fixed top-0 left-0 w-full pt-2 sm500:pt-4 md:pt-6 pb-2 bg-white z-10">
            <div className="flex gap-4 justify-between container w-full pb-0">
               <Link
                  to={screenList.home.path}
                  className="flex justify-center items-center gap-1 sm500:gap-2"
                  title="Startseite"
               >
                  <img
                     src={import.meta.env.BASE_URL + "/mainIcon.svg"}
                     alt="M"
                     className="h-[15px]"
                  />
                  <span
                     translate="no"
                     className="font-bold whitespace-nowrap transition-opacity duration-300 hover:opacity-60 hidden sm300:inline text-lg sm500:text-2xl "
                  >
                     MediaSOL
                  </span>
               </Link>

               <nav className="flex gap-4 justify-center items-center">
                  {/* Generated with special List with name params */}
                  <div
                     className={twMerge(
                        "hidden absolute md:static px-3 pt-2 sm500:pt-1 pb-3 shadow-lg shadow-white md:shadow-none md:p-0 top-full left-0 z-10 bg-white w-full flex-col gap-7 sm500:flex-row md:flex  sm500:gap-4 justify-around md:justify-center items-center font-semibold",
                        openNav ? "flex " : "hidden md:flex"
                     )}
                  >
                     {screenNavList.map((screen) => {
                        return (
                           <CustomNavLink
                              key={screen.path}
                              myPath={screen.path}
                              myName={screen.name}
                           />
                        );
                     })}
                  </div>

                  {/* Icons */}
                  <FavoritesIcon />
                  <CartIcon />
                  <Hamburger
                     onClick={({ close }: { close?: true }) => {
                        if (close) {
                           setOpenNav(false);
                        } else {
                           setOpenNav((prev) => !prev);
                        }
                     }}
                     className="md:hidden"
                  />
               </nav>
            </div>
            <div className="bg-gradient-to-b from-white to-transparent h-4 absolute bottom-[-16px] w-full left-0" />
         </header>
      </>
   );
};
