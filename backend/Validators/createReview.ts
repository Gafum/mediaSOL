import z from "zod";
import sanitizeHtml from "sanitize-html";
import { ApiError } from "../error/ApiError";

const createReviewSchema = z.object({
   stars: z.number({ message: "Give the feadbeak" }).int().min(0).max(4),
   userName: z
      .string({ message: "Name is required" })
      .trim()
      .min(1)
      .max(50, { message: "Name is too long" }),
   text: z
      .string({ message: "Write the message" })
      .trim()
      .min(1)
      .max(250, { message: "Message is too long" }),
   itemId: z.string({ message: "Bad request" }).trim().min(1),
});

export function validateAndSanitizeReview(input: unknown) {
   const parsed = createReviewSchema.safeParse(input);

   if (!parsed.success) {
      const messages = parsed.error.errors[0].message ?? "Validation failed";
      throw ApiError.badRequest(messages);
   }

   const { userName, text, stars, itemId } = parsed.data;

   if (!userName || !userName.trim().length) {
      throw ApiError.badRequest("Username is not found");
   }

   if (!text || !text.trim().length) {
      throw ApiError.badRequest("Write the message");
   }

   if (
      stars === undefined ||
      isNaN(Number(stars)) ||
      stars.toString().length > 1
   ) {
      throw ApiError.badRequest("Give the feadbeak");
   }

   if (!itemId || !itemId.trim().length) {
      throw ApiError.badRequest("Bad Request");
   }

   //Special operators
   if (stars > 4 || stars < 0) {
      // Not the right items length (min 0, 1, 2, 3, 4 max)
      throw ApiError.badRequest("Give the right feadbeak");
   }
   if (userName.trim().length > 30) {
      throw ApiError.badRequest("Username is too long");
   }
   if (text.trim().length > 250) {
      throw ApiError.badRequest("Message is too long");
   }

   const cleanUserName = sanitizeHtml(userName.toString().trim(), {
      allowedTags: [],
      allowedAttributes: {},
   });

   const cleanText = sanitizeHtml(text.toString().trim(), {
      allowedTags: ["b", "i", "em", "strong"],
      allowedAttributes: {},
   });

   const cleanItemId = sanitizeHtml(itemId.toString().trim(), {
      allowedTags: [],
      allowedAttributes: {},
   });

   return {
      userName: cleanUserName,
      text: cleanText,
      stars: Number(stars),
      itemId: cleanItemId,
   };
}
