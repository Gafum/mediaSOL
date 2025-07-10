import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

export function useGetTypes() {
   return useQuery({
      queryKey: ["itemTypes"],
      queryFn: () => ItemsService.getTypes(),
      staleTime: 1000 * 60 * 60 * 24 * 10, // 10 days
   });
}
