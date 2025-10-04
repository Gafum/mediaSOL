import { formatDate } from "../../Function/fotmatDate";
import { ISchemaColumn, ITableData } from "../../Services/Admin/getOverview";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { splitWordsSmart } from "../../Function/splitWords";
import { useState } from "react";
import { AdminPageSettings } from "./AdminPageSettings";

interface IAdminTableProps {
   tableName: string;
   table: ITableData;
}

export interface ISchemaState extends ISchemaColumn {
   isShown: boolean;
}

export const AdminTable = ({
   tableName,
   table,
}: IAdminTableProps): JSX.Element => {
   const handleDelete = (table: string, id: string) => {
      console.log(`Delete ${id} from ${table}`);
   };

   const handleEdit = (table: string, row: any) => {
      console.log(`Edit ${table}:`, row);
   };

   const addNewElement = () => {
      console.log(`adding`);
   };

   const [schemaState, setSchemaState] = useState<ISchemaState[]>(
      table.schema
         .filter((col) => col.column_name !== "id")
         .map((elem) => {
            return { ...elem, isShown: true };
         })
   );

   return (
      <div key={tableName} className="mt-3">
         <AdminPageSettings
            schemaState={schemaState}
            setSchemaState={setSchemaState}
         />

         <div className="overflow-x-auto mt-6 pb-2">
            <table className="min-w-full text-sm border border-gray-300 table-auto rounded-md border-collapse">
               <thead className="bg-gray-100">
                  <tr>
                     <th className="px-4 py-2 border">Actions</th>
                     {schemaState.map((col) => {
                        if (!col.isShown) {
                           return "";
                        }
                        return (
                           <th
                              key={col.column_name}
                              className="px-4 py-2 border text-left capitalize"
                           >
                              {splitWordsSmart(col.column_name)}
                           </th>
                        );
                     })}
                  </tr>
               </thead>

               <tbody>
                  {table.preview.map((row, rowIndex) => (
                     <tr key={rowIndex} className="even:bg-gray-50">
                        <td className="p-2 h-full border align-top">
                           <div className="h-full w-full flex flex-col gap-1">
                              <CustomBtn
                                 btnText={"Edit"}
                                 bgColor="primaryBlue"
                                 onClick={() => handleEdit(tableName, row)}
                              />
                              <CustomBtn
                                 btnText={"Delete"}
                                 bgColor="primaryPink"
                                 onClick={() => handleDelete(tableName, row.id)}
                              />
                           </div>
                        </td>
                        {schemaState.map((col) => {
                           if (!col.isShown) {
                              return "";
                           }
                           const val = row[col.column_name];
                           const content =
                              col.column_name === "createdAt" ||
                              col.column_name === "updatedAt"
                                 ? formatDate(val)
                                 : String(val ?? "");

                           return (
                              <td
                                 key={col.column_name}
                                 className="px-2 py-1 border align-top whitespace-pre-wrap break-words max-w-md"
                              >
                                 {content}
                              </td>
                           );
                        })}
                     </tr>
                  ))}
                  <tr className="p-2 h-full border align-top w-full">
                     <td
                        colSpan={schemaState.reduce(
                           (a: number, b: ISchemaState) =>
                              b.isShown ? a + 1 : a,
                           1
                        )}
                        className="px-2 py-1 border align-top whitespace-pre-wrap break-words max-w-md w-full even:bg-gray-50"
                     >
                        <button
                           className="w-full bg-transparent hover:opacity-70 text-lg"
                           onClick={addNewElement}
                        >
                           Add new +
                        </button>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      </div>
   );
};
