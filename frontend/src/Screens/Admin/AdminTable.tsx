import { useState } from "react";
import { formatDate } from "../../Function/fotmatDate";
import { IAdminData } from "../../Services/Admin/getOverview";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { splitWordsSmart } from "../../Function/splitWords";

interface IAdminTable {
   data: IAdminData | null;
}

export const AdminTable = ({ data }: IAdminTable): JSX.Element => {
   const [activeTab, setActiveTab] = useState(0);

   if (!data) {
      return <div className="text-center text-gray-500 mt-10">No data</div>;
   }

   const sortedEntries = Object.entries(data).sort(
      (a, b) => a[1].preview.length - b[1].preview.length
   );

   const handleDelete = (table: string, id: string) => {
      console.log(`Delete ${id} from ${table}`);
   };

   const handleEdit = (table: string, row: any) => {
      console.log(`Edit ${table}:`, row);
   };

   console.log(sortedEntries);

   return (
      <div>
         {/* Tabs */}
         <div className="flex overflow-x-auto border-b border-gray-300">
            {sortedEntries.map(([tableName], index) => (
               <button
                  key={tableName}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm capitalize font-medium whitespace-nowrap ${
                     activeTab === index
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-black"
                  }`}
               >
                  {splitWordsSmart(tableName)} ({data[tableName].preview.length}
                  )
               </button>
            ))}
         </div>

         {/* Active Table */}
         {sortedEntries.map(([tableName, table], index) => {
            if (index !== activeTab) return null;

            const filteredSchema = table.schema.filter(
               (col) => col.column_name !== "id"
            );
            const [visibleCols, setVisibleCols] = useState<
               Record<string, boolean>
            >(() =>
               filteredSchema.reduce(
                  (acc, col) => {
                     acc[col.column_name] = true; // всі включені спочатку
                     return acc;
                  },
                  {} as Record<string, boolean>
               )
            );

            const handleToggle = (col: string) => {
               setVisibleCols((prev) => ({
                  ...prev,
                  [col]: !prev[col],
               }));
            };

            return (
               <div key={tableName} className="mt-3">
                  <h2>What Data:</h2>

                  <ul>
                     {filteredSchema.map((col) => (
                        <ol
                           key={col.column_name}
                           className="flex items-center gap-2"
                        >
                           <input
                              type="checkbox"
                              id={col.column_name + "_ID"}
                              checked={visibleCols[col.column_name]}
                              onChange={() => handleToggle(col.column_name)}
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
                                          onClick={() =>
                                             handleEdit(tableName, row)
                                          }
                                       />
                                       <CustomBtn
                                          btnText={"Delete"}
                                          bgColor="primaryPink"
                                          onClick={() =>
                                             handleDelete(tableName, row.id)
                                          }
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
         })}
      </div>
   );
};
