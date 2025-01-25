import { Star } from "lucide-react";
import { IReviews } from "../../MainTypes/Reviews";
import { HtmlHTMLAttributes } from "react";

const starsName: string[] = [
   "Nicht gut",
   "Könnte besser sein",
   "Okay",
   "Gut",
   "Ausgezeichnet",
];

type IReviewProps = IReviews & HtmlHTMLAttributes<HTMLDivElement>;

export const Review = ({
   stars,
   userName,
   comment,
   className,
}: IReviewProps) => {
   return (
      <div
         className={"bg-primaryLightGrey shadow-sm rounded-md p-4 " + className}
      >
         <div className="flex justify-between">
            <div className="Stars flex flex-col items-start">
               <h4 className="capitalize font-semibold">{starsName[stars]}</h4>
               <div className="flex">
                  {starsName.map((e, index) => {
                     return (
                        <Star
                           key={e}
                           size={16}
                           fill={index < stars + 1 ? "#FFD700" : "#ddd"}
                           strokeWidth={1}
                           color="#333"
                           strokeLinecap="round"
                           strokeLinejoin="round"
                        />
                     );
                  })}
               </div>
            </div>
            <div className="text-[#666] capitalize text-sm">{userName}</div>
         </div>
         <p className="text-[#999] overflow-hidden text-ellipsis max-w-full line-clamp-5 mt-2 text-sm text-justify">
            {comment}
         </p>
      </div>
   );
};
