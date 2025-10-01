import { splitWordsSmart } from "../../Function/splitWords";
import { ISchemaState } from "./AdminTable";

interface IAdminPageSettings {
   schemaState: ISchemaState[];
   setSchemaState: React.Dispatch<React.SetStateAction<ISchemaState[]>>;
}

export const AdminPageSettings = ({
   schemaState,
   setSchemaState,
}: IAdminPageSettings): JSX.Element => {
   const handleToggle = (index: number) => {
      setSchemaState((prev) => {
         let howManyIsShown: number = prev.reduce(
            (a: number, b: ISchemaState) => (b.isShown ? a + 1 : a),
            0
         );
         if (howManyIsShown < 2 && prev[index].isShown) {
            return prev;
         }
         let locallist: ISchemaState[] = JSON.parse(JSON.stringify(prev));

         locallist[index].isShown = !prev[index].isShown;
         return locallist;
      });
   };

   if (schemaState.length < 2) {
      return <></>;
   }

   return (
      <div>
         <h2>What Data:</h2>

         <ul>
            {schemaState.map((col, index) => (
               <ol key={col.column_name} className="checkbox-wrapper">
                  <label className="checkbox">
                     <input
                        type="checkbox"
                        id={col.column_name + "_ID"}
                        checked={col.isShown}
                        onChange={() => handleToggle(index)}
                        className="hidden peer checkbox__input"
                        key={col.column_name}
                     />
                     <span className="checkbox__label"></span>

                     <span className="capitalize">
                        {splitWordsSmart(col.column_name)}
                     </span>
                  </label>
               </ol>
            ))}
         </ul>
      </div>
   );
};
