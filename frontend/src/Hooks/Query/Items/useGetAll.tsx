import { useInfiniteQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

const LIMIT = 5;

export function useGetAllItems(
   selectedType: string | null,
   searchText: string
) {
   const {
      data,
      fetchNextPage,
      isFetchingNextPage,
      isLoading,
      error,
      hasNextPage,
   } = useInfiniteQuery({
      queryKey: ["items", selectedType, searchText],
      queryFn: ({ pageParam = 0 }) =>
         ItemsService.getAll({
            page: pageParam,
            limit: LIMIT,
            type: selectedType ?? undefined,
            searchText: searchText ?? undefined,
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
