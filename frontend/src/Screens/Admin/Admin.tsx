import { useState } from "react";
import { AdminAuth } from "./AdminAuth";
import { AdminMenu } from "./AdminMenu";

export interface IAdminForm {
   name: string;
   password: string;
   isDataSend: boolean;
   errors?: { name: string; password: string };
}

export const Admin = (): JSX.Element => {
   const [userData, setUserData] = useState<IAdminForm>({
      name: "",
      password: "",
      isDataSend: false,
   });

   if (userData.isDataSend) {
      return (
         <div>
            <AdminMenu userData={userData} setUserData={setUserData} />
         </div>
      );
   }

   return <AdminAuth userData={userData} setUserData={setUserData} />;
};
