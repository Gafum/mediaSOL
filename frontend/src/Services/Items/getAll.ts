import axios from "axios";
import { IGadget } from "../../MainTypes/Gadget";

interface IGetAll {
   list: IGadget[];
}

export async function getAll(
   page: number = 0,
   limit: number = 3
): Promise<IGetAll> {
   try {
      const response = await axios.get(
         import.meta.env.VITE_BACKEND_URL + `/items?page=${page}&limit=${limit}`
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
