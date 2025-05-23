import { Fragment } from "react/jsx-runtime";
import { OneSection } from "./MyComponents/OneSection";

export interface IOneSection {
   title: string;
   description?: string;
   list?: { title: string; description: string }[];
   bg?: "primaryBlue" | "primaryPink" | string;
   button?: boolean;
}

interface ServicesScreenProps {
   ServicesList: IOneSection[];
}

export const ServicesScreenGenerator = ({
   ServicesList,
}: ServicesScreenProps): JSX.Element => {
   return (
      <>
         {ServicesList.map((elem, index) => {
            let showLine =
               !elem.bg &&
               !ServicesList[index - 1]?.bg &&
               ServicesList[index - 1];
            // Check that this and the previous element have no background

            return (
               <Fragment key={elem.title + "_block"}>
                  {showLine && (
                     // Show blue line
                     <div
                        className={`w-1/4 h-[3px] bg-primaryBlue m-auto rounded-sm`}
                     />
                  )}
                  <OneSection
                     title={elem.title}
                     description={elem.description}
                     bg={elem.bg}
                     button={elem.button}
                     list={elem.list}
                     key={elem.title}
                  />
               </Fragment>
            );
         })}
      </>
   );
};
