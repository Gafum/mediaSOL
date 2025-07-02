import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../../error/ApiError";

const prisma = new PrismaClient();

export async function getContactForms(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const adminSecret = req.headers["x-admin-secret"];

      if (!adminSecret || adminSecret !== process.env.ADMIN_SECRET) {
         return next(ApiError.forbidden("Access denied"));
      }

      const forms = await prisma.contactForm.findMany({
         orderBy: { createdAt: "desc" },
      });

      res.status(200).json(forms);
   } catch (error) {
      console.error("Failed to get contact forms:", error);
      return next(ApiError.internal("Error while getting contact forms"));
   }
}
