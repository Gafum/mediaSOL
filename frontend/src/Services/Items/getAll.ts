import axios from "axios";
import { IGadget } from "../../MainTypes/Gadget";

interface IGetALlProps {
   page: number;
   limit: number;
   type?: string;
   searchText?: string;
}

interface IGetAll {
   list: IGadget[];
   total: number;
}

export async function getAll({
   page = 0,
   limit = 3,
   type = "",
   searchText = "",
}: IGetALlProps): Promise<IGetAll> {
   try {
      const params = new URLSearchParams({
         page: String(page),
         limit: String(limit),
         ...(type ? { type } : {}),
         ...(searchText ? { searchText } : {}),
      });

      const response = await axios.get(
         `${import.meta.env.VITE_BACKEND_URL}/items?${params.toString()}`
      );

      const data = response.data;

      if (response.status > 300) {
         throw new Error(data?.message);
      }

      return data;
   } catch (error: any) {
      const message =
         error?.response?.data?.message || error?.message || "Unknown error";
      throw new Error(message);
   }
}
