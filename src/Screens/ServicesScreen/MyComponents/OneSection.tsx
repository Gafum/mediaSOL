import { IOneSection } from "../ServicesScreenGenerator";
import { SectionWithButton } from "./SectionWithButton";

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
         <SectionWithButton
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
         <section className="pt-4 pb-7 sm500:py-8 sm:py-16">
            <h3 className="text-pretty text-lg sm500:text-xl md:text-3xl font-semibold text-center px-3">
               {title}
            </h3>
            <div
               className={`mt-4 md:mt-8 grid grid-cols-1 ${gridCols ? "md:grid-cols-3" : "md:grid-cols-2"} gap-3 sm:gap-5`}
            >
               {list.map(
                  ({
                     title: localTitle,
                     description: localDescription,
                  }: IOneSection) => {
                     return (
                        <div
                           className={`bg-primaryLightGrey shadow-sm rounded-lg p-3 sm:p-6 text-center ${gridCols ? "" : "md:text-left"}`}
                           key={localTitle}
                        >
                           <h3 className="text-sm sm500:text-base sm:text-xl font-semibold">
                              {localTitle}
                           </h3>
                           <p className="mt-0.5 sm500:mt-2 md:mt-4 text-gray-800 text-xs sm500:text-sm sm:text-base">
                              {localDescription}
                           </p>
                        </div>
                     );
                  }
               )}
            </div>
         </section>
      );
   }
};
