import z from "zod";
import { IItemType } from "../Data/ItemsTypesArray";
import { ApiError } from "../error/ApiError";
import sanitizeHtml from "sanitize-html";

export const createItemTypeSchema = z.object({
   name: z
      .string({ message: "Name is required" })
      .trim()
      .min(1, "Name cannot be empty")
      .max(70, "Name is too long"),
});

export function validateAndSanitizeItemType(
   input: unknown
): Omit<IItemType, "id"> {
   const parsed = createItemTypeSchema.safeParse(input);

   if (!parsed.success) {
      const messages = parsed.error.errors[0]?.message ?? "Validation failed";
      throw ApiError.badRequest(messages);
   }

   const { name } = parsed.data;

   return {
      name: sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} }),
   };
}
