import { ChevronRight } from "lucide-react";
import { screenList } from "../../../Routing/RoutingList";
import { Link } from "react-router-dom";

export const ServicesSection = (): JSX.Element => {
   return (
      <section className="flex gap-4 mt-9">
         {/* Left Side */}
         <div className="w-1/2 flex flex-col gap-4">
            <Link to={screenList.consultationService.path}>
               <div className="text__bloc relative bg-primaryDarkGrey p-5 rounded-lg">
                  <div className="text__block absolute max-w-[350px] w-1/2">
                     <h1 className=" text-white text-2xl">
                        Beratung von Firmen und Schulen
                     </h1>
                     <div className="h-10 w-10 bg-[#ffffff44] flex justify-center items-center mt-3 rounded-[4px] duration-300 transition-colors hover:bg-[#ffffff55]">
                        <ChevronRight color="#ffffff" />
                     </div>
                  </div>
                  <img
                     src="/SVG/Services/Consultation.svg"
                     alt="Consultation"
                     className="w-1/2 ml-auto"
                  />
               </div>
            </Link>

            <Link to={screenList.networkSetupService.path}>
               <div className="text__bloc relative bg-primaryPink flex flex-col gap-4 p-5 rounded-lg">
                  <div className="text__block absolute max-w-350px] w-1/2">
                     <h1 className="text-white text-2xl">
                        Netzwerkeinstellungen und Einrichtung
                     </h1>
                     <button className="h-10 w-10 bg-[#ffffff44] flex justify-center items-center mt-3 rounded-[4px] duration-300 transition-colors hover:bg-[#ffffff55]">
                        <ChevronRight color="#ffffff" />
                     </button>
                  </div>
                  <img
                     src="/SVG/Services/NetworkSetup.svg"
                     alt="NetworkSetup"
                     className="w-1/2 ml-auto"
                  />
               </div>
            </Link>
         </div>

         {/* Right Side */}
         <div className="w-1/2 flex flex-col gap-4">
            <Link to={screenList.maintenanceService.path}>
               <div className="relative bg-primaryDarkGrey flex flex-col gap-4 p-5 rounded-lg">
                  <div className="text__block absolute max-w-[350px] w-2/5">
                     <h1 className="text-white text-2xl">
                        Wartung der Rechner und Server
                     </h1>
                     <button className="h-10 w-10 bg-[#ffffff44] transition-colors hover:bg-[#ffffff55] duration-300 flex justify-center items-center mt-3 rounded-[4px]">
                        <ChevronRight color="#ffffff" />
                     </button>
                  </div>
                  <img
                     src="/SVG/Services/Maintenance.svg"
                     alt="Maintenance"
                     className="w-3/5 ml-auto"
                  />
               </div>
            </Link>

            <Link to={screenList.technicalSupportService.path}>
               <div className="relative bg-primaryBlue flex flex-col gap-4 p-5 rounded-lg">
                  <div className="text__block absolute max-w-[350px] w-2/5">
                     <h1 className="text-white text-2xl">
                        Technischer Support und Service
                     </h1>
                     <button className="h-10 w-10 bg-[#ffffff44] transition-colors hover:bg-[#ffffff55] duration-300 flex justify-center items-center mt-3 rounded-[4px]">
                        <ChevronRight color="#ffffff" />
                     </button>
                  </div>
                  <img
                     src="/SVG/Services/TechnicalSupport.svg"
                     alt="TechnicalSupport"
                     className="w-2/5 ml-auto"
                  />
               </div>
            </Link>
         </div>
      </section>
   );
};
