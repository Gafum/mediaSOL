import axios from "axios";
import { logError } from "../../MainTypes/ErrorMessage";
import { IGetOverviewProps } from "../../Hooks/Query/Admin/useGetData";

export interface ISchemaColumn {
   column_name: string;
   data_type: string;
}

export interface ITableData {
   schema: ISchemaColumn[];
   preview: Record<string, any>[];
   shown?: boolean;
}

export interface IAdminData {
   [tableName: string]: ITableData;
}

export async function getOverview({
   password,
   pageParam,
   limit,
   name,
}: IGetOverviewProps): Promise<IAdminData> {
   try {
      if (!Boolean(password) || password.trim().length == 0) {
         throw new Error("Passwort is required");
      }
      const response = await axios.get<IAdminData>(
         import.meta.env.VITE_BACKEND_URL + "/admin/overview",
         {
            params: { name, page: pageParam, limit },
            headers: {
               "x-admin-secret": password,
            },
         }
      );

      const data = response.data;

      if (response.status > 300) {
         logError(data);
      }

      return data;
   } catch (error: any) {
      console.log(error);
      const message =
         error?.response?.data?.message || error?.message || "Unknown error";
      throw new Error(message);
   }
}
