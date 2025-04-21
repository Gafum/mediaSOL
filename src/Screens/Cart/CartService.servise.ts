import { sortOptions, sortOptionsKey } from "./CartData";

export class CartService {
   static getSelectedStore(): string {
      const cartSelectedSort: string | null =
         localStorage.getItem(sortOptionsKey);

      if (
         !cartSelectedSort ||
         !sortOptions.some(({ id }) => id == cartSelectedSort)
      ) {
         localStorage.setItem(sortOptionsKey, sortOptions[0].id);
         return sortOptions[0].id;
      }

      return cartSelectedSort;
   }

   static saveSelectedSrore(selectedSort: string): void {
      if (selectedSort || sortOptions.some(({ id }) => id == selectedSort)) {
         localStorage.setItem(sortOptionsKey, selectedSort);
      }
   }
}
