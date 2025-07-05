import sanitizeHtml from "sanitize-html";

export function sanitizeHtmlInput<T extends object>(
   input: T,
   allowedTags?: string[]
): T {
   const cleaned: any = {};

   for (const key in input) {
      const value = input[key];
      if (typeof value === "string") {
         cleaned[key] = sanitizeHtml(value, {
            allowedTags: allowedTags && [],
            allowedAttributes: {},
         }).trim();
      } else {
         cleaned[key] = value;
      }
   }

   return cleaned;
}
