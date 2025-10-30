import { useState } from "react";
import { IAdminData } from "../../Services/Admin/getOverview";
import { AdminAuth } from "./AdminAuth";
import { AdminMenu } from "./AdminMenu";

export const Admin = (): JSX.Element => {
   const [isAuth, setIsAuth] = useState(false);

   const [overviewData, setOverviewData] = useState<IAdminData | null>(null);

   if (isAuth) {
      return (
         <div>
            <AdminMenu data={overviewData} />
         </div>
      );
   }

   return <AdminAuth setOverviewData={setOverviewData} setIsAuth={setIsAuth} />;
};
