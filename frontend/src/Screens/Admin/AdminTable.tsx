import { formatDate } from "../../Function/fotmatDate";
import { ISchemaColumn } from "../../Services/Admin/getData";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { splitWordsSmart } from "../../Function/splitWords";
import { IAdminForm } from "./Admin";
import { useAdminGetData } from "../../Hooks/Query/Admin/useGetData";
import { LoadingBlock } from "../../Components/LoadingBlock/LoadingBlock";
import { SimpleError } from "../../Components/Errors/SimpleError";

interface IAdminTableProps {
   userData: IAdminForm;
   activeTableKey: string;
}

export interface ISchemaState extends ISchemaColumn {
   isShown: boolean;
}

export const AdminTable = ({
   userData,
   activeTableKey,
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

   const { adminDataSchema, adminDataPreview, error, isLoading } =
      useAdminGetData({
         key: activeTableKey,
         password: userData.password,
      });

   if (isLoading) return <LoadingBlock />;
   if (error) return <SimpleError />;

   return (
      <div className="mt-3">
         {/* <AdminPageSettings
            schemaState={schemaState}
            setSchemaState={setSchemaState}
         /> */}

         <div className="overflow-x-auto mt-6 pb-2">
            <table className="min-w-full text-sm border border-gray-300 table-auto rounded-md border-collapse">
               <thead className="bg-gray-100">
                  <tr className="border">
                     <th className="px-4 py-2 border">Actions</th>
                     {adminDataSchema.map((col) => {
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

               <tr className="p-2 h-full border align-top w-full">
                  <td
                     colSpan={100000}
                     className="px-2 py-1 border align-top whitespace-pre-wrap break-words max-w-md w-full bg-red-50"
                  >
                     <button
                        className="w-full bg-transparent hover:opacity-70 text-lg"
                        onClick={addNewElement}
                     >
                        Add new +
                     </button>
                  </td>
               </tr>

               <tbody>
                  {adminDataPreview.map((row, rowIndex) => (
                     <tr key={rowIndex} className="even:bg-gray-100 border">
                        <td className="p-2 h-full border align-top">
                           <div className="h-full w-full flex flex-col gap-1">
                              <CustomBtn
                                 btnText={"Edit"}
                                 bgColor="primaryBlue"
                                 onClick={() => handleEdit("tableName", row)}
                              />
                              <CustomBtn
                                 btnText={"Delete"}
                                 bgColor="primaryPink"
                                 onClick={() =>
                                    handleDelete("tableName", row.id)
                                 }
                              />
                           </div>
                        </td>
                        {adminDataSchema.map((col) => {
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
               </tbody>
            </table>
         </div>
      </div>
   );
};
