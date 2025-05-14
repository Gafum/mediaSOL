import axios from "axios";
import { IGadget } from "../../MainTypes/Gadget";

interface IGetALlProps {
   page?: number;
   limit?: number;
   type?: string;
}

interface IGetAll {
   list: IGadget[];
   total: number;
}

export async function getAll({
   page = 0,
   limit = 3,
   type = "",
}: IGetALlProps): Promise<IGetAll> {
   try {
      const params = new URLSearchParams({
         page: String(page),
         limit: String(limit),
         type,
      });

      const response = await axios.get<IGetAll>(
         `${import.meta.env.VITE_BACKEND_URL}/items?${params.toString()}`
      );

      return response.data;
   } catch (error: any) {
      const message =
         error?.response?.data?.message || error?.message || "Unknown error";
      throw new Error(message);
   }
}
