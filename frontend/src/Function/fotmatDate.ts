export function formatDate(value: string | Date | null | undefined): string {
   if (!value) return "";
   const date = new Date(value);
   return isNaN(date.getTime()) ? String(value) : date.toLocaleString("de-DE");
}
