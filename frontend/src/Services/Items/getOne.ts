import axios from "axios";
import { reviewsList } from "../../DevData/ReviewsList";
import { IGadget } from "../../MainTypes/Gadget";
import { IReviews } from "../../MainTypes/Reviews";

interface IGetOne {
   elementData: IGadget;
   localCommentList: IReviews[];
   similaryGadgets: IGadget[];
}

export async function getOne(itemId: string | undefined): Promise<IGetOne> {
   if (!itemId) {
      throw new Error("It is not the right path!");
   }

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

   //rewrite BACKEND === json[1]
   const localCommentList = reviewsList.filter(({ id }) =>
      data[1].commentsList?.includes(id)
   );

   return {
      elementData: data[0],
      localCommentList: localCommentList,
      similaryGadgets: data[2],
   };
}
