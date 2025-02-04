import { IParagraphWithTitleProps } from "../ContactData";

export const ParagraphWithTitle = ({
   icon,
   text,
}: Omit<IParagraphWithTitleProps, "title">): JSX.Element => {
   return (
      <div className="flex flex-col items-center text-center w-full max-w-[150px] hover:opacity-75 transition-opacity duration-300">
         <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primaryBlue">
            {icon}
         </div>
         <span className="mt-4 text-black text-sm">{text}</span>
      </div>
   );
};
