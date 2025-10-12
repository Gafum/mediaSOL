import { getAdminSchemaWithData } from "./Get/getData";
import { getSchema } from "./Get/getSchema";
import { createDB } from "./Create/createDB";

export class AdminService {
   // Get Ddata
   static getData: typeof getAdminSchemaWithData = getAdminSchemaWithData;

   //Get Schema
   static getSchema: typeof getSchema = getSchema;

   static createDB: typeof createDB = createDB;
}
