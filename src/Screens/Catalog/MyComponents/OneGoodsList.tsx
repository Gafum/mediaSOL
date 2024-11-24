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
            {...{
               ...sliderSettings,
               ...{
                  slidesToShow: 1,
                  dots: false,
                  slidesToScroll: 1,
                  variableWidth: true,
               },
            }}
            className="mt-3"
         >
            {list.map((e) => {
               return (
                  <div>
                     <div
                        className="mr-4 w-[20vw] max-w-[300px] min-w-[250px] bg-gray-100 rounded-md text-left p-5 flex flex-col justify-between relative gap-1"
                        key={e.id}
                     >
                        {e.action && (
                           <span className="text-base w-1/4 top-2 left-2 rounded-md bg-primaryPink absolute text-white text-center">
                              - {e.action}%
                           </span>
                        )}
                        <div
                           className="rounded-md h-[200px] w-full bg-center bg-contain"
                           style={{ backgroundImage: `url(${e.img})` }}
                        />
                        <div>
                           <h4 className="text-base font-bold overflow-clip text-ellipsis">
                              {e.name}
                           </h4>
                           <h6 className="text-sm">{e.type}</h6>
                           <h4 className="font-semibold">
                              {e.action ? (
                                 <>
                                    $
                                    {(
                                       e.price -
                                       (e.price / 100) * e.action
                                    ).toFixed(2)}
                                    <span className="line-through ml-2 font-semibold text-[#aaa]">
                                       {"$" + e.price.toFixed(2).toString()}
                                    </span>
                                 </>
                              ) : (
                                 "$" + e.price.toFixed(2).toString()
                              )}
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
