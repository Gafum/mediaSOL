import { create } from "zustand";

type TypeCartList = { [key: string]: number };

interface ICartStore {
   cartList: TypeCartList;
   toggleCartList: (productId: string) => void;
   increaseItemAmount: (productId: string) => void;
   decreaseItemAmount: (productId: string) => void;
   removeItem: (productId: string) => void;
   clearCartList: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
   cartList: { mainId: 1, "123": 23, "789": 999 },
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
         if (localCartList[productId] < 999) {
            localCartList[productId]++;
         }
      } else {
         if (localCartList[productId] > 1) {
            localCartList[productId]--;
         }
      }
   }

   return {
      cartList: { ...localCartList },
   };
}
