import { twMerge } from "tailwind-merge";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { IGadget } from "../../../MainTypes/Gadget";
import { ItemDescription } from "./ItemDescription";

export const ItemDetails = ({ img, ...elementData }: IGadget): JSX.Element => {
   return (
      <section
         className={twMerge(
            "gap-2 items-start justify-items-center flex has-[.CustomImg]:grid has-[.CustomImg]:grid-cols-2"
         )}
      >
         {/* Image ======== */}
         <CustomImg
            imgSrc={img}
            className="w-[calc(100%-20px)] aspect-square rounded-md min-h-[200px] max-w-[600px] bg-top"
         />

         {/* Description and Buttons =======*/}
         <div className="p-4 rounded-md bg-primaryLightGrey flex flex-col shadow-sm">
            <ItemDescription {...elementData} />
         </div>
      </section>
   );
};
