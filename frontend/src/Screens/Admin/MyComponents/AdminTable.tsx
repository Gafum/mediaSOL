import { useEffect, useState } from "react";
import { Download } from "lucide-react";
import { useAdminGetData } from "../../../Hooks/Query/Admin/useGetData";
import { ISchemaColumn } from "../../../Services/Admin/getData";
import { IAdminForm } from "../Admin";
import { LoadingBlock } from "../../../Components/LoadingBlock/LoadingBlock";
import { SimpleError } from "../../../Components/Errors/SimpleError";
import { AdminPageSettings } from "./AdminPageSettings";
import { AdminTableRendering } from "./AdminTableRendering";
import { useDeleteElement } from "../../../Hooks/Query/Admin/useDeleteElement";
import { ToastBlock } from "../../../UI/CustomToast/CustomToast";

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
   const {
      adminDataSchema,
      adminDataPreview,
      adminDataMeta,
      error,
      isLoading,
      fetchNextPage,
      hasNextPage,
   } = useAdminGetData({
      key: activeTableKey,
      password: userData.password,
   });

   const { deleteElement, isPending } = useDeleteElement({
      key: activeTableKey,
      password: userData.password,
   });

   const [adminSchemaState, setAdminSchemaState] = useState<ISchemaState[]>([]);

   useEffect(() => {
      //Checking if Tab change
      if (!adminDataSchema || !adminDataSchema.length) return;
      if (JSON.stringify(adminSchemaState) != JSON.stringify(adminDataSchema)) {
         setAdminSchemaState(
            adminDataSchema
               .filter((col) => col.column_name !== "id")
               .map((elem) => ({ ...elem, isShown: true }))
         );
      }
   }, [adminDataSchema]);

   if (isLoading) return <LoadingBlock />;
   if (error) return <SimpleError />;

   

   return (
      <div className="mt-3">
         <AdminPageSettings
            schemaState={adminSchemaState}
            setSchemaState={setAdminSchemaState}
         />

         <div className="overflow-x-auto mt-6 pb-2">
            <AdminTableRendering
               meta={adminDataMeta}
               preview={adminDataPreview}
               schema={adminSchemaState}
               deleteElement={deleteElement}
            />
            {hasNextPage && (
               <button
                  onClick={() => fetchNextPage()}
                  className="w-full text-xl mt-2 flex gap-2 justify-center items-center"
               >
                  Neue Daten abrufen
                  <Download size={20} />
               </button>
            )}

            {(isPending || isLoading) && <ToastBlock message={"Pending..."} />}
         </div>
      </div>
   );
};
