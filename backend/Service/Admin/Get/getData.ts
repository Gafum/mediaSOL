import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";
import { routersPath } from "../../../routes";

const prisma = new PrismaClient();

type PrismaModel = {
   findMany: (args?: any) => Promise<any[]>;
   count?: (args?: any) => Promise<number>;
};

interface IAdminPanel {
   name: string;
   router: string;
   db: PrismaModel;
   orderBy?: Record<string, "asc" | "desc">;
}

export async function getAdminSchemaWithData(
   req: Request,
   res: Response,
   next: NextFunction
) {
   const adminDataPanel: IAdminPanel[] = [
      {
         name: "Items",
         router: routersPath.items,
         db: prisma.item,
         orderBy: { createdAt: "desc" },
      },
      {
         name: "Types",
         router: routersPath.types,
         db: prisma.itemType,
         orderBy: { name: "asc" },
      },
      {
         name: "Reviews",
         router: routersPath.reviews,
         db: prisma.review,
         orderBy: { createdAt: "desc" },
      },
      {
         name: "Emails",
         router: routersPath.emails,
         db: prisma.contactForm,
         orderBy: { createdAt: "desc" },
      },
   ];

   try {
      const adminSecret = req.headers["x-admin-secret"];
      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      const page = Number(req.query.page) || 1;
      const limit = Number(req.query.limit) || 10;
      const name = String(req.query.name || "Items");

      const panel = adminDataPanel.find(
         (p) => p.name.toLowerCase() === name.toLowerCase()
      );
      if (!panel) {
         return next(ApiError.badRequest("Invalid table name"));
      }

      const skip = (page - 1) * limit;

      const [preview, total] = await Promise.all([
         panel.db.findMany({
            skip,
            take: limit,
            orderBy: panel.orderBy,
         }),
         panel.db.count ? panel.db.count() : Promise.resolve(0),
      ]);

      const columns =
         preview.length > 0
            ? Object.keys(preview[0]).map((col) => ({
                 column_name: col,
                 data_type: typeof (preview[0] as any)[col],
              }))
            : [];

      const totalPages = Math.ceil(total / limit);

      const result = {
         name: panel.name,
         router: panel.router,
         schema: columns,
         preview,
         meta: {
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
