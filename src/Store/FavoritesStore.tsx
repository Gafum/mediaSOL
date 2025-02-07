import { create } from "zustand";
import { toggleListElement } from "../Function/toggleListElemnt";

interface FavoriteStore {
   favoritesList: string[];
   toggleFavoritesElement: (productId: string) => void;
   clearFavoritesList: () => void;
}

export const useFavoritesStore = create<FavoriteStore>((set) => ({
   favoritesList: [],
   toggleFavoritesElement: (productId: string) => {
      return set((state) => ({
         favoritesList: toggleListElement(state.favoritesList, productId),
      }));
   },
   clearFavoritesList: () => set({ favoritesList: [] }),
}));
