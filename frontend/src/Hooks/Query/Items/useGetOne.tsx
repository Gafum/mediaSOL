import { useQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

export function useGetOneItem(itemId: string | undefined) {
   const { isLoading, error, data, isPending } = useQuery({
      queryKey: ["items", itemId],
      queryFn: () => ItemsService.getOne(itemId),
      enabled: !!itemId,
   });

   const elementData = data?.elementData ?? null;
   const similaryGadgets = data?.similaryGadgets ?? [];

   return {
      isLoading,
      error,
      elementData,
      similaryGadgets,
      isPending,
   };
}
