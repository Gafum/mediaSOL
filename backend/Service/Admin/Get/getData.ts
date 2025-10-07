import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../../error/ApiError";
import { adminDataPanel } from "./getSchema";

type PrismaModel = {
   findMany: (args?: any) => Promise<any[]>;
   count?: (args?: any) => Promise<number>;
};

export async function getAdminSchemaWithData(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const adminSecret = req.headers["x-admin-secret"];
      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      const key = String(req.query.key || "").trim();
      if (!key) {
         return next(ApiError.badRequest("Missing key parameter"));
      }

      const panel = adminDataPanel().find((p) => p.key === key);
      if (!panel) {
         return next(ApiError.badRequest("Invalid database key"));
      }

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const skip = (page - 1) * limit;

      const db = panel.database as PrismaModel;

      const [preview, total] = await Promise.all([
         db.findMany({
            skip,
            take: limit,
            orderBy: panel.orderBy,
         }),
         db.count ? db.count() : Promise.resolve(0),
      ]);

      const columns =
         preview.length > 0
            ? Object.keys(preview[0]).map((col) => ({
                 column_name: col,
                 data_type: typeof (preview[0] as any)[col],
              }))
            : [];

      const totalPages = total > 0 ? Math.ceil(total / limit) : 1;

      const result = {
         schema: columns,
         preview,
         meta: {
            name: panel.name,
            key: panel.key,
            router: panel.router,
            editable: panel.editable,
            total,
            page,
            limit,
            totalPages,
         },
      };

      res.status(200).json(result);
   } catch (err) {
      console.error("Admin schema fetch failed:", err);
      return next(ApiError.internal("Could not fetch schema and preview data"));
   }
}
