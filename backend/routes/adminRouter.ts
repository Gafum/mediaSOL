import { Request, Response, NextFunction, Router } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const adminRouter = Router();

adminRouter.get(
   "/table",
   async function getFormattedSchema(req: Request, res: Response) {
      try {
         const raw = await prisma.$queryRawUnsafe<any[]>(`
         SELECT 
            table_name,
            column_name,
            data_type
         FROM information_schema.columns
         WHERE table_schema = 'public'
         ORDER BY table_name, ordinal_position
      `);

         const result: Record<
            string,
            { column_name: string; data_type: string }[]
         > = {};

         for (const row of raw) {
            const { table_name, column_name, data_type } = row;

            if (!result[table_name]) {
               result[table_name] = [];
            }

            const existing = new Set(
               result[table_name].map((f) => f.column_name)
            );
            if (!existing.has(column_name)) {
               result[table_name].push({ column_name, data_type });
            }
         }

         const sorted = Object.entries(result)
            .sort(([, a], [, b]) => a.length - b.length)
            .reduce((acc, [table, columns]) => {
               acc[table] = columns;
               return acc;
            }, {} as Record<string, { column_name: string; data_type: string }[]>);

         res.status(200).json(sorted);
      } catch (error) {
         console.error("Metadata fetch error:", error);
         res.status(500).json({ error: "Failed to fetch schema metadata" });
      }
   }
);
