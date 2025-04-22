import { CatalogContent } from "../../DevData/CatalogContent";
import { ItemsList } from "../../Components/ItemsList/ItemsList";
import { IGadget } from "../../MainTypes/Gadget";
import { ItemsTypesArray } from "../../DevData/ItemsTypesArray";

export const Catalog = (): JSX.Element => {
   const catalogList: IGadget[][] = ItemsTypesArray.map((typeName) =>
      CatalogContent.filter(({ type }) => type === typeName)
   );

   return (
      <div className="w-full flex flex-col gap-6 pb-6">
         <ItemsList
            name="Angebot der Woche"
            list={CatalogContent.filter((e) => Boolean(e.action))}
            className="mt-0"
         />

         {catalogList.map((GadgetList) => {
            if (Boolean(GadgetList.length)) {
               return (
                  <ItemsList
                     key={GadgetList[0].id}
                     name={GadgetList[0].type}
                     list={GadgetList}
                     className="mt-6"
                  />
               );
            }
         })}
      </div>
   );
};
