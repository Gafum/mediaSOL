import { MouseEvent } from "react";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";

interface ISectionProps {
   headline: string;
   description: string;
   btnText: string;
   imgSrc: string;
   onClick: (event: MouseEvent) => void;
   eventOnImgClick?: (event: MouseEvent) => void;
}

export const SectionWithImage = ({
   headline,
   description,
   btnText,
   imgSrc,
   onClick,
   eventOnImgClick,
}: ISectionProps): JSX.Element => {
   return (
      <section className="w-full block md:grid grid-cols-2 gap-2 pt-2 sm300:pt-4 sm500:pt-7">
         <div className="w-full flex justify-start flex-col gap-3 sm:gap-5 text-justify sm:text-left">
            {/* Text Block */}
            <div className="h-[3px] w-1/4 bg-primaryBlue rounded-[3px] mb-2 min-w-[90px] sm300:min-w-[140px] md:mb-7" />

            <h2 className="font-semibold text-xl sm300:text-3xl sm:text-5xl text-left">
               {headline}
            </h2>

            <p className="text-gray-500 sm500:font-medium text-xs sm500:text-base">
               {description}
            </p>

            <CustomBtn
               onClick={onClick}
               btnText={btnText}
               className="sm:w-2/5 mt-1 md:mt-5 sm:min-w-60"
            />
         </div>

         {/* Image will disapear on small screen */}
         <img
            onClick={eventOnImgClick}
            className="max-w-[550px] w-full justify-self-end hidden md:block "
            src={imgSrc}
            alt="comp"
            loading="lazy"
         />
      </section>
   );
};
