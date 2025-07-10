import { useMutation } from "@tanstack/react-query";
import { AdminService } from "../../../Services/Admin";

export function useGetOverview() {
   const mutation = useMutation({
      mutationKey: ["admin", "schema-with-preview"],
      mutationFn: (passwort: string) => AdminService.getOverview(passwort),
   });

   return {
      getOverview: mutation.mutate,
      getOverviewAsync: mutation.mutateAsync,
      ...mutation,
   };
}
