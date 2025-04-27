const partnersList = ["Wider", "AISearch", "Ultrad", "Geoda"];

export const OurPartners = (): JSX.Element => {
   return (
      <div className="grid gap-3 sm:gap-5 grid-cols-1 w-full m-auto sm500:grid-cols-2 sm500:max-w-[1200px] md:grid-cols-4 md:h-[100px] md:gap-2 ">
         {partnersList.map((elem) => (
            <div
               key={elem}
               className="h-full w-full flex justify-center items-center shadow-sm sm500:shadow-none rounded-md bg-primaryLightGrey p-3 sm300:px-7 sm500:p-0 sm500:bg-transparent"
            >
               <img
                  src={
                     import.meta.env.VITE_BASE_URL + "/SVG/Partners/" + elem + ".svg"
                  }
                  alt={elem}
                  className="max-h-[100px] block"
                  style={{
                     maxWidth: elem == "AISearch" ? "95%" : "min(75%, 210px)",
                  }}
               />
            </div>
         ))}
      </div>
   );
};
