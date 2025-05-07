import axios from "axios";
import { IGadget } from "../../MainTypes/Gadget";

interface IGetAll {
   list: IGadget[];
}

export async function getAll(): Promise<IGetAll> {
   //Rewrite Add Pagination
   try {
      const response = await axios.get(
         import.meta.env.VITE_BACKEND_URL + "/items/"
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
