import { IGadget } from "../../MainTypes/Gadget";
import { Swiper, SwiperSlide } from "swiper/react";
import { SmallItem } from "./MyComponents/SmallItem";
import { useFavoritesStore } from "../../Store/FavoritesStore";
import { SectionWithHeadline } from "../Section/SectionWithHeadline";

interface ItemsListProps {
   name: string;
   list: IGadget[];
}

export const ItemsList = ({ name, list }: ItemsListProps): JSX.Element => {
   const favoriteList = useFavoritesStore((state) => state.favoritesList);
   const toggleFavoritesElement = useFavoritesStore(
      (state) => state.toggleFavoritesElement
   );

   if (list.length == 0) {
      return <></>;
   }

   return (
      <SectionWithHeadline title={name}>
         <div className="mt-3 relative w-full">
            {/* Invisible component =========> */}
            <SmallItem
               className="opacity-0 invisible"
               name=""
               description=""
               price={0}
               id="tester"
               type="PC"
               isOnFavorites={false}
               toggleToFavorites={() => {}}
            />
            {/* <========= */}

            {/* List =======> */}
            <Swiper
               slidesPerView={"auto"}
               spaceBetween={30}
               pagination={{
                  clickable: true,
               }}
               className="overflow-hidden absolute top-0 left-[-10px] w-full px-[10px] pb-7"
               style={{ width: "calc(100% + 20px)" }}
            >
               {list.map((elem) => {
                  return (
                     <SwiperSlide key={elem.id} className="w-fit">
                        <SmallItem
                           {...elem}
                           isOnFavorites={favoriteList.includes(elem.id)}
                           toggleToFavorites={() => {
                              toggleFavoritesElement(elem.id);
                           }}
                        />
                     </SwiperSlide>
                  );
               })}
            </Swiper>
            {/* <========= */}
         </div>
      </SectionWithHeadline>
   );
};
