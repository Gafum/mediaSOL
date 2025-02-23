import { create } from "zustand";

type TypeCartList = { [key: string]: number };

interface ICartStore {
   cartList: TypeCartList;
   toggleCartList: (productId: string) => void;
   increaseItemAmount: (productId: string) => void;
   decreaseItemAmount: (productId: string) => void;
   clearFavoritesList: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
   cartList: { mainId: 1, "123": 23, "789": 21 },
   toggleCartList: (productId: string) => {
      return set((state) => {
         let localCartList: TypeCartList = JSON.parse(
            JSON.stringify(state.cartList)
         );
         if (localCartList[productId]) {
            delete localCartList[productId];
         } else {
            localCartList[productId] = 1;
         }

         return { cartList: { ...localCartList } };
      });
   },
   increaseItemAmount: (productId: string) => {
      return set((state) => {
         return actionWithItem(state, productId, true);
      });
   },
   decreaseItemAmount: (productId: string) => {
      return set((state) => {
         return actionWithItem(state, productId, false);
      });
   },
   clearFavoritesList: () => set({ cartList: {} }),
}));

function actionWithItem(
   state: ICartStore,
   productId: string,
   increase: boolean
) {
   let localCartList: TypeCartList = JSON.parse(JSON.stringify(state.cartList));
   if (localCartList[productId]) {
      if (increase) {
         localCartList[productId]++;
      } else {
         localCartList[productId]--;
         if (localCartList[productId] == 0) {
            delete localCartList[productId];
         }
      }
   }

   return {
      cartList: { ...localCartList },
   };
}
