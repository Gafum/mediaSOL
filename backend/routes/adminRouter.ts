import { Router } from "express";
import { AdminService } from "../Service/Admin/adminService";
import { contactLimiter } from "../middleware/ContactLimiter";

export const adminRouter = Router();

adminRouter.get("/data", AdminService.getData);

adminRouter.get("/schema", AdminService.getSchema);

adminRouter.post("/createDB", contactLimiter, AdminService.createDB);
