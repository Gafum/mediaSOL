import { MouseEvent } from "react";

interface ISectionProps {
   headline: string;
   description: string;
   btnText: string;
   imgSrc: string;
   onClick: (event: MouseEvent) => void;
}

function Section({ headline, description, btnText, imgSrc, onClick }: ISectionProps): JSX.Element {
   return (
      <section className="w-full flex justify-between items-start gap-2 pt-7">
         <div className="w-1/2 flex justify-start flex-col gap-5">
            {/* Text Block */}
            <div className="h-[3px] w-1/4 bg-primaryBlue rounded-[3px] mb-7" />

            <h2 className="font-semibold text-5xl">
               {headline}
            </h2>

            <p className="text-gray-500 font-medium">
               {description}
            </p>

            <button
               onClick={onClick}
               className="bg-primaryBlue w-2/5 rounded-md text-white py-2 px-1 mt-5 transition duration-300 hover:brightness-110 hover:shadow-lg"
            >
               {btnText}
            </button>
         </div>

         <img className="max-w-1/2 w-[400px]"
            src={imgSrc} alt="comp" />
      </section>
   );
}

export default Section;