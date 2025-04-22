import { create } from "zustand";

export type TypeCartList = {
   [key: string]: { amount: number; date: number };
};

interface ICartStore {
   cartList: TypeCartList;
   toggleCartList: (productId: string) => void;
   increaseItemAmount: (productId: string) => void;
   decreaseItemAmount: (productId: string) => void;
   removeItem: (productId: string) => void;
   clearCartList: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
   cartList: {
      mainId: { amount: 999, date: 1 },
      "123": { amount: 24, date: 2 },
      "789": { amount: 1, date: 3 },
   },
   toggleCartList: (productId: string) => {
      return set((state) => {
         let localCartList: TypeCartList = JSON.parse(
            JSON.stringify(state.cartList)
         );
         if (localCartList[productId]) {
            delete localCartList[productId];
         } else {
            localCartList[productId] = {
               amount: 1,
               date: Date.now(),
            };
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
   removeItem: (productId) => {
      return set((state) => {
         let localCartList: TypeCartList = JSON.parse(
            JSON.stringify(state.cartList)
         );
         if (localCartList[productId]) {
            delete localCartList[productId];
         }
         return { cartList: { ...localCartList } };
      });
   },
   clearCartList: () => set({ cartList: {} }),
}));

function actionWithItem(
   state: ICartStore,
   productId: string,
   increase: boolean
) {
   let localCartList: TypeCartList = JSON.parse(JSON.stringify(state.cartList));
   if (localCartList[productId]) {
      if (increase) {
         if (localCartList[productId].amount < 999) {
            localCartList[productId].amount++;
         }
      } else {
         if (localCartList[productId].amount > 1) {
            localCartList[productId].amount--;
         }
      }
   }

   return {
      cartList: { ...localCartList },
   };
}
