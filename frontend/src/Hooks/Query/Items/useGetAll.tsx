import { useInfiniteQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

const LIMIT = 4;
export function useGetAllItems(selectedType: string | null) {
   const {
      data,
      fetchNextPage,
      isFetchingNextPage,
      isLoading,
      error,
      hasNextPage,
   } = useInfiniteQuery({
      queryKey: ["items", selectedType],
      queryFn: ({ pageParam = 0 }) =>
         ItemsService.getAll({
            page: pageParam,
            limit: LIMIT,
            type: selectedType ?? undefined,
         }),
      getNextPageParam: (lastPage, allPages) => {
         if (lastPage.list.length < LIMIT) return undefined;

         return allPages.length;
      },
      initialPageParam: 0,
   });

   const list = data?.pages.flatMap((page) => page.list) ?? [];

   return {
      isLoading,
      error,
      list,
      fetchNextPage,
      isFetchingNextPage,
      hasNextPage,
   };
}
