import axios from "axios";
import { IGadget } from "../../MainTypes/Gadget";

interface IGetOne {
   elementData: IGadget;
   similaryGadgets: IGadget[];
}

export async function getOne(itemId: string | undefined): Promise<IGetOne> {
   if (!itemId) {
      throw new Error("It is not the right path!");
   }
   try {
      const response = await axios.get(
         import.meta.env.VITE_BACKEND_URL +
            "/items/" +
            itemId +
            "?withSimilary=true"
      );
      const data = await response.data;

      if (response.status > 300) {
         throw new Error(data.message);
      }

      return {
         elementData: data[0],
         similaryGadgets: data[1],
      };
   } catch (error) {
      throw new Error("error");
   }
}
