import { IOneSection } from "../ServicesScreenGenerator";
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
      let gridCols = list.length % 3 == 0; // Is the list nicely divisible by 3?

      // Component with list
      return (
         <section className="py-16">
            <h3 className="text-3xl font-semibold text-center mb-8">{title}</h3>
            <div
               className={`grid grid-cols-1 ${gridCols ? "md:grid-cols-3" : "md:grid-cols-2"} gap-5`}
            >
               {list.map(
                  ({
                     title: localTitle,
                     description: localDescription,
                  }: IOneSection) => {
                     return (
                        <div
                           className={`bg-primaryLightGrey shadow-sm rounded-lg p-6 ${gridCols ? "text-center" : "text-left"}`}
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
