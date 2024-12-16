function OurPartners(): JSX.Element {
   return (
      <div className="mt-6 ">
         <h3 className="font-semibold text-xl">Unsere Partner</h3>
         <div className="flex justify-between h-[100px] px-5 items-center max-w-[1000px] m-auto gap-2">
            <img
               src="/SVG/Partners/Wider.svg"
               alt="Wider"
               className="max-h-full w-[160px]"
            />
            <img
               src="/SVG/Partners/AISearch.svg"
               alt="AI Search"
               className="w-[300px] max-h-full"
            />
            <img
               src="/SVG/Partners/Ultrad.svg"
               alt="Ultrad"
               className="w-[60px] max-h-full"
            />
            <img
               src="/SVG/Partners/Geoda.svg"
               alt="Geoda"
               className="w-[200px] max-h-full"
            />
         </div>
      </div>
   );
}

export default OurPartners;
