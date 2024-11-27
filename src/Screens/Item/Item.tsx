import { useParams } from "react-router-dom"
import { IGadget } from "../../MainTypes/Gadget"
import { CatalogContent } from "../../DevData/CatalogContent"

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
         <div
            className="rounded-md h-[200px] w-full bg-center bg-contain bg-no-repeat"
            style={{ backgroundImage: `url(${elementData.img})` }}
         />
         <h2 className="font-semibold text-xl">{elementData.name}</h2>
         <p>{elementData.description}</p>
      </div>
   )
}
