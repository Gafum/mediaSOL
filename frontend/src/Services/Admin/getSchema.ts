import axios from "axios";
import { logError } from "../../MainTypes/ErrorMessage";

export interface IAdminSchema {
   name: string;
   key: string;
   router: string;
   editable: boolean;
}

export async function getSchema(password: string) {
   try {
      const response = await axios.get<IAdminSchema[]>(
         import.meta.env.VITE_BACKEND_URL + `/admin/schema/`,
         {
            headers: {
               "x-admin-secret": password,
            },
         }
      );
      const data = await response.data;

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
