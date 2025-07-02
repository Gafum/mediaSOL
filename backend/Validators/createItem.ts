import z from "zod";
import sanitizeHtml from "sanitize-html";
import { Item } from "@prisma/client";
import { ApiError } from "../error/ApiError";

export const createItemSchema = z.object({
   name: z
      .string({ message: "Name is required" })
      .trim()
      .min(1, "Name cannot be empty")
      .max(150, "Name is too long"),
   price: z
      .number({ message: "Price is required" })
      .positive({ message: "Price must be positive" }),
   description: z
      .string({ message: "Description is required" })
      .trim()
      .min(1, "Description cannot be empty")
      .max(1000, "Description is too long"),
   img: z
      .string()
      .trim()
      .url({ message: "Image must be a valid URL" })
      .optional(),
   typeName: z
      .string({ message: "Type is required" })
      .trim()
      .min(1, "Type cannot be empty"),
   action: z
      .number()
      .int({ message: "Action must be integer" })
      .min(0)
      .max(100)
      .optional(),
});

export function validateAndSanitizeItem(
   input: unknown
): Omit<Item, "id" | "createdAt" | "updatedAt"> {
   const parsed = createItemSchema.safeParse(input);

   if (!parsed.success) {
      const messages = parsed.error.errors[0].message ?? "Validation failed";
      throw ApiError.badRequest(messages);
   }

   const { name, price, description, img, typeName, action } = parsed.data;

   return {
      name: sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} }),
      price,
      description: sanitizeHtml(description, {
         allowedTags: [
            "b",
            "i",
            "em",
            "strong",
            "u",
            "br",
            "ul",
            "ol",
            "li",
            "p",
         ],
         allowedAttributes: { a: ["href", "target", "rel"] },
      }),
      img: img
         ? sanitizeHtml(img, { allowedTags: [], allowedAttributes: {} })
         : null,
      typeName: sanitizeHtml(typeName, {
         allowedTags: [],
         allowedAttributes: {},
      }),
      action: action ?? null,
   };
}
