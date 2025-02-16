import { CatalogContent } from "../../DevData/CatalogContent";
import { ItemsList } from "../../Components/ItemsList/ItemsList";

export const Catalog = (): JSX.Element => {
   return (
      <div className="w-full flex flex-col gap-6">
         <ItemsList
            name="Angebot der Woche"
            list={CatalogContent}
            className="mt-0"
         />
         {/* <OneGoodsList
            name="PC und Laptop"
            list={["a", "b", "c", "d", "e", "g", "df"]}
         /> */}
      </div>
   );
};
