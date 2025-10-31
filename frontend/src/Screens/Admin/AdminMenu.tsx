import { useState } from "react";
import { IAdminData } from "../../Services/Admin/getOverview";
import { splitWordsSmart } from "../../Function/splitWords";
import { AdminTable } from "./AdminTable";

interface IAdminMenuProps {
   data: IAdminData | null;
}

export const AdminMenu = ({ data }: IAdminMenuProps): JSX.Element => {
   const [activeTab, setActiveTab] = useState(0);

   if (!data) {
      return <div className="text-center text-gray-500 mt-10">No data</div>;
   }

   const sortedEntries = Object.entries(data).sort(
      (a, b) => a[1].preview.length - b[1].preview.length
   );

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
            if (index !== activeTab) return "";

            return (
               <AdminTable
                  tableName={tableName}
                  table={table}
                  key={tableName}
               />
            );
         })}
      </div>
   );
};
