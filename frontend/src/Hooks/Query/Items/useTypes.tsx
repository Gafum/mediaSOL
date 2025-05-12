import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

export function useGetTypes() {
   const { data: types, isLoading } = useQuery({
      queryKey: ["itemTypes"],
      queryFn: () => ItemsService.getTypes(),
      staleTime: 1000 * 60 * 60 * 24 * 30,
   });
   return {
      data: types,
      isLoading,
   };
}
