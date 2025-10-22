import axios from "axios";
import { logError } from "../../MainTypes/ErrorMessage";
import { IGetOverviewProps } from "../../Hooks/Query/Admin/useGetData";

export interface ISchemaColumn {
   column_name: string;
   data_type: string;
   isRequired: boolean;
   isShown?: boolean;
}

export interface IAdminMeta {
   name: string;
   key: string;
   router: string;
   editable: boolean;
   additive: boolean;
   total: number;
   page: number;
   limit: number;
   totalPages: number;
}

export interface IAdminDataResponse {
   schema: ISchemaColumn[];

   preview: Record<string, any>[];

   meta?: IAdminMeta;
}

export async function getData({
   password,
   pageParam,
   limit,
   key,
}: IGetOverviewProps): Promise<IAdminDataResponse> {
   try {
      if (!Boolean(password) || password.trim().length == 0) {
         throw new Error("Passwort is required");
      }
      const response = await axios.get<IAdminDataResponse>(
         import.meta.env.VITE_BACKEND_URL + "/admin/data",
         {
            params: { key, page: pageParam, limit },
            headers: {
               "x-admin-secret": password,
            },
         }
      );

      const data = response.data;

      if (response.status > 400 && response.status < 500) {
         throw new Error("404");
      }

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
