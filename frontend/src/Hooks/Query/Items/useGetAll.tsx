import { useInfiniteQuery } from "@tanstack/react-query";
import { ItemsService } from "../../../Services/Items";

const LIMIT = 4;
export function useGetAllItems() {
   const {
      data,
      fetchNextPage,
      isFetchingNextPage,
      isLoading,
      error,
      hasNextPage,
   } = useInfiniteQuery({
      queryKey: ["items"],
      queryFn: ({ pageParam = 0 }) => ItemsService.getAll(pageParam, LIMIT),
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
