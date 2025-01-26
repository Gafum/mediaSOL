import { IGadget } from "../../MainTypes/Gadget";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmallItem } from "./MyComponents/SmallItem";
import { toggleListElement } from "../../Function/toggleListElemnt";
// import 'swiper/css/scrollbar';

interface ItemsListProps {
   name: string;
   list: IGadget[];
}

export const ItemsList = ({ name, list }: ItemsListProps): JSX.Element => {
   const [likedList, setLikedList] = useState<string[]>([]);

   if (list.length == 0) {
      return <></>;
   }

   return (
      <div className="w-full pb-3 overflow-hidden">
         <h2 className="font-semibold text-[21px]">{name}</h2>
         <Swiper
            updateOnWindowResize={true}
            slidesPerView={"auto"}
            spaceBetween={30}
            pagination={{
               clickable: true,
            }}
            className="mt-3 pl-2 pb-7 overflow-visible"
            // scrollbar={{ draggable: true, hide: true }}
            // modules={[Scrollbar]}
         >
            {list.map((elem) => {
               return (
                  <SwiperSlide key={elem.id} className="w-fit">
                     <SmallItem
                        {...elem}
                        isOnFavorites={likedList.includes(elem.id)}
                        toggleToFavorites={() => {
                           setLikedList((prev) =>
                              toggleListElement(prev, elem.id.toString())
                           );
                        }}
                     />
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};
