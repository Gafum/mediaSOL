import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { reviewsList } from "../../../DevData/ReviewsList";
import { Review } from "../../../Components/Review/Review";

export const ReviewsSection = (): JSX.Element => {
   return (
      <div className="max-w-full w-full overflow-hidden pb-8">
         <Swiper
            breakpoints={{
               0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
               },
               600: {
                  slidesPerView: 2,
                  spaceBetween: 18,
               },
               960: {
                  slidesPerView: 3,
                  spaceBetween: 22,
               },
            }}
            spaceBetween={5}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="overflow-visible"
         >
            {reviewsList.map((reviewsData) => {
               return (
                  <SwiperSlide className="w-1/3" key={reviewsData.id}>
                     <Review
                        {...reviewsData}
                        className="h-[125px] sm:h-[210px]"
                     />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};
