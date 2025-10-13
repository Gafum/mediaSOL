import { PrismaClient } from "@prisma/client";
import { routersPath } from "../../../routes";

const prisma = new PrismaClient();

interface IAdminDataPanel {
   name: string;
   key: string;
   router: string;
   editable: boolean;
   orderBy: Record<string, string>;
   database: any;
   additive: boolean; // Can admin add or edit element to table?
}

export const adminDataPanel = (): IAdminDataPanel[] => {
   return [
      {
         name: "Items",
         key: "items",
         router: routersPath.items,
         editable: true,
         orderBy: { updatedAt: "desc" },
         database: prisma.item,
         additive: true,
      },
      {
         name: "Types",
         key: "itemTypes",
         router: routersPath.types,
         editable: true,
         orderBy: { name: "asc" },
         database: prisma.itemType,
         additive: true,
      },
      {
         name: "Reviews",
         key: "reviews",
         router: routersPath.reviews,
         editable: false,
         orderBy: { createdAt: "desc" },
         database: prisma.review,
         additive: true,
      },
      {
         name: "Emails",
         key: "contactForms",
         router: routersPath.emails,
         editable: false,
         orderBy: { createdAt: "desc" },
         database: prisma.contactForm,
         additive: false,
      },
   ];
};
