import { useInfiniteQuery } from "@tanstack/react-query";
import { AdminService } from "../../../Services/Admin";

export interface IGetOverviewProps {
   password: string;
   name: string;
   pageParam?: number;
   limit?: number;
}

const ADMIN_LIMIT = 10;

export function useGetOverview({ password, name }: IGetOverviewProps) {
   return useInfiniteQuery({
      queryKey: ["admin", name, password],
      queryFn: ({ pageParam = 1 }) =>
         AdminService.getOverview({ password, name, pageParam }),
      getNextPageParam: (lastPage, allPages) => {
         if (lastPage[name].preview.length < ADMIN_LIMIT) return undefined;
         return allPages.length;
      },
      initialPageParam: 0,
   });
}
