interface ITypesBtnProps {
   text: string;
   selectedType: string | null;
   setSelectedType: React.Dispatch<React.SetStateAction<string | null>>;
}

export const TypesBtn = ({
   text,
   selectedType,
   setSelectedType,
}: ITypesBtnProps): JSX.Element => {
   return (
      <button
         className={`text-sm px-3 py-0.5 sm:text-base sm:px-4 sm:py-1 md:px-4 md:py-1.5 rounded-full border text-nowrap whitespace-nowrap ${
            selectedType === text
               ? "bg-primaryBlue text-white"
               : "bg-primaryLightGrey"
         }`}
         onClick={() => setSelectedType(text)}
      >
         {!text ? "Alle" : text}
      </button>
   );
};
