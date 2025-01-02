import { Link } from "react-router-dom";
import { screenList } from "../../Routing/RoutingList";
import { contactData } from "../../Screens/Contact/ContactData";

export const Footer = (): JSX.Element => {
   return (
      <footer className="bg-primaryLightGrey">
         <div className="flex justify-start px-9 py-4 gap-6 items-start container">
            <img src="/mainIcon.svg" alt="M" className="w-[54px] mt-1" />
            <div className="flex justify-start gap-[96px]">
               <div className="flex flex-col">
                  <h4 className="font-semibold mb-2">Kontact</h4>
                  <div>{contactData.telephone}</div>
                  <div>{contactData.email}</div>
               </div>
               <div className="flex flex-col ">
                  <h4 className="font-semibold mb-2">Seiten</h4>
                  <Link
                     to={screenList.home.path}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {screenList.home.name}
                  </Link>
                  <Link
                     to={screenList.about.path}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {screenList.about.name}
                  </Link>
                  <Link
                     to={screenList.catalog.path}
                     className="hover:opacity-70 transition-opacity duration-200"
                  >
                     {screenList.catalog.name}
                  </Link>
               </div>
               <div className="flex flex-col">
                  <h4 className="font-semibold mb-2">Entwikeler</h4>
                  <a
                     href="https://github.com/Gafum"
                     className="hover:opacity-70 transition-opacity duration-200"
                     target="_blank"
                  >
                     GitHub
                  </a>
                  <a
                     href="https://www.youtube.com/@gafum"
                     className="hover:opacity-70 transition-opacity duration-200"
                     target="_blank"
                  >
                     YouTube
                  </a>
               </div>
            </div>
         </div>
      </footer>
   );
};
