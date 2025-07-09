import { Request, Response, NextFunction } from "express";
import { PrismaClient } from "@prisma/client";
import { ApiError } from "../../error/ApiError";
const prisma = new PrismaClient();

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

      const limitNum = Number(req.query?.limit) || 10;

      const rawSchema = await prisma.$queryRawUnsafe<any[]>(`
         SELECT table_name, column_name, data_type
         FROM information_schema.columns
         WHERE table_schema = 'public'
         ORDER BY table_name, ordinal_position
      `);

      const grouped: Record<
         string,
         { column_name: string; data_type: string }[]
      > = {};
      for (const row of rawSchema) {
         const { table_name, column_name, data_type } = row;
         if (!grouped[table_name]) grouped[table_name] = [];
         grouped[table_name].push({ column_name, data_type });
      }

      const finalResult: Record<
         string,
         {
            schema: { column_name: string; data_type: string }[];
            preview: Record<string, any>[] | { error: string };
         }
      > = {};

      for (const [tableName, columns] of Object.entries(grouped)) {
         let preview: any[] = [];

         const hasCreatedAt = columns.some(
            (c) => c.column_name === "createdAt"
         );

         try {
            const query = `
               SELECT * FROM "${tableName}"
               ${hasCreatedAt ? `ORDER BY "createdAt" DESC` : ``}
               LIMIT ${limitNum}
            `;
            preview = await prisma.$queryRawUnsafe<any[]>(query);
         } catch (err) {
            preview = [{ error: "Failed to fetch data for this table" }];
         }

         finalResult[tableName] = {
            schema: columns,
            preview,
         };
      }

      res.status(200).json(finalResult);
   } catch (err) {
      console.error("Admin schema fetch failed:", err);
      return next(ApiError.internal("Could not fetch schema and preview data"));
   }
}
