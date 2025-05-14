import { IGadget } from "../Data/items";

export function filterItemsBySearch(
   items: IGadget[],
   query: string
): IGadget[] {
   const lowerQuery = query.toLowerCase();

   items.filter((element) => {
      return (
         element.name.toLowerCase().includes(lowerQuery) ||
         element.description.toLowerCase().includes(lowerQuery) ||
         element.price.toString().includes(lowerQuery)
      );
   });

   return items.filter((element) => {
      return (
         element.name.toLowerCase().includes(lowerQuery) ||
         element.description.toLowerCase().includes(lowerQuery) ||
         element.price.toString().includes(lowerQuery)
      );
   });
}
