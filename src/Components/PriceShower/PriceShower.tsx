interface PriceShowerProps {
   price: number
   action?: number
}

export const PriceShower = ({
   price,
   action,
}: PriceShowerProps): JSX.Element | string => {
   if (action) {
      return (
         <>
            ${(price - (price / 100) * action).toFixed(2)}
            <span className="line-through ml-2 font-medium opacity-40 text-inherit">
               {"$" + price.toFixed(2).toString()}
            </span>
         </>
      )
   } else {
      return "$" + price.toFixed(2).toString()
   }
}
