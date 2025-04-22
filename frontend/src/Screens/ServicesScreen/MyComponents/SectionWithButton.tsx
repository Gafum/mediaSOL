import { useNavigate } from "react-router-dom";
import { IOneSection } from "../ServicesScreenGenerator";
import { screenList } from "../../../Routing/RoutingList";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";

export const SectionWithButton = ({
   title,
   description,
   bg,
   button,
}: IOneSection): JSX.Element => {
   const navigate = useNavigate();
   return (
      <section
         className={`text-center py-3 sm500:py-4 sm:py-6 md:py-16 px-2 md:px-4 rounded-md  ${bg ? "text-white" : "mt-4 text-black"} bg-${bg}`}
      >
         <h3 className="text-pretty text-lg sm500:text-xl sm:text-3xl font-semibold text-center text-inherit">
            {title}
         </h3>
         <p className="text-pretty mt-1 sm500:mt-3 md:mt-8 text-xs sm500:text-sm sm:text-base text-inherit">
            {description}
         </p>
         {button && (
            <CustomBtn
               onClick={() => navigate(screenList.contact.path)}
               btnText="Jetzt Kontakt aufnehmen"
               className="w-full sm:w-1/2 sm:min-w-[250px] font-semibold mt-3 sm500:mt-6 md:mt-8 text-xs sm500:text-base"
               bgColor="white"
               color={bg}
            />
         )}
      </section>
   );
};
