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
         className={`px-4 py-2 rounded-full border ${
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
