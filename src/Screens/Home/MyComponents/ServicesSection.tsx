import { ChevronRight } from "lucide-react";
import { screenList } from "../../../Routing/RoutingList";
import { Link } from "react-router-dom";
import { twMerge } from "tailwind-merge";

interface IServiceItem {
   title: string;
   href: string;
   shortImgPath: string;
   className?: string;
   paragrathClassName?: string;
   imgClassName?: string;
}

const ServiceItem = ({
   title,
   href,
   shortImgPath,
   className,
   paragrathClassName,
   imgClassName,
}: IServiceItem): JSX.Element => {
   return (
      <Link to={href}>
         <div
            className={twMerge(
               "relative flex bg-primaryDarkGrey p-5 rounded-lg max-h-[300px] md:max-h-none",
               className
            )}
         >
            <div
               className={twMerge(
                  "sm500:absolute sm500:max-w-[350px] w-1/2",
                  paragrathClassName
               )}
            >
               <h1 className="text-white text-base sm:text-lg lg:text-2xl">
                  {title}
               </h1>
               <button className="h-10 w-10  bg-[#ffffff44] transition-colors hover:bg-[#ffffff55] duration-300 hidden sm500:flex justify-center items-center mt-3 rounded-[4px] ">
                  <ChevronRight color="#ffffff" />
               </button>
            </div>
            <img
               src={
                  import.meta.env.BASE_URL +
                  "/SVG/Services/" +
                  shortImgPath +
                  ".svg"
               }
               alt={title + " img"}
               className={twMerge("ml-auto w-1/2", imgClassName)}
            />
         </div>
      </Link>
   );
};

export const ServicesSection = (): JSX.Element => {
   return (
      <section className="flex flex-col md:flex-row gap-4 mt-9">
         {/* Left Side */}
         <div className="w-full md:w-1/2 flex flex-col gap-4">
            <ServiceItem
               title="Beratung von Firmen und Schulen"
               href={screenList.consultationService.path}
               shortImgPath={"Consultation"}
            />

            <ServiceItem
               title="Netzwerk Einrichten und Einstellen"
               paragrathClassName="md:w-2/5"
               href={screenList.networkSetupService.path}
               shortImgPath={"NetworkSetup"}
               className="bg-primaryPink"
            />
         </div>

         {/* Right Side */}
         <div className="w-full md:w-1/2 flex flex-col gap-4">
            <ServiceItem
               title="Wartung der Rechner und Server"
               paragrathClassName="md:w-2/5"
               href={screenList.maintenanceService.path}
               shortImgPath={"Maintenance"}
               imgClassName="md:w-3/5"
            />

            <ServiceItem
               title="Technischer Support und Service"
               paragrathClassName="lg:w-2/5 md:min-w-[195px]"
               href={screenList.technicalSupportService.path}
               shortImgPath={"TechnicalSupport"}
               imgClassName="md:w-2/5"
               className="bg-primaryBlue"
            />
         </div>
      </section>
   );
};
