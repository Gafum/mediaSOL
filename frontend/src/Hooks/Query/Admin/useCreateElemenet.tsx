import { useMutation, useQueryClient } from "@tanstack/react-query";
import { IGetOverviewProps } from "./useGetData";
import { AdminService } from "../../../Services/Admin";
import { ICreateElementProps } from "../../../Services/Admin/createElement";

export function useCreateElement({ password, key }: IGetOverviewProps) {
   const queryKeyCreate: string[] = ["admin", key, password];

   const queryClient = useQueryClient();

   const mutation = useMutation({
      mutationKey: queryKeyCreate,
      mutationFn: (data: ICreateElementProps) =>
         AdminService.createElement({ ...data, password }),
      onSettled: (_data, error) => {
         if (error) return;
         if (key) queryClient.invalidateQueries({ queryKey: queryKeyCreate });
      },
   });

   return {
      createElement: mutation.mutate,
      ...mutation,
   };
}
