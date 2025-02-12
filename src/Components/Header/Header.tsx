import { Link, NavLink } from "react-router-dom";
import { screenList } from "../../Routing/RoutingList";
import { CustomNavLink } from "./MyComponents/CustomNavLink";
import { IRoutingList } from "../../Routing/Routing.types";

const screenNavList: IRoutingList[] = [
   screenList.contact,
   screenList.about,
   screenList.catalog,
];

export const Header = (): JSX.Element => {
   return (
      <>
         <div className="container py-6 opacity-0 text-2xl w-full ">
            {/* background header */}
            MediaSOL
         </div>
         <header className="fixed top-0 left-0 w-full pt-6 pb-2 bg-white z-20">
            <div className="flex gap-4 justify-between container w-full pb-0">
               <Link
                  to={"/"}
                  className="flex justify-center items-center gap-2 text-2xl"
               >
                  <img src="/mainIcon.svg" alt="M" className="h-[15px]" />
                  <span className="font-bold whitespace-nowrap transition-opacity duration-300 hover:opacity-70">
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
                  <NavLink to={screenList.cart.path}>
                     <svg
                        width="20"
                        height="20"
                        viewBox="0 0 131 121"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke-width="12"
                        className="relative top-[0.6px]"
                     >
                        <rect
                           x="5"
                           y="33"
                           width="121"
                           height="83"
                           rx="15"
                           stroke="black"
                        />
                        <path
                           d="M34 56V94"
                           stroke="black"
                           stroke-linecap="round"
                        />
                        <path
                           d="M65 56V94"
                           stroke="black"
                           stroke-linecap="round"
                        />
                        <path
                           d="M96 56V93"
                           stroke="black"
                           stroke-linecap="round"
                        />
                        <path
                           d="M41 5H90C92.7614 5 95 7.23858 95 10V33H36V10C36 7.23858 38.2386 5 41 5Z"
                           stroke="black"
                        />
                     </svg>
                  </NavLink>
               </nav>
            </div>
            <div className="bg-gradient-to-b from-white to-transparent h-4 absolute bottom-[-16px] w-full left-0" />
         </header>
      </>
   );
};
