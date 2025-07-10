import axios from "axios";
import { logError } from "../../MainTypes/ErrorMessage";

export async function getOverview(passwort: string) {
   try {
      if (!Boolean(passwort) || passwort.trim().length == 0) {
         throw new Error("Passwort is required");
      }
      const response = await axios.get("/admin/overview", {
         headers: {
            "x-admin-secret": passwort,
         },
      });
      const data = response.data;

      if (response.status > 300) {
         logError(data);
      }

      return data;
   } catch (error: any) {
      const message =
         error?.response?.data?.message || error?.message || "Unknown error";
      throw new Error(message);
   }
}
