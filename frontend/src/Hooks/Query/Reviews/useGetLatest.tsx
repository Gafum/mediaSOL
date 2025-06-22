import { useQuery } from "@tanstack/react-query";
import { ReviewsService } from "../../../Services/Reviews";
import { IReviews } from "../../../MainTypes/Reviews";

export function useGetLatestReviews() {
   const { isLoading, error, data } = useQuery({
      queryKey: ["reviews-latest"],
      queryFn: () => ReviewsService.getLatest(),
   });

   const latestReview: IReviews[] = data ?? [];

   return {
      isLoading,
      error,
      latestReview,
   };
}
