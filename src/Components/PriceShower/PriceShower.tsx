import { mainCurrency } from "../../DevData/WhatCurrency";
import { calculatePriceWithAction } from "../../Function/calculatePriceWithAction";

export interface PriceShowerProps {
   price: number;
   action?: number;
}

export const PriceShower = ({
   price,
   action,
}: PriceShowerProps): JSX.Element | string => {
   if (action) {
      return (
         <>
            <span className="mr-2 font-semibold text-inherit text-[length:inherit]">
               {calculatePriceWithAction({ price, action })}
               {mainCurrency}
            </span>
            <span className="line-through font-medium opacity-40 text-inherit">
               {price.toFixed(2) + mainCurrency}
            </span>
         </>
      );
   } else {
      return price.toFixed(2) + mainCurrency;
   }
};
