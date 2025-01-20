import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

const starsName: string[] = [
   "Nicht gut",
   "Könnte besser sein",
   "Okay",
   "Gut",
   "Ausgezeichnet",
];

import { Pagination } from "swiper/modules";
import { reviewsList } from "../../../DevData/ReviewsList";

export const ReviewsSection = (): JSX.Element => {
   return (
      <div className="w-full flex flex-col justify-center items-start mt-6">
         <h3 className="font-semibold text-xl">Neueste Bewertungen</h3>
         <div className="max-w-full w-full mt-4 overflow-hidden pb-8">
            <Swiper
               slidesPerView={3}
               spaceBetween={5}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               className="overflow-visible"
            >
               {reviewsList.map(({ userName, comment, stars }) => {
                  return (
                     <SwiperSlide className="pr-4 w-1/3" key={comment}>
                        <div className="bg-primaryLightGrey shadow-sm rounded-md p-4 h-[210px]">
                           <div className="flex justify-between">
                              <div className="Stars flex flex-col items-start">
                                 <h4 className="capitalize font-semibold">
                                    {starsName[stars]}
                                 </h4>
                                 <div className="flex">
                                    {starsName.map((e, index) => {
                                       return (
                                          <Star
                                             key={e}
                                             size={16}
                                             fill={
                                                index < stars + 1
                                                   ? "#FFD700"
                                                   : "#ddd"
                                             }
                                             strokeWidth={1}
                                             color="#333"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
                                       );
                                    })}
                                 </div>
                              </div>
                              <div className="text-[#999] capitalize text-sm">
                                 {userName}
                              </div>
                           </div>
                           <p className="text-[#999] overflow-hidden text-ellipsis max-w-full line-clamp-5 mt-2 text-sm">
                              {comment}
                           </p>
                        </div>
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
};
