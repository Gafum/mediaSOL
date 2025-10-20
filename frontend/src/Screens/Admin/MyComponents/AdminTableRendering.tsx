import { UseMutateFunction } from "@tanstack/react-query";
import { formatDate } from "../../../Function/fotmatDate";
import { splitWordsSmart } from "../../../Function/splitWords";
import { IAdminDataResponse } from "../../../Services/Admin/getData";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import {
   StandartDialog,
   useStandartDialog,
} from "../../../UI/CustomDialog/Standart/StandartDialog";
import { IDeleteDataProps } from "../../../Services/Admin/deleteData";
import { useState } from "react";
import { AdminCreateForm } from "./AdminCreateForm/AdminCreateForm";

interface IAdminTableRenderingProps extends IAdminDataResponse {
   deleteElement: UseMutateFunction<any, Error, IDeleteDataProps, unknown>;
}

export const AdminTableRendering = ({
   preview: adminDataPreview,
   schema: adminSchemaState,
   meta: adminDataMeta,
   deleteElement,
}: IAdminTableRenderingProps): JSX.Element => {
   const { modalData, setModalData } = useStandartDialog();

   const [isEditFormVisible, setIsEditFormVisible] = useState<boolean>(false);

   function checkAllowance(callback: () => void) {
      if (!adminDataMeta?.editable) {
         setModalData({
            isOpen: true,
            onOkeyClick: () => callback(),
            content: "Daten nicht zur Änderung!",
         });
      } else {
         callback();
      }
   }

   const handleDelete = (table: string, id: string) => {
      checkAllowance(() => {
         setModalData({
            isOpen: true,
            onOkeyClick: () =>
               deleteElement({
                  route: adminDataMeta?.router,
                  elementId: id,
               }),
            content: `Delete ${id} from ${table}`,
            headlineText: "Soll ich das löschen?!",
         });
      });
   };

   const handleEdit = (table: string, row: any) => {
      checkAllowance(() => {
         console.log(`Edit ${table}:`, row);
      });
   };

   const addNewElement = () => {
      checkAllowance(() => {
         setIsEditFormVisible(true);
      });
   };

   return (
      <>
         {isEditFormVisible && (
            <AdminCreateForm
               adminDataSchema={adminSchemaState}
               submitCallback={() => console.log("submit")}
               setIsEditFormVisible={setIsEditFormVisible}
            />
         )}
         <table className="min-w-full text-sm border border-gray-300 table-auto rounded-md border-collapse">
            <thead className="bg-gray-100">
               <tr className="border">
                  <th className="px-4 py-2 border">Actions</th>
                  {adminSchemaState.map((col) => {
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
               {adminDataMeta?.additive && (
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
               )}
               {adminDataPreview.map((row, rowIndex) => (
                  <tr key={rowIndex} className="even:bg-gray-100 border">
                     <td className="p-2 h-full border align-top">
                        <div className="h-full w-full flex flex-col gap-1">
                           {adminDataMeta?.additive && (
                              <CustomBtn
                                 btnText={"Edit"}
                                 bgColor="primaryBlue"
                                 onClick={() =>
                                    handleEdit(adminDataMeta?.name ?? "", row)
                                 }
                              />
                           )}
                           <CustomBtn
                              btnText={"Delete"}
                              bgColor="primaryPink"
                              onClick={() =>
                                 handleDelete(adminDataMeta?.name ?? "", row.id)
                              }
                           />
                        </div>
                     </td>
                     {adminSchemaState.map((col) => {
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
         <StandartDialog modalData={modalData} setModalData={setModalData} />
      </>
   );
};
