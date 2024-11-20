interface OneGoodsListProps {
   name: string
   list: string[]
}

export const OneGoodsList = ({
   name,
   list,
}: OneGoodsListProps): JSX.Element => {
   return (
      <div className="w-full">
         <h2 className="font-semibold text-[21px]">{name}</h2>
         <div className="overflow-x-scroll mt-2">
            <div className="min-w-max w-full flex gap-4">
               {list.map((e) => {
                  return (
                     <div
                        className="h-[220px] w-[20vw] bg-gray-100 rounded-md inline-block"
                        key={e}
                     >
                        {e}
                     </div>
                  )
               })}
            </div>
         </div>
      </div>
   )
}
