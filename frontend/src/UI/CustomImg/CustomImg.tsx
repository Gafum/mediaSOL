import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ICustomImgProps extends HTMLAttributes<HTMLImageElement> {
   imgSrc: string | undefined;
   NotFoundComponent?: JSX.Element;
}

interface IImgState {
   isError: boolean;
   bgImageSrc: string;
}

export const CustomImg = ({
   imgSrc = "",
   className = "",
   NotFoundComponent,
}: ICustomImgProps): JSX.Element => {
   const [imgState, setImgState] = useState<IImgState>({
      isError: false,
      bgImageSrc: "",
   });

   if (imgState.isError || !imgSrc) {
      if (NotFoundComponent) {
         return (
            <div
               className={twMerge(
                  "bg-cover bg-no-repeat bg-center grid place-items-center aspect-square",
                  className
               )}
            >
               {NotFoundComponent}
            </div>
         );
      }
      return <></>;
   }

   return (
      //use CustomImg class in css to check if it apper on the screen
      <div
         className={twMerge(
            "bg-cover bg-no-repeat bg-center CustomImg",
            className
         )}
         style={{ backgroundImage: `url(${imgState.bgImageSrc})` }}
      >
         <img
            src={imgSrc}
            onError={() =>
               setImgState((state) => {
                  return { ...state, isError: true };
               })
            }
            onLoad={() =>
               setImgState((state) => {
                  return {
                     ...state,
                     bgImageSrc: imgSrc.toString(),
                  };
               })
            }
            loading="lazy"
            style={{ opacity: "0", visibility: "hidden" }}
            alt=""
         />
      </div>
   );
};
