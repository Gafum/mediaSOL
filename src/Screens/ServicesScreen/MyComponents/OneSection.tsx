import { IOneSection } from "../ServicesScreen";
import { SimpleSection } from "./SimpleSection";

export const OneSection = ({
   title,
   description,
   bg,
   button,
   list,
}: IOneSection): JSX.Element => {
   if (!list) {
      // Component without list
      return (
         <SimpleSection
            title={title}
            description={description}
            bg={bg}
            button={button}
         />
      );
   } else {
      let gridCols = list.length % 3 == 0 ? 3 : 2;

      // Component with list
      return (
         <section className="py-16">
            <h3 className="text-3xl font-semibold text-center mb-8">{title}</h3>
            <div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-5`}>
               {list.map(
                  ({
                     title: localTitle,
                     description: localDescription,
                  }: IOneSection) => {
                     return (
                        <div
                           className="bg-primaryLightGrey shadow-sm rounded-lg p-6"
                           key={localTitle}
                        >
                           <h3 className="text-xl font-semibold mb-4">
                              {localTitle}
                           </h3>
                           <p className="text-gray-800">{localDescription}</p>
                        </div>
                     );
                  }
               )}
            </div>
         </section>
      );
   }
};
