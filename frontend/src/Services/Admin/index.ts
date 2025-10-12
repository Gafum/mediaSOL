import { getData } from "./getData";
import { getSchema } from "./getSchema";
import { deleteData } from "./deleteData";

export class AdminService {
   static getData: typeof getData = getData;
   static getSchema: typeof getSchema = getSchema;
   static deleteData: typeof deleteData = deleteData;
}
