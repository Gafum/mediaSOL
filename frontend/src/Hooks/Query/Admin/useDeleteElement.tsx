import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IGetOverviewProps } from "./useGetData";
import { AdminService } from "../../../Services/Admin";
import { IDeleteDataProps } from "../../../Services/Admin/deleteData";

export function useDeleteElement({ password, key }: IGetOverviewProps) {
   const queryKeyDelete: string[] = ["admin", key, password];

   const queryClient = useQueryClient();
   const mutation = useMutation({
      mutationKey: queryKeyDelete,
      mutationFn: (data: IDeleteDataProps) =>
         AdminService.deleteData({ ...data, password }),
      onSettled: () => {
         if (key) queryClient.invalidateQueries({ queryKey: queryKeyDelete });
      },
   });

   return {
      deleteElement: mutation.mutate,
      ...mutation,
   };
}
