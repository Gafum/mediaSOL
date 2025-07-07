import { Router } from "express";
import { AdminService } from "../Service/Admin/adminService";

export const adminRouter = Router();

adminRouter.get("/schema", AdminService.getFormattedSchema);
