import { useCallback, useState } from "react";
import { debounce } from "../../../Function/debounce";
import { Search } from "lucide-react";

interface ISearchInputProps {
   setSearchText: (value: string) => void;
}

export const SearchInput = ({ setSearchText }: ISearchInputProps) => {
   const [text, setText] = useState("");
   const debouncedSearch = useCallback(
      debounce((value: string) => {
         setSearchText(value);
      }, 340),
      []
   );

   const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setText(e.target.value);
      debouncedSearch(e.target.value);
   };

   return (
      <div
         className="inputes w-full sm:w-2/3 sm:max-w-[600px] font-normal text-base sm500:text-base sm:text-base"
         style={
            {
               margin: 0,
               "--vertical": "4px",
               "--horizontal": "8px",
            } as any
         }
      >
         <input
            required={true}
            type="text"
            maxLength={40}
            onChange={handleSearchChange}
            value={text}
         />
         <label className="flex font-medium text-base items-center gap-1 ">
            Search <Search size={15} />
         </label>
      </div>
   );
};
