import { useParams } from "react-router-dom"
import { IGadget } from "../../MainTypes/Gadget"
import { CatalogContent } from "../../DevData/CatalogContent"
import CustomBtn from "../../UI/CustomBtn/CustomBtn"
import { OneGoodsList } from "../Catalog/MyComponents/OneGoodsList"
import ReviewsSection from "../Home/MyComponents/ReviewsSection"
import { PriceShower } from "../../Components/PriceShower/PriceShower"

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
               <p className="mt-2 text-[#777]">{elementData.description}</p>
               <div className="flex-1 min-h-5" />
               <CustomBtn
                  btnText={
                     <PriceShower
                        price={elementData.price}
                        action={elementData.action}
                     />
                  }
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
