import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../../error/ApiError";
import { routersPath } from "../../../routes";

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

      const adminDataPanel = [
         {
            name: "Items",
            database: "item",
            router: routersPath.items,
            editable: true,
            orderBy: { createdAt: "desc" },
         },
         {
            name: "Types",
            database: "itemType",
            router: routersPath.types,
            editable: true,
            orderBy: { name: "asc" },
         },
         {
            name: "Reviews",
            database: "review",
            router: routersPath.reviews,
            editable: false,
            orderBy: { createdAt: "desc" },
         },
         {
            name: "Emails",
            database: "contactForm",
            router: routersPath.emails,
            editable: false,
            orderBy: { createdAt: "desc" },
         },
      ];

      res.status(200).json(
         adminDataPanel.map(({ name, database, editable, router }) => {
            return { name, database, editable, router };
         })
      );
   } catch (err) {
      console.error("Admin overview fetch failed:", err);
      return next(ApiError.internal("Could not fetch admin overview"));
   }
}
