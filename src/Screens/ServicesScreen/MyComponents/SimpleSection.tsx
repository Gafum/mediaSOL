import { useNavigate } from "react-router-dom";
import { IOneSection } from "../ServicesScreen";
import { screenList } from "../../../Routing/RoutingList";
import CustomBtn from "../../../UI/CustomBtn/CustomBtn";

export const SimpleSection = ({
   title,
   description,
   bg,
   button,
}: IOneSection): JSX.Element => {
   const navigate = useNavigate();
   return (
      <section
         className={`text-center py-16 px-4 rounded-md text-${bg ? "white" : "black"} bg-${bg}`}
      >
         <h3 className="text-3xl font-semibold text-center text-inherit">
            {title}
         </h3>
         <p className="mt-8 text-inherit">{description}</p>
         {button && (
            <CustomBtn
               onClick={() => navigate(screenList.contact.path)}
               btnText="Jetzt Kontakt aufnehmen"
               className="w-1/2 min-w-200px font-semibold mt-8"
               bgColor="white"
               color={bg}
            />
         )}
      </section>
   );
};
