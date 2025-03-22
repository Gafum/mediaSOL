import { useCopyToClipboard } from "../../../Hooks/useCopyToClipboard";
import { IcontactDataProps } from "../ContactData";

export const ParagraphWithTitle = ({
   icon,
   text,
}: Omit<IcontactDataProps, "title">): JSX.Element => {
   const { ToastContainer, copyToClipboard } = useCopyToClipboard();

   return (
      <>
         <div
            className="flex flex-col items-center text-center w-full text-pretty sm500:max-w-[220px] sm:max-w-none sm:flex-row md:flex-col md:max-w-[150px] hover:opacity-75 transition-opacity duration-300 gap-2 sm:gap-4 bg-primaryLightGrey rounded-md p-4 shadow-sm sm500:shadow-none sm500:p-0 sm500:bg-transparent"
            onClick={() => copyToClipboard(text)}
         >
            <div className="min-w-10 w-10 max-w-10 h-10 sm:min-w-12 sm:w-12 sm:max-w-12 sm:h-12 flex items-center justify-center rounded-full bg-primaryBlue">
               {icon}
            </div>
            <span className=" text-black text-xs sm:text-sm text-center sm:text-left md:text-center">
               {text}
            </span>
         </div>
         <ToastContainer />
      </>
   );
};
