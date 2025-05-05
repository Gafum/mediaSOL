import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

export function useGetSomeItems(elementsIds?: string[]) {
   const isEnabled = Array.isArray(elementsIds) && elementsIds.length > 0;

   const { isLoading, error, data } = useQuery({
      queryKey: ["items", elementsIds],
      queryFn: () => ItemsService.getSome(elementsIds),
      enabled: isEnabled,
   });

   const list = data?.list ?? null;

   return {
      isLoading,
      error,
      list,
   };
}
