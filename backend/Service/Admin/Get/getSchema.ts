import { Request, Response, NextFunction } from "express";
import { ApiError } from "../../../error/ApiError";
import { routersPath } from "../../../routes";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const adminDataPanel = () => {
   return [
      {
         name: "Items",
         key: "items",
         router: routersPath.items,
         editable: true,
         orderBy: { updatedAt: "desc" },
         database: prisma.item,
      },
      {
         name: "Types",
         key: "itemTypes",
         router: routersPath.types,
         editable: true,
         orderBy: { name: "asc" },
         database: prisma.itemType,
      },
      {
         name: "Reviews",
         key: "reviews",
         router: routersPath.reviews,
         editable: false,
         orderBy: { createdAt: "desc" },
         database: prisma.review,
      },
      {
         name: "Emails",
         key: "contactForms",
         router: routersPath.emails,
         editable: false,
         orderBy: { createdAt: "desc" },
         database: prisma.contactForm,
      },
   ];
};

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
