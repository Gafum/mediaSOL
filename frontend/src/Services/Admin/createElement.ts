import axios from "axios";

export interface ICreateElementProps {
   newElement: Record<string, any>;
   route: string | undefined;
   password?: string | undefined;
}

export async function createElement({
   newElement,
   route,
   password,
}: ICreateElementProps) {
   if (!route || !password) {
      throw new Error("Data is not right!");
   }

   try {
      const response = await axios.post(
         import.meta.env.VITE_BACKEND_URL + route,
         JSON.stringify(newElement),
         {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
               "x-admin-secret": password,
            },
         }
      );
      const data = response.data;

      return data;
   } catch (error) {
      if ((error as any).response.data) {
         return (error as any).response.data;
      } else {
         throw new Error("Unknown error");
      }
   }
}
