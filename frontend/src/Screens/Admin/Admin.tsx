import { useState } from "react";
import { IAdminData } from "../../Services/Admin/getOverview";
import { AdminTable } from "./AdminTable";
import { AdminAuth } from "./AdminAuth";

export const Admin = (): JSX.Element => {
   const [isAuth, setIsAuth] = useState(false);

   const [overviewData, setOverviewData] = useState<IAdminData | null>(null);

   if (isAuth) {
      return (
         <div>
            <AdminTable data={overviewData} />
         </div>
      );
   }

   return <AdminAuth setOverviewData={setOverviewData} setIsAuth={setIsAuth} />;
};
