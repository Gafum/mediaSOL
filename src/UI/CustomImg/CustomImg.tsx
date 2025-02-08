import { HTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";
import { IuseCustomImgData } from "./useCustomImg";

interface ICustomImgProps
   extends HTMLAttributes<HTMLImageElement>,
      IuseCustomImgData {
   imgSrc: string | undefined;
   NotFoundComponent?: JSX.Element;
}

export const CustomImg = ({
   imgSrc = "",
   className = "",
   setImgState,
   imgState,
   NotFoundComponent,
}: ICustomImgProps): JSX.Element => {
   if (imgState.isError || !imgSrc) {
      if (NotFoundComponent) {
         return (
            <div
               className={twMerge(
                  "bg-cover bg-no-repeat bg-center grid place-items-center",
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
      <div
         className={twMerge("bg-cover bg-no-repeat bg-center", className)}
         style={{ backgroundImage: `url(${imgSrc})` }}
      >
         <img
            src={imgSrc}
            onError={() => {
               setImgState(() => {
                  return { isLoading: false, isError: true };
               });
            }}
            style={{ display: "none" }}
            alt=""
         />
      </div>
   );
};
