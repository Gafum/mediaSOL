import { getOverview } from "./getData";
import { getSchema } from "./getSchema";

export class AdminService {
   static getOverview: typeof getOverview = getOverview;
   static getSchema: typeof getSchema = getSchema;
}
