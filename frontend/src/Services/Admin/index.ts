import { getData } from "./getData";
import { getSchema } from "./getSchema";

export class AdminService {
   static getData: typeof getData = getData;
   static getSchema: typeof getSchema = getSchema;
}
