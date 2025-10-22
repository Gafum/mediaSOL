import { useQuery } from "@tanstack/react-query";
import { AdminService } from "../../../Services/Admin";

export function useGetSchema(password: string) {
   const adminSchemaResponse = useQuery({
      queryKey: ["admin-schema"],
      queryFn: () => AdminService.getSchema(password),
      retry: false,
   });

   const adminSchema = adminSchemaResponse.data ?? null;

   return {
      ...adminSchemaResponse,
      adminSchema,
   };
}
