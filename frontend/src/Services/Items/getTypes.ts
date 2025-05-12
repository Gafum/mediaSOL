import axios from "axios";

export async function getTypes() {
   try {
      const response = await axios.get(
         import.meta.env.VITE_BACKEND_URL + `/items/types`
      );
      const data = await response.data;

      if (response.status > 300) {
         throw new Error(data.message);
      }

      return data;
   } catch (error) {
      throw new Error("error");
   }
}
