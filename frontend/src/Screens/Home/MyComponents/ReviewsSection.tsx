import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import { Review } from "../../../Components/Review/Review";
import { useGetLatestReviews } from "../../../Hooks/Query/Reviews/getLatest";
import { LoadingBlock } from "../../../Components/LoadingBlock/LoadingBlock";

export const ReviewsSection = (): JSX.Element => {
   const { isLoading, error, latestReview } = useGetLatestReviews();
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
            {error ? (
               ""
            ) : isLoading ? (
               <LoadingBlock />
            ) : (
               latestReview.map((reviewsData) => {
                  return (
                     <SwiperSlide className="w-1/3" key={reviewsData.id}>
                        <Review
                           {...reviewsData}
                           className="h-[125px] sm:h-[210px]"
                        />
                     </SwiperSlide>
                  );
               })
            )}
         </Swiper>
      </div>
   );
};
