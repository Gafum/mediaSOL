import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";
import { routersPath } from "../../../routes";
const prisma = new PrismaClient();

type PrismaModel = {
   findMany: (args?: any) => Promise<any[]>;
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

      const limitNum = Number(req.query?.limit) || 10;

      const finalResult: Record<
         string,
         {
            router: string;
            schema: {
               column_name: string;
               data_type: string;
            }[];
            preview: Record<string, any>[] | { error: string };
         }
      > = {};

      for (const panel of adminDataPanel) {
         try {
            const preview = await panel.db.findMany({
               take: limitNum,
               orderBy: panel.orderBy,
            });

            const columns =
               preview.length > 0
                  ? Object.keys(preview[0]).map((col) => ({
                       column_name: col,
                       data_type: typeof (preview[0] as any)[col],
                    }))
                  : [];

            finalResult[panel.name] = {
               router: panel.router,
               schema: columns,
               preview,
            };
         } catch (err) {
            console.error(`Failed fetching ${panel.name}`, err);
            finalResult[panel.name] = {
               router: "/error/",
               schema: [],
               preview: [{ error: "Failed to fetch data" }],
            };
         }
      }

      res.status(200).json(finalResult);
   } catch (err) {
      console.error("Admin schema fetch failed:", err);
      return next(ApiError.internal("Could not fetch schema and preview data"));
   }
}
