import { useInfiniteQuery } from "@tanstack/react-query";
import { AdminService } from "../../../Services/Admin";

export interface IGetOverviewProps {
   password: string;
   key: string;
   pageParam?: number;
   limit?: number;
}

const ADMIN_LIMIT = 10;

export function useAdminGetData({ password, key }: IGetOverviewProps) {
   const response = useInfiniteQuery({
      queryKey: ["admin", key, password],
      queryFn: ({ pageParam = 1 }) =>
         AdminService.getData({ password, key, pageParam, limit: ADMIN_LIMIT }),
      getNextPageParam: (lastPage, allPages) => {
         if (lastPage.preview.length < ADMIN_LIMIT) return undefined;
         return allPages.length;
      },
      initialPageParam: 0,
      enabled: !!password && !!key,
   });

   const adminDataPreview =
      response.data?.pages.flatMap((page) => page.preview) ?? [];
   const adminDataSchema = response.data?.pages[0].schema ?? [];
   const adminDataMeta = response.data?.pages[0].meta;

   return { adminDataPreview, adminDataSchema, adminDataMeta, ...response };
}
