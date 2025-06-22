import axios from "axios";
import { IGadget } from "../../MainTypes/Gadget";
import { IErrorMessage, logError } from "../../MainTypes/ErrorMessage";

interface IGetSome {
   list: IGadget[];
}

export async function getSome(
   elementsIds: string[] | undefined
): Promise<IGetSome> {
   if (!elementsIds) {
      throw new Error("It is not the right path!");
   }

   try {
      const response = await axios.post<IGadget[] | IErrorMessage>(
         import.meta.env.VITE_BACKEND_URL + "/items/some",
         JSON.stringify({ ids: elementsIds }),
         {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
            },
         }
      );

      const data = response.data;

      if (response.status > 300) {
         logError(data);
      }

      if (Array.isArray(data)) {
         return {
            list: data,
         };
      } else {
         throw new Error("Unexpected response format");
      }
   } catch (error) {
      throw new Error("error");
   }
}
