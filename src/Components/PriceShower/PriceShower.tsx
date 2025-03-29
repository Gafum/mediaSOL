import { twMerge } from "tailwind-merge";
import { mainCurrency } from "../../DevData/WhatCurrency";
import { calculatePriceWithAction } from "../../Function/calculatePriceWithAction";

export interface PriceShowerProps {
   price: number;
   action?: number;
   realPriceClassName?: string;
   wbrClasses?: string;
}

export const PriceShower = ({
   price,
   action,
   realPriceClassName,
   wbrClasses,
}: PriceShowerProps): JSX.Element | string => {
   if (action) {
      return (
         <>
            <span className="font-semibold text-inherit text-[length:inherit] whitespace-nowrap">
               {calculatePriceWithAction({ price, action })}
               {mainCurrency}
            </span>

            <wbr className={wbrClasses} />

            <span
               className={twMerge(
                  "line-through font-medium opacity-40 text-inherit whitespace-nowrap",
                  realPriceClassName
               )}
            >
               {price.toFixed(2) + mainCurrency}
            </span>
         </>
      );
   } else {
      return (
         <span className="font-semibold text-inherit text-[length:inherit] whitespace-nowrap">
            {price.toFixed(2) + mainCurrency}
         </span>
      );
   }
};
