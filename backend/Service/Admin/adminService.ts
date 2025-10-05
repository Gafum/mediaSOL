import { getAdminSchemaWithData } from "./Get/getData";
import { getSchema } from "./Get/getSchema";

export class AdminService {
   // Get Ddata
   static getData: typeof getAdminSchemaWithData = getAdminSchemaWithData;

   //Get Schema
   static getSchema: typeof getSchema = getSchema;
}
