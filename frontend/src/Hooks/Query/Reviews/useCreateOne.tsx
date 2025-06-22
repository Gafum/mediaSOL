import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IReviews } from "../../../MainTypes/Reviews";
import { ReviewsService } from "../../../Services/Reviews";

export function useCreateOne(itemId: string | undefined) {
   const queryClient = useQueryClient();
   const mutation = useMutation({
      mutationKey: ["add post"],
      mutationFn: (reviewData: Omit<IReviews, "id">) =>
         ReviewsService.createOne(reviewData),
      onSettled: () => {
         if (!itemId) {
            return console.log("item is not found");
         }
         queryClient.invalidateQueries({ queryKey: ["items", itemId] });
      },
   });

   return {
      createReview: mutation.mutate,
      ...mutation,
   };
}
