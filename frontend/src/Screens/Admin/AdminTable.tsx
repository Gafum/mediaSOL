import { formatDate } from "../../Function/fotmatDate";
import { IAdminData } from "../../Services/Admin/getOverview";

interface IAdminTable {
   data: IAdminData | null;
}

export const AdminTable = ({ data }: IAdminTable): JSX.Element => {
   if (data == null) {
      return <>NO Data</>;
   }
   const sortedEntries = Object.entries(data).sort(
      (a, b) => a[1].preview.length - b[1].preview.length
   );

   return (
      <div className="space-y-10">
         {sortedEntries.map(([tableName, table]) => {
            const filteredSchema = table.schema.filter(
               (col) => col.column_name !== "id"
            );

            return (
               <div key={tableName}>
                  <h3 className="text-xl font-bold mb-3 capitalize">
                     {tableName} ({table.preview.length})
                  </h3>
                  <div className="overflow-x-auto">
                     <table className="min-w-full border border-gray-300 text-sm table-auto">
                        <thead className="bg-gray-100">
                           <tr>
                              {filteredSchema.map((col) => (
                                 <th
                                    key={col.column_name}
                                    className="border px-4 py-2 text-left align-top"
                                 >
                                    <div className="font-semibold">
                                       {col.column_name}
                                    </div>
                                 </th>
                              ))}
                           </tr>
                        </thead>
                        <tbody>
                           {table.preview.map((row, rowIndex) => (
                              <tr key={rowIndex} className="even:bg-gray-50">
                                 {filteredSchema.map((col) => {
                                    const value = row[col.column_name];
                                    const formatted =
                                       col.column_name === "createdAt" ||
                                       col.column_name === "updatedAt"
                                          ? formatDate(value)
                                          : String(value ?? "");

                                    return (
                                       <td
                                          key={col.column_name}
                                          className="border px-4 py-2 align-top whitespace-pre-wrap break-words max-w-md"
                                       >
                                          {formatted}
                                       </td>
                                    );
                                 })}
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
