import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IReviews } from "../../../MainTypes/Reviews";
import { ReviewsService } from "../../../Services/Reviews";

export function useCreateOne(itemId: string | undefined) {
   const queryClient = useQueryClient();
   const mutation = useMutation({
      mutationKey: ["add post"],
      mutationFn: (reviewData: Omit<IReviews, "id">) =>
         ReviewsService.createOne(reviewData),
      onSettled: (_data, error) => {
         if (error) return;
         if (!itemId) {
            return console.log("Item is not found!");
         }
         queryClient.invalidateQueries({ queryKey: ["items", itemId] });
      },
   });

   return {
      createReview: mutation.mutate,
      ...mutation,
   };
}
