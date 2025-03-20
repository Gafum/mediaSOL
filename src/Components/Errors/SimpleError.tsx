import { useNavigate } from "react-router-dom";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { screenList } from "../../Routing/RoutingList";

interface ISimpleErrorProps {
   title?: string;
   btnText?: string;
   navigateTo?: string;
}

export const SimpleError = ({
   title = "Keine Seite gefunden...",
   btnText = "Zur " + screenList.home.name,
   navigateTo = screenList.home.path,
}: ISimpleErrorProps): JSX.Element => {
   let navigate = useNavigate();

   return (
      <div className="container flex justify-center items-center gap-4 sm:gap-9 flex-col mt-24 sm:mt-36">
         <h1 className="font-semibold text-center text-base sm300:text-2xl sm:text-4xl">
            {title}
         </h1>
         <CustomBtn
            btnText={btnText}
            onClick={() => navigate(navigateTo)}
            className="max-w-[85%] sm:max-w-[400px] w-full"
         />
      </div>
   );
};
