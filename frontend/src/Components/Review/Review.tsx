import { Star } from "lucide-react";
import { IReviews } from "../../MainTypes/Reviews";
import { HtmlHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

const starsName: string[] = ["Nicht gut", "Mäßig", "Okay", "Gut", "Top"];

type IReviewProps = IReviews & HtmlHTMLAttributes<HTMLDivElement>;

export const Review = ({ stars, userName, text, className }: IReviewProps) => {
   let reviewName = starsName[4];
   if (stars >= 0 && stars < 4) {
      reviewName = starsName[stars];
   }

   return (
      <div
         className={
            "bg-primaryLightGrey shadow-sm rounded-md p-2 sm:p-4 " + className
         }
      >
         <div className="flex justify-between">
            <div className="Stars flex flex-col items-start">
               <h4 className="capitalize font-semibold text-sm sm:text-base">
                  {reviewName}
               </h4>
               <div className="flex">
                  {starsName.map((e, index) => {
                     return (
                        <Star
                           key={e}
                           strokeWidth={1}
                           color="#333"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                           className={twMerge(
                              "size-3 sm:size-4",
                              index < stars + 1
                                 ? "fill-[#FFD700]"
                                 : stars < 0
                                   ? "fill-[#FFD700]"
                                   : "fill-primaryLightGrey"
                           )}
                        />
                     );
                  })}
               </div>
            </div>
            <div className="text-[#666] capitalize text-xs sm:text-sm">
               {userName.slice(0, 30)}
            </div>
         </div>
         <p className="text-[#999] overflow-hidden text-ellipsis max-w-full line-clamp-3 sm:line-clamp-5 mt-1 sm:mt-2 text-[13.6px] sm:text-sm text-justify break-words">
            {text.slice(0, 250)}
         </p>
      </div>
   );
};
