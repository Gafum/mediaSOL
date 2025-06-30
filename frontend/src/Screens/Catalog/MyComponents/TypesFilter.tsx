import { useGetTypes } from "../../../Hooks/Query/Items/useGetTypes";

interface ITypesFilterProps {
   selectedType: string;
   setSelectedType: React.Dispatch<React.SetStateAction<string>>;
}

export const TypesFilter = ({
   selectedType,
   setSelectedType,
}: ITypesFilterProps): JSX.Element => {
   const {
      data: types,
      isLoading: isTypesLoading,
      error: typesError,
   } = useGetTypes();

   if (isTypesLoading) {
      return <p>Loading types...</p>;
   }
   if (typesError) {
      return <p className="text-red-500">Error loading types</p>;
   }
   let typesList = ["", "action"];
   if (!!types) {
      typesList = [...typesList, ...types];
   }

   return (
      <div className="overflow-x-auto mb-3">
         <div className="flex gap-2 sm:gap-3 w-max sm:w-auto pb-2">
            {typesList?.map((type: string) => (
               <button
                  key={type}
                  className={`text-sm px-3 py-0.5 sm:text-base sm:px-4 sm:py-1 md:px-4 md:py-1.5 rounded-full text-nowrap whitespace-nowrap ${
                     selectedType === type
                        ? "bg-primaryBlue text-white"
                        : type == "action"
                          ? "bg-primaryPink text-white"
                          : "bg-primaryLightGrey"
                  }`}
                  onClick={() => setSelectedType(type)}
               >
                  {!type ? "Alle" : type == "action" ? "Angebote" : type}
               </button>
            ))}
         </div>
      </div>
   );
};
