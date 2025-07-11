import { useMutation } from "@tanstack/react-query";
import { AdminService } from "../../../Services/Admin";

export interface IGetOverviewProps {
   password: string;
}

export function useGetOverview() {
   const mutation = useMutation({
      mutationKey: ["admin", "schema-with-preview"],
      mutationFn: ({ password }: IGetOverviewProps) =>
         AdminService.getOverview({ password }),
   });

   return {
      getOverview: mutation.mutate,
      getOverviewAsync: mutation.mutateAsync,
      ...mutation,
   };
}
