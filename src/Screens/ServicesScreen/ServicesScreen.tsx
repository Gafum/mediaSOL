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

export const ServicesScreen = ({
   ServicesList,
}: ServicesScreenProps): JSX.Element => {
   return (
      <>
         {ServicesList.map((elem, index) => {
            let showLine =
               !elem.bg &&
               !ServicesList[index - 1]?.bg &&
               ServicesList[index - 1];

            return (
               <div key={elem.title + "_block"}>
                  {showLine && (
                     // Show blue line
                     <div className="w-1/4 h-[3px] bg-primaryBlue m-auto" />
                  )}
                  <OneSection
                     title={elem.title}
                     description={elem.description}
                     bg={elem.bg}
                     button={elem.button}
                     list={elem.list}
                     key={elem.title}
                  />
               </div>
            );
         })}
      </>
   );
};
