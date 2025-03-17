import { Star } from "lucide-react";
import { IReviews } from "../../MainTypes/Reviews";
import { HtmlHTMLAttributes } from "react";

const starsName: string[] = ["Nicht gut", "Mäßig", "Okay", "Gut", "Top"];

type IReviewProps = IReviews & HtmlHTMLAttributes<HTMLDivElement>;

export const Review = ({
   stars,
   userName,
   comment,
   className,
}: IReviewProps) => {
   return (
      <div
         className={
            "bg-primaryLightGrey shadow-sm rounded-md p-2 sm:p-4 " + className
         }
      >
         <div className="flex justify-between">
            <div className="Stars flex flex-col items-start">
               <h4 className="capitalize font-semibold text-sm sm:text-base">
                  {starsName[stars]}
               </h4>
               <div className="flex">
                  {starsName.map((e, index) => {
                     return (
                        <Star
                           key={e}
                           fill={index < stars + 1 ? "#FFD700" : "#ddd"}
                           strokeWidth={1}
                           color="#333"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className="size-3 sm:size-4"
                        />
                     );
                  })}
               </div>
            </div>
            <div className="text-[#666] capitalize text-xs sm:text-sm">
               {userName}
            </div>
         </div>
         <p className="text-[#999] overflow-hidden text-ellipsis max-w-full line-clamp-3 sm:line-clamp-5 mt-1 sm:mt-2 text-[13.6px] sm:text-sm text-justify">
            {comment}
         </p>
      </div>
   );
};
