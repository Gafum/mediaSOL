import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { reviewsList } from "../../../DevData/ReviewsList";
import { Review } from "../../../Components/Review/Review";

export const ReviewsSection = (): JSX.Element => {
   return (
      <div className="max-w-full w-full overflow-hidden pb-8">
         <Swiper
            slidesPerView={3}
            spaceBetween={5}
            pagination={{
               clickable: true,
            }}
            modules={[Pagination]}
            className="overflow-visible"
         >
            {reviewsList.map((reviewsData) => {
               return (
                  <SwiperSlide className="pr-4 w-1/3" key={reviewsData.id}>
                     <Review {...reviewsData} className="h-[210px]" />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};
