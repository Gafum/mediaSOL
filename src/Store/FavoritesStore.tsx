import { create } from "zustand";
import { toggleListElement } from "../Function/toggleListElemnt";
import { persist } from "zustand/middleware";

interface IFavoriteStore {
   favoritesList: string[];
   toggleFavoritesElement: (productId: string) => void;
   clearFavoritesList: () => void;
}

export const useFavoritesStore = create<IFavoriteStore>()(
   persist(
      (set, get) => ({
         favoritesList: [],
         toggleFavoritesElement: (productId: string) => {
            return set(() => {
               return {
                  favoritesList: toggleListElement(
                     get().favoritesList,
                     productId
                  ),
               };
            });
         },
         clearFavoritesList: () => set({ favoritesList: [] }),
      }),
      {
         name: "FavoriteStore",
      }
   )
);
