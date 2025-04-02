import { useState } from "react";
import { sortOptions } from "../CartData";
import { CartService } from "../CartService";

interface ICartSettingsProps {
   selectedSort: () => string;
   setSelectedSort: React.Dispatch<React.SetStateAction<string>>;
}

export const CartSettings = ({
   selectedSort: selectedSortProp,
   setSelectedSort: setSelectedSortProp,
}: ICartSettingsProps) => {
   const [selectedSort, setSelectedSort] = useState(selectedSortProp);

   function setOptions(id: string) {
      CartService.saveSelectedSrore(id);
      setSelectedSortProp(id);
      setSelectedSort(id);
   }

   return (
      <>
         {sortOptions.map((option) => (
            <label
               key={option.id}
               className="flex items-center gap-2 cursor-pointer w-full mt-2"
            >
               <input
                  type="radio"
                  name="sort"
                  value={option.id}
                  checked={selectedSort === option.id}
                  onChange={() => {
                     setOptions(option.id);
                  }}
                  className="hidden"
               />
               <span
                  className={`px-4 py-2 w-full rounded-lg transition-all shadow-sm ${
                     selectedSort === option.id
                        ? "bg-primaryBlue text-white"
                        : "bg-primaryLightGrey"
                  }`}
               >
                  {option.label}
               </span>
            </label>
         ))}
      </>
   );
};
