import { useParams } from "react-router-dom"
import { IGadget } from "../../MainTypes/Gadget"
import { CatalogContent } from "../../DevData/CatalogContent"
import CustomBtn from "../../UI/CustomBtn/CustomBtn"
import { OneGoodsList } from "../Catalog/MyComponents/OneGoodsList"
import ReviewsSection from "../Home/MyComponents/ReviewsSection"
import { calculatePriceWithAction } from "../../Function/calculatePriceWithAction"

export const Item = (): JSX.Element => {
   const { itemId } = useParams()
   const elementData: IGadget | undefined = CatalogContent.find((elem) => {
      return elem.id == itemId
   })

   if (!elementData) {
      return <div>error</div>
   }

   return (
      <div>
         <div className="grid grid-cols-2 gap-2">
            <div
               className="rounded-md bg-center bg-contain min-h-[300px] bg-no-repeat"
               style={{ backgroundImage: `url(${elementData.img})` }}
            />

            <div className="p-4 rounded-md bg-primaryLightGrey flex flex-col shadow-sm">
               <h2 className="font-semibold text-xl">{elementData.name}</h2>
               <div className="mt-1">
                  {elementData.action && (
                     <div className="mb-2">
                        <span className="text-base rounded-md bg-primaryPink px-1 text-white text-center">
                           - {elementData.action}%
                        </span>
                        <span className="ml-3 line-through">
                           ${elementData.price}
                        </span>
                     </div>
                  )}
                  <span className="price text-3xl font-semibold">
                     $
                     {calculatePriceWithAction({
                        price: elementData.price,
                        action: elementData.action,
                     })}
                  </span>
               </div>
               <p className="mt-3 text-[#777]">{elementData.description}</p>
               <div className="flex-1 min-h-5" />

               <CustomBtn
                  btnText="Kaufen"
                  onClick={() => "sad-"}
                  className="w-full font-semibold"
               />
            </div>
         </div>

         <div className="my-5">
            <ReviewsSection />
         </div>

         <OneGoodsList
            name="Änliche Gadgets"
            list={CatalogContent.filter((elem) => {
               return (
                  elem.type == elementData.type && elem.id !== elementData.id
               )
            })}
         />
      </div>
   )
}
