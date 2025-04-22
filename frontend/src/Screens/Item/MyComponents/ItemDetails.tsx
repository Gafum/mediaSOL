import { twMerge } from "tailwind-merge";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { IGadget } from "../../../MainTypes/Gadget";
import { ItemDescription } from "./ItemDescription";

export const ItemDetails = ({ img, ...elementData }: IGadget): JSX.Element => {
   return (
      <section
         className={twMerge(
            "gap-2 items-start flex-col justify-items-center flex md:has-[.CustomImg]:grid has-[.CustomImg]:grid-cols-2"
         )}
      >
         {/* Image ======== */}
         <CustomImg
            imgSrc={img}
            className="m-auto md:m-0 w-10/12 md:w-[calc(100%-20px)] aspect-square rounded-md min-h-[200px] md:max-w-[600px] bg-top"
         />

         {/* Description and Buttons =======*/}
         <ItemDescription {...elementData} />
      </section>
   );
};
