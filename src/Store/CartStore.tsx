import { create } from "zustand";
import { toggleListElement } from "../Function/toggleListElemnt";

interface ICartStore {
   cartList: string[];
   toggleCartList: (productId: string) => void;
   clearFavoritesList: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
   cartList: [],
   toggleCartList: (productId: string) => {
      return set((state) => ({
         cartList: toggleListElement(state.cartList, productId),
      }));
   },
   clearFavoritesList: () => set({ cartList: [] }),
}));
