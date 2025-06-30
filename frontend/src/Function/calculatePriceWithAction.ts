import { PriceShowerProps } from "../Components/PriceShower/PriceShower";

export function calculatePriceWithAction({
   price,
   action = 0,
}: PriceShowerProps): string {
   if (!Boolean(action)) {
      return price.toFixed(2);
   }
   return (price - (price / 100) * action).toFixed(2);
}
