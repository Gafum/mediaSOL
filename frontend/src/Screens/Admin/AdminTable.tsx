import { formatDate } from "../../Function/fotmatDate";
import { ITableData } from "../../Services/Admin/getOverview";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { splitWordsSmart } from "../../Function/splitWords";

interface IAdminTableProps {
   tableName: string;
   table: ITableData;
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

   const filteredSchema = table.schema.filter(
      (col) => col.column_name !== "id"
   );

   // const handleToggle = (col: string) => {
   //    setSortedEntries((prev) => {
   //       let locallist = JSON.parse(JSON.stringify(prev));
   //       locallist[index][1].shown = !locallist[index][1].shown;
   //       return locallist;
   //    });
   // };

   return (
      <div key={tableName} className="mt-3">
         <h2>What Data:</h2>

         <ul>
            {filteredSchema.map((col) => (
               <ol key={col.column_name} className="flex items-center gap-2">
                  <input
                     type="checkbox"
                     id={col.column_name + "_ID"}
                     // checked={visibleCols[col.column_name]}
                     // onChange={() => handleToggle(col.column_name)}
                     className="hidden peer"
                  />
                  <label
                     htmlFor={col.column_name + "_ID"}
                     className="flex items-center gap-2 cursor-pointer select-none"
                  >
                     <span
                        className="w-4 h-4 border rounded flex items-center justify-center 
                         peer-checked:bg-blue-500 peer-checked:border-blue-500"
                     >
                        <svg
                           className="w-3 h-3 text-white hidden peer-checked:block"
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 20 20"
                           fill="currentColor"
                        >
                           <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586 4.707 9.293a1 
                     1 0 00-1.414 1.414l4 4a1 1 0 
                     001.414 0l8-8a1 1 0 000-1.414z"
                              clipRule="evenodd"
                           />
                        </svg>
                     </span>
                     <span className="capitalize">
                        {splitWordsSmart(col.column_name)}
                     </span>
                  </label>
               </ol>
            ))}
         </ul>

         <h3 className="text-xl font-bold mb-3 capitalize mt-3">
            {splitWordsSmart(tableName)}
         </h3>
         <div className="overflow-x-auto">
            <table className="min-w-full text-sm border border-gray-300 table-auto">
               <thead className="bg-gray-100">
                  <tr>
                     {filteredSchema.map((col) => (
                        <th
                           key={col.column_name}
                           className="px-4 py-2 border text-left capitalize"
                        >
                           {splitWordsSmart(col.column_name)}
                        </th>
                     ))}
                     <th className="px-4 py-2 border">Actions</th>
                  </tr>
               </thead>
               <tbody>
                  {table.preview.map((row, rowIndex) => (
                     <tr key={rowIndex} className="even:bg-gray-50">
                        {filteredSchema.map((col) => {
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
                     </tr>
                  ))}
               </tbody>
            </table>
         </div>
      </div>
   );
};
