import { create } from "zustand";
import { persist } from "zustand/middleware";

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

export const useCartStore = create<ICartStore>()(
   persist(
      (set, get) => ({
         cartList: {},
         toggleCartList: (productId: string) => {
            return set(() => {
               let localCartList: TypeCartList = JSON.parse(
                  JSON.stringify(get().cartList)
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
            return set(() => {
               return actionWithItem(get(), productId, true);
            });
         },
         decreaseItemAmount: (productId: string) => {
            return set(() => {
               return actionWithItem(get(), productId, false);
            });
         },
         removeItem: (productId) => {
            return set(() => {
               let localCartList: TypeCartList = JSON.parse(
                  JSON.stringify(get().cartList)
               );
               if (localCartList[productId]) {
                  delete localCartList[productId];
               }
               return { cartList: { ...localCartList } };
            });
         },
         clearCartList: () => set({ cartList: {} }),
      }),
      {
         name: "CartStore",
      }
   )
);

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
