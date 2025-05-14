import axios from "axios";
import { IGadget } from "../../MainTypes/Gadget";

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
      const response = await axios.post(
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

      const data = await response.data;

      if (response.status > 300) {
         throw new Error(data.message);
      }

      return {
         list: data,
      };
   } catch (error) {
      throw new Error("error");
   }
}
