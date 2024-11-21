import Slider from "react-slick"
import { IGadget } from "../../../MainTypes/Gadget"
import { sliderSettings } from "../../../UI/CustomData/sliderSettings"

interface OneGoodsListProps {
   name: string
   list: IGadget[]
}

export const OneGoodsList = ({
   name,
   list,
}: OneGoodsListProps): JSX.Element => {
   return (
      <div className="w-full">
         <h2 className="font-semibold text-[21px]">{name}</h2>
         <Slider
            {...{ ...sliderSettings, ...{ slidesToShow: 4 } }}
            className="mt-3"
         >
            {list.map((e) => {
               return (
                  <div>
                     <div
                        className="h-[400px] w-[20vw] max-w-[300px] bg-gray-100 rounded-md text-left p-5 flex flex-col justify-between relative min-w-[250px]"
                        key={e.id}
                     >
                        {e.action && (
                           <span className="w-1/4 bg-primaryPink absolute">
                              {e.action}%
                           </span>
                        )}
                        <img src={e.img} alt={e.img} className="rounded-md" />
                        <div>
                           <h4 className="text-lg font-bold">{e.name}</h4>
                           <h6 className="text-sm">{e.type}</h6>
                           <h4 className="font-semibold">
                              $ {e.price.toFixed(2)}
                           </h4>
                        </div>
                     </div>
                  </div>
               )
            })}
         </Slider>
      </div>
   )
}
