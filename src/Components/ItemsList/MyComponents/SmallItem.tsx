import { Heart, ImageOff } from "lucide-react";
import { Link } from "react-router-dom";
import { IGadget } from "../../../MainTypes/Gadget";
import { PriceShower } from "../../PriceShower/PriceShower";
import { CustomImg } from "../../../UI/CustomImg/CustomImg";
import { twMerge } from "tailwind-merge";

interface SmallItemProps extends IGadget {
   toggleToFavorites: () => void;
   isOnFavorites: boolean;
   className?: string;
}

export const SmallItem = ({
   id,
   name,
   type: mytype,
   price,
   action,
   img,
   isOnFavorites,
   toggleToFavorites,
   className,
}: SmallItemProps): JSX.Element => {
   return (
      <Link
         to={import.meta.env.BASE_URL + "/item/" + id}
         className={twMerge(
            "w-[160px] sm500:w-[250px] md:w-[300px] bg-[#f8f9fe] text-left p-2 sm:p-4 md:p-5 flex flex-col justify-between relative gap-1 shadow-sm hover:shadow-lg transition-shadow duration-300 origin-top rounded-md",
            className
         )}
      >
         {action && (
            <span className="text-xs sm500:text-sm md:text-base w-1/5 sm500:w-1/4 max-w-[75px] min-w-[50px] sm500:min-w-[65px] top-2 left-2 rounded-md bg-primaryPink absolute text-white text-center">
               - {action}%
            </span>
         )}

         {
            <button
               className="text-base w-1/8 top-2 right-2 absolute text-white text-center cursor-pointer "
               onClick={(event) => {
                  event.stopPropagation();
                  event.preventDefault();
                  toggleToFavorites();
               }}
            >
               <Heart
                  fill={isOnFavorites ? "#E32F70" : "#f8f9fe"}
                  color={isOnFavorites ? "#E32F70" : "#666"}
                  className="size-4 sm500:size-5 md:size-6 hover:drop-shadow-md transition-all duration-300"
               />
            </button>
         }

         <CustomImg
            imgSrc={img}
            className="bg-contain rounded-md h-[110px] sm500:h-[175px] md:h-[200px] w-full mt-3 sm500:mt-4 sm:mt-0"
            NotFoundComponent={
               <ImageOff
                  strokeWidth={1.4}
                  color="#222"
                  className="h-auto w-16 sm500:w-18 sm:w-20 md:w-24 "
               />
            }
         />

         <div>
            <h4 className="text-sm sm500:text-base font-medium sm500:font-semibold sm:font-bold overflow-clip text-ellipsis whitespace-nowrap">
               {name}
            </h4>
            <h6 className="text-xs sm500:text-sm">{mytype}</h6>
            <h4 className="font-semibold text-sm sm500:text-base mt-1">
               <PriceShower price={price} action={action} />
            </h4>
         </div>
      </Link>
   );
};
