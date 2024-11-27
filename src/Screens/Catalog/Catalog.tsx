import { CatalogContent } from "../../DevData/CatalogContent"
import { OneGoodsList } from "./MyComponents/OneGoodsList"

export const Catalog = (): JSX.Element => {
   return (
      <div className="w-full flex flex-col gap-6">
         <OneGoodsList name="Angebot der Woche" list={CatalogContent} />
         {/* <OneGoodsList
            name="PC und Laptop"
            list={["a", "b", "c", "d", "e", "g", "df"]}
         /> */}
      </div>
   )
}
