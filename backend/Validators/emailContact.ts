import z from "zod";
import sanitizeHtml from "sanitize-html";
import { ApiError } from "../error/ApiError";

const contactSchema = z.object({
   name: z.string().trim().min(1, { message: "Name is required" }).max(100),
   email: z
      .string({ message: "Email is required" })
      .trim()
      .email({ message: "Give the real email" }),
   message: z
      .string({ message: "Write the message" })
      .trim()
      .min(1)
      .max(1000, { message: "Message is too long" }),
});

export function validateAndSanitizeContact(input: unknown): IEmailContact {
   const parsed = contactSchema.safeParse(input);

   if (!parsed.success) {
      const messages = parsed.error.errors[0].message ?? "Validation failed";
      throw ApiError.badRequest(messages);
   }

   const { name, email, message } = parsed.data;

   return {
      name: sanitizeHtml(name, { allowedTags: [], allowedAttributes: {} }),
      email: email.trim(),
      message: sanitizeHtml(message, {
         allowedTags: [],
         allowedAttributes: {},
      }),
   };
}

export interface IEmailContact {
   name: string;
   email: string;
   message: string;
}
