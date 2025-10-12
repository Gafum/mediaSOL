import axios from "axios";

export interface IDeleteDataProps {
   elementId: string | undefined;
   route: string | undefined;
   password?: string | undefined;
}

export async function deleteData({
   elementId,
   route,
   password,
}: IDeleteDataProps) {
   if (!elementId || !route || !password) {
      throw new Error("Data is not right!");
   }

   try {
      const response = await axios.delete(
         import.meta.env.VITE_BACKEND_URL + route + elementId,
         {
            headers: {
               "x-admin-secret": password,
            },
         }
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
