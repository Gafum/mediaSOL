import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";
import { useMemo } from "react";

export function useGetSomeItems(elementsIds?: string[]) {
   const isEnabled = Array.isArray(elementsIds) && elementsIds.length > 0;

   const stableIds = useMemo(() => {
      return elementsIds ? [...elementsIds].sort() : [];
   }, [JSON.stringify(elementsIds)]);

   const { isLoading, error, data } = useQuery({
      queryKey: ["items", stableIds],
      queryFn: () => ItemsService.getSome(stableIds),
      enabled: isEnabled,
      placeholderData: (previous) => previous,
   });

   const list = data?.list ?? null;

   return {
      isLoading,
      error,
      list,
   };
}
