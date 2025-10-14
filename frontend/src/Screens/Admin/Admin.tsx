import { useEffect, useState } from "react";
import { AdminAuth } from "./MyComponents/AdminAuth";
import { AdminMenu } from "./MyComponents/AdminMenu";

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

   useEffect(() => {
      let adminData: string | null = sessionStorage.getItem("adminData");
      if (adminData) {
         if (typeof JSON.parse(adminData) == typeof userData) {
            setUserData(JSON.parse(adminData));
         }
      }
   }, []);

   if (userData.isDataSend) {
      return <AdminMenu userData={userData} setUserData={setUserData} />;
   }

   return <AdminAuth userData={userData} setUserData={setUserData} />;
};
