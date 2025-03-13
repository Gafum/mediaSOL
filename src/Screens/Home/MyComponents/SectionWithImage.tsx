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
      <section className="w-full block md:grid grid-cols-2 gap-2 pt-7">
         <div className="w-full flex justify-start flex-col gap-5">
            {/* Text Block */}
            <div className="h-[3px] w-1/4 bg-primaryBlue rounded-[3px] mb-7" />

            <h2 className="font-semibold text-5xl">{headline}</h2>

            <p className="text-gray-500 font-medium">{description}</p>

            <CustomBtn
               onClick={onClick}
               btnText={btnText}
               className="w-2/5 mt-5 min-w-60"
            />
         </div>

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
