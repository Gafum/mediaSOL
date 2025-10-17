import z from "zod";

export const createTypeSchema = z.object({
   name: z
      .string({ message: "Name is required" })
      .trim()
      .min(1, "Name cannot be empty")
      .max(150, "Name is too long"),
});
