import { create } from "zustand";
import { toggleListElement } from "../Function/toggleListElemnt";

interface IFavoriteStore {
   favoritesList: string[];
   toggleFavoritesElement: (productId: string) => void;
   clearFavoritesList: () => void;
}

export const useFavoritesStore = create<IFavoriteStore>((set) => ({
   favoritesList: [],
   toggleFavoritesElement: (productId: string) => {
      return set((state) => ({
         favoritesList: toggleListElement(state.favoritesList, productId),
      }));
   },
   clearFavoritesList: () => set({ favoritesList: [] }),
}));
