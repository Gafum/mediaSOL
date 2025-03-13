export const OurPartners = (): JSX.Element => {
   return (
      <div className="grid gap-5 grid-cols-1 max-w-[250px] items-center justify-items-center px-5 w-full m-auto sm500:grid-cols-2 sm500:max-w-[1200px] md:grid-cols-4 md:h-[100px] md:gap-2 ">
         <img
            src={import.meta.env.BASE_URL + "/SVG/Partners/Wider.svg"}
            alt="Wider"
            className="max-h-full w-[160px]"
         />
         <img
            src={import.meta.env.BASE_URL + "/SVG/Partners/AISearch.svg"}
            alt="AI Search"
            className="w-[300px] max-h-full"
         />
         <img
            src={import.meta.env.BASE_URL + "/SVG/Partners/Ultrad.svg"}
            alt="Ultrad"
            className="w-[60px] max-h-full"
         />
         <img
            src={import.meta.env.BASE_URL + "/SVG/Partners/Geoda.svg"}
            alt="Geoda"
            className="w-[200px] max-h-full"
         />
      </div>
   );
};
