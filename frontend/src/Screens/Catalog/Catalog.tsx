import { SectionWithHeadline } from "../../Components/Sections/SectionWithHeadline";
import { useState } from "react";
import { TypesFilter } from "./MyComponents/TypesFilter";
import { SearchInput } from "./MyComponents/SearchInput";
import { ListRendering } from "./MyComponents/ListRendering";

export const Catalog = (): JSX.Element => {
   const [selectedType, setSelectedType] = useState<string>("");
   const [searchText, setSearchText] = useState<string>("");

   return (
      <SectionWithHeadline
         title={
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:mt-1">
               <h2 className="font-semibold text-base sm500:text-lg sm:text-xl">
                  Katalog
               </h2>
               <SearchInput setSearchText={setSearchText} />
            </div>
         }
         className="m-0"
      >
         <TypesFilter
            setSelectedType={setSelectedType}
            selectedType={selectedType}
         />

         <ListRendering searchText={searchText} selectedType={selectedType} />
      </SectionWithHeadline>
   );
};
