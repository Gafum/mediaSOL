import axios from "axios";
import { IErrorMessage, logError } from "../../MainTypes/ErrorMessage";

export async function getTypes() {
   try {
      const response = await axios.get<string[] | IErrorMessage>(
         import.meta.env.VITE_BACKEND_URL + `/items/types`
      );
      const data = response.data;

      if (response.status > 300) {
         logError(data);
      }

      if (Array.isArray(data)) {
         return data;
      } else {
         throw new Error("Unexpected response format");
      }
   } catch (error) {
      throw new Error("error");
   }
}
