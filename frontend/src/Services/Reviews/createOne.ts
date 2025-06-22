import axios from "axios";
import { IReviews } from "../../MainTypes/Reviews";
import { IErrorMessage } from "../../MainTypes/ErrorMessage";

export async function createOne(review: Omit<IReviews, "id">) {
   try {
      const response = await axios.post<IReviews | IErrorMessage>(
         import.meta.env.VITE_BACKEND_URL + `/reviews/`,
         JSON.stringify(review),
         {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
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
