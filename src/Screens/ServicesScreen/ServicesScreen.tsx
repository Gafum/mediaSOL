import { useNavigate } from "react-router-dom";
import CustomBtn from "../../UI/CustomBtn/CustomBtn";
import { screenList } from "../../Routing/RoutingList";

interface IOneSection {
   title: string;
   description?: string;
   list?: { title: string; description: string }[];
   bg?: "primaryBlue" | "primaryPink" | string;
   button?: boolean;
}

interface ServicesScreenProps {
   ServicesList: IOneSection[];
}

export const ServicesScreen = ({
   ServicesList,
}: ServicesScreenProps): JSX.Element => {
   const navigate = useNavigate();

   return (
      <>
         {ServicesList.map((elem) => {
            if (elem.list) {
               return (
                  <section className="py-16" key={elem.title}>
                     <h3 className="text-3xl font-semibold text-center mb-8">
                        {elem.title}
                     </h3>
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {elem.list.map(
                           ({ title, description }: IOneSection) => {
                              return (
                                 <div
                                    className="bg-primaryLightGrey shadow-sm rounded-lg p-6"
                                    key={title}
                                 >
                                    <h3 className="text-xl font-semibold mb-4">
                                       {title}
                                    </h3>
                                    <p className="text-gray-800">
                                       {description}
                                    </p>
                                 </div>
                              );
                           }
                        )}
                     </div>
                  </section>
               );
            } else {
               return (
                  <section
                     className={`text-center py-16 px-4 rounded-md text-${elem.bg ? "white" : "black"} bg-${elem.bg}`}
                     key={elem.title}
                  >
                     <h3 className="text-3xl font-semibold text-center text-inherit">
                        {elem.title}
                     </h3>
                     <p className="mt-8 text-inherit">{elem.description}</p>
                     {elem.button && (
                        <CustomBtn
                           onClick={() => navigate(screenList.contact.path)}
                           btnText="Jetzt Kontakt aufnehmen"
                           className="w-1/2 min-w-200px font-semibold mt-8"
                           bgColor="white"
                           color={elem.bg}
                        />
                     )}
                  </section>
               );
            }
         })}
      </>
   );
};
