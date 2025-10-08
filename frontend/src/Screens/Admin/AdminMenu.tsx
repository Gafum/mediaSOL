import { useEffect, useState } from "react";
import { AdminTable } from "./AdminTable";
import { IAdminForm } from "./Admin";
import { useGetSchema } from "../../Hooks/Query/Admin/useGetSchema";
import { SimpleError } from "../../Components/Errors/SimpleError";
import { LoadingBlock } from "../../Components/LoadingBlock/LoadingBlock";

interface IAdminMenuProps {
   userData: IAdminForm;
   setUserData: React.Dispatch<React.SetStateAction<IAdminForm>>;
}

export const AdminMenu = ({
   userData,
   setUserData,
}: IAdminMenuProps): JSX.Element => {
   const [activeTab, setActiveTab] = useState(0);

   if (!userData) {
      return <div className="text-center text-gray-500 mt-10">No data</div>;
   }

   const { isLoading, error, adminSchema } = useGetSchema(userData.password);

   useEffect(() => {
      if (error) {
         setUserData({
            ...userData,
            isDataSend: false,
            errors: {
               password: "false",
               name: "false",
            },
         });
      }
   }, [error]);

   if (isLoading) {
      return <LoadingBlock />;
   }

   if (!adminSchema) {
      return <SimpleError />;
   }

   return (
      <div>
         {/* Tabs */}
         <div className="flex overflow-x-auto border-b border-gray-300 pb-3">
            {adminSchema.map(({ name }, index) => (
               <button
                  key={name}
                  onClick={() => setActiveTab(index)}
                  className={`px-4 py-2 text-sm capitalize font-medium whitespace-nowrap ${
                     activeTab === index
                        ? "border-b-2 border-blue-600 text-blue-600"
                        : "text-gray-500 hover:text-black"
                  }`}
               >
                  {name}
               </button>
            ))}
         </div>
         <AdminTable
            activeTableKey={adminSchema[activeTab].key}
            userData={userData}
         />
      </div>
   );
};
