import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

export function useGetAllItems() {
   //Rewrite Add Pagination
   const { isLoading, error, data } = useQuery({
      queryKey: ["items"],
      queryFn: () => ItemsService.getAll(),
   });

   const list = data?.list ?? null;

   return {
      isLoading,
      error,
      list,
   };
}
