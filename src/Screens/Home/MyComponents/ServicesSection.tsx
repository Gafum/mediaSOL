import { ChevronRight } from "lucide-react";
import { screenList } from "../../../Routing/RoutingList";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const ServicesDescription = ({
   title,
   className,
}: {
   title: string;
   className?: string;
}): JSX.Element => {
   return (
      <div
         className={twMerge(
            "text__block absolute max-w-[350px] w-1/2",
            className
         )}
      >
         <h1 className="text-white text-lg lg:text-2xl ">{title}</h1>
         <button className="h-10 w-10  bg-[#ffffff44] transition-colors hover:bg-[#ffffff55] duration-300 flex justify-center items-center mt-3 rounded-[4px]">
            <ChevronRight color="#ffffff" />
         </button>
      </div>
   );
};

export const ServicesSection = (): JSX.Element => {
   return (
      <section className="flex flex-col md:flex-row gap-4 mt-9">
         {/* Left Side */}
         <div className="w-full md:w-1/2 flex flex-col gap-4">
            <Link to={screenList.consultationService.path}>
               <div className="text__bloc relative bg-primaryDarkGrey p-5 rounded-lg">
                  <ServicesDescription title="Beratung von Firmen und Schulen" />
                  <img
                     src={
                        import.meta.env.BASE_URL +
                        "/SVG/Services/Consultation.svg"
                     }
                     alt="Consultation"
                     className="w-1/2 ml-auto"
                  />
               </div>
            </Link>

            <Link to={screenList.networkSetupService.path}>
               <div className="text__bloc relative bg-primaryPink flex flex-col gap-4 p-5 rounded-lg">
                  <ServicesDescription
                     title="Netzwerkeinstellungen und Einrichtung"
                     className="md:w-2/5"
                  />
                  <img
                     src={
                        import.meta.env.BASE_URL +
                        "/SVG/Services/NetworkSetup.svg"
                     }
                     alt="NetworkSetup"
                     className="w-1/2 ml-auto"
                  />
               </div>
            </Link>
         </div>

         {/* Right Side */}
         <div className="w-full md:w-1/2 flex flex-col gap-4">
            <Link to={screenList.maintenanceService.path}>
               <div className="relative bg-primaryDarkGrey flex flex-col gap-4 p-5 rounded-lg">
                  <ServicesDescription
                     title="Wartung der Rechner und Server"
                     className="md:w-2/5"
                  />
                  <img
                     src={
                        import.meta.env.BASE_URL +
                        "/SVG/Services/Maintenance.svg"
                     }
                     alt="Maintenance"
                     className="w-1/2 md:w-3/5 ml-auto "
                  />
               </div>
            </Link>

            <Link to={screenList.technicalSupportService.path}>
               <div className="relative bg-primaryBlue flex flex-col gap-4 p-5 rounded-lg">
                  <ServicesDescription
                     title="Technischer Support und Service"
                     className="lg:w-2/5 md:min-w-[195px]"
                  />
                  <img
                     src={
                        import.meta.env.BASE_URL +
                        "/SVG/Services/TechnicalSupport.svg"
                     }
                     alt="TechnicalSupport"
                     className="w-1/2 md:w-2/5 ml-auto"
                  />
               </div>
            </Link>
         </div>
      </section>
   );
};
