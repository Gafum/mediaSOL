import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

export function useGetTypes() {
   const {
      data: types,
      isLoading,
      error,
   } = useQuery({
      queryKey: ["itemTypes"],
      queryFn: () => ItemsService.getTypes(),
      staleTime: 1000 * 60 * 60 * 24 * 30, // 30 days
   });
   return {
      data: types,
      isLoading,
      error,
   };
}
