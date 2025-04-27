import { Fragment, ReactNode } from "react";
import { screenList } from "../../Routing/RoutingList";
import { Link, useNavigate } from "react-router-dom";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { OurPartners } from "../Home/MyComponents/OurPartners";
import { MainMap } from "../../Components/MainMap/MainMap";
import { aboutSectionData, IAboutSectionData } from "./AboutSectionData";

const SectionAboutPage = ({
   title,
   description,
}: IAboutSectionData): JSX.Element => {
   function createDescription(): ReactNode {
      if (typeof description == "string") {
         return (
            <p className="text-xs md:text-sm text-justify text-gray-600">
               {description}
            </p>
         );
      } else {
         return (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-2">
               {description.map((data) => (
                  <div
                     key={data.title}
                     className="bg-primaryLightGrey p-4 rounded-md shadow-sm flex flex-col sm:flex-row sm500:gap-3 items-center justify-center sm:justify-start text-center sm:text-left"
                  >
                     <div className="min-h-12 min-w-12 h-12 w-12 sm500:min-h-16 sm500:min-w-16 sm500:h-16 sm500:w-16">
                        {data.icon}
                     </div>
                     <div>
                        <h3 className="sm500:text-md font-semibold">
                           {data.title}
                        </h3>
                        <p className="text-xs sm:text-sm mt-1 text-primaryDarkGrey">
                           {data.text}
                        </p>
                     </div>
                  </div>
               ))}
            </div>
         );
      }
   }

   return (
      <section className={"About__" + title + " mt-4 md:mt-6"}>
         <h2 className="sm:text-lg md:text-2xl font-semibold text-left mb-1 md:mb-2">
            {title}
         </h2>
         {createDescription()}
      </section>
   );
};

export const About = (): JSX.Element => {
   const navigate = useNavigate();

   return (
      <div className="m-auto flex flex-col">
         <section className="About__description flex gap-2 sm500:gap-4 justify-start sm500:items-center flex-col lg:flex-row">
            <Link
               to={screenList.home.path}
               className="w-full max-w-[150px] ml-3 sm500:m-0 sm:max-w-[200px] lg:w-1/2"
            >
               <img src={import.meta.env.VITE_BASE_URL + "/mainIcon.svg"} alt="M" />
            </Link>
            <div className="text-left sm500:text-center lg:text-left lg:py-6 w-full lg:w-auto">
               <h1 className="text-lg sm:text-xl md:text-2xl font-semibold sm:font-bold">
                  Über MediaSOL GmbH
               </h1>
               <p className="text-xs md:text-sm text-gray-600">
                  Ihr zuverlässiger Partner für IT-Beratung, technische Lösungen
                  und Innovation.
               </p>
            </div>
         </section>

         {aboutSectionData.map((sectionData) => {
            if (sectionData.name == "location") {
               return (
                  <Fragment key={sectionData.name}>
                     <SectionAboutPage
                        {...sectionData}
                        key={sectionData.name}
                     />
                     <MainMap className="w-full h-[220px] md:h-96 mt-5" />
                     <h2 className="text-lg md:text-2xl font-semibold text-left mt-3">
                        Unsere Partner
                     </h2>
                     <OurPartners />
                  </Fragment>
               );
            }
            return <SectionAboutPage {...sectionData} key={sectionData.name} />;
         })}

         <CustomBtn
            onClick={() => navigate(screenList.contact.path)}
            btnText="Zur Kontaktseite"
            className="mt-6"
         />
      </div>
   );
};
