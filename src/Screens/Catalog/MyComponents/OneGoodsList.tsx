import { IGadget } from "../../../MainTypes/Gadget";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toggleListElement } from "../../../Function/toggleListElemnt";
import { Link } from "react-router-dom";
import { PriceShower } from "../../../Components/PriceShower/PriceShower";
import { Swiper, SwiperSlide } from "swiper/react";

interface OneGoodsListProps {
   name: string;
   list: IGadget[];
}

export const OneGoodsList = ({
   name,
   list,
}: OneGoodsListProps): JSX.Element => {
   const [likedList, setLikedList] = useState<string[]>([]);

   return (
      <div className="w-full">
         <h2 className="font-semibold text-[21px]">{name}</h2>
         <Swiper
            slidesPerView={"auto"}
            spaceBetween={5}
            pagination={{
               clickable: true,
            }}
            className="mt-3"
         >
            {list.map((elem) => {
               return (
                  <SwiperSlide key={elem.id} className="w-fit">
                     <div className="mr-4 w-[20vw] max-w-[300px] min-w-[250px] bg-[#f8f9fe] rounded-md text-left p-5 flex flex-col justify-between relative gap-1 shadow-sm hover:shadow-lg transition-shadow duration-300">
                        <Link to={"/item/" + elem.id}>
                           {elem.action && (
                              <span className="text-base w-1/4 top-2 left-2 rounded-md bg-primaryPink absolute text-white text-center">
                                 - {elem.action}%
                              </span>
                           )}
                           {
                              <span
                                 className="text-base w-1/8 top-2 right-2 absolute text-white text-center cursor-pointer "
                                 onClick={(event) => {
                                    event.stopPropagation();
                                    setLikedList((prev) =>
                                       toggleListElement(
                                          prev,
                                          elem.id.toString()
                                       )
                                    );
                                 }}
                              >
                                 <Heart
                                    size={24}
                                    fill={
                                       likedList.includes(elem.id)
                                          ? "#E32F70"
                                          : "#f8f9fe"
                                    }
                                    color={
                                       likedList.includes(elem.id)
                                          ? "#E32F70"
                                          : "#666"
                                    }
                                    className="hover:drop-shadow-md transition-all duration-300"
                                 />
                              </span>
                           }
                           <div
                              className="rounded-md h-[200px] w-full bg-center bg-contain bg-no-repeat"
                              style={{ backgroundImage: `url(${elem.img})` }}
                           />
                           <div>
                              <h4 className="text-base font-bold overflow-clip text-ellipsis whitespace-nowrap">
                                 {elem.name}
                              </h4>
                              <h6 className="text-sm">{elem.type}</h6>
                              <h4 className="font-semibold">
                                 <PriceShower
                                    price={elem.price}
                                    action={elem.action}
                                 />
                              </h4>
                           </div>
                        </Link>
                     </div>
                  </SwiperSlide>
               );
            })}
         </Swiper>
      </div>
   );
};
