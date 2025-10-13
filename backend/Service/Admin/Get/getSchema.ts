import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../../error/ApiError";
import { adminDataPanel } from "../Data/adminDataPanel";

export async function getSchema(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const adminSecret = req.headers["x-admin-secret"];

      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      res.status(200).json(
         adminDataPanel().map(({ name, key, router }) => {
            return { name, key, router };
         })
      );
   } catch (err) {
      console.error("Admin overview fetch failed:", err);
      return next(ApiError.internal("Could not fetch admin overview"));
   }
}
