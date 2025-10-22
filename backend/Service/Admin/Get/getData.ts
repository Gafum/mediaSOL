import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../../error/ApiError";
import { adminDataPanel } from "../Data/adminDataPanel";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

type PrismaModel = {
   findMany: (args?: any) => Promise<any[]>;
   count?: (args?: any) => Promise<number>;
   $queryRaw: any;
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

      const columns = await prisma.$queryRaw<
         { column_name: string; data_type: string; is_nullable: string }[]
      >`
   SELECT 
      column_name,
      data_type,
      is_nullable
   FROM information_schema.columns
   WHERE LOWER(table_name) = LOWER(${panel.key}) AND table_schema = 'public'
   ORDER BY table_name, ordinal_position
`;

      const totalPages = total > 0 ? Math.ceil(total / limit) : 1;

      const result = {
         schema: columns.map(
            (col: {
               is_nullable: string;
               column_name: string;
               data_type: string;
            }) => ({
               column_name: col.column_name,
               data_type: col.data_type,
               isRequired: col.is_nullable === "NO",
            })
         ),
         preview,
         meta: {
            name: panel.name,
            key: panel.key,
            router: panel.router,
            editable: panel.editable,
            additive: panel.additive,
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
