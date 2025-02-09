import { HTMLAttributes, useState } from "react";
import { twMerge } from "tailwind-merge";

interface ICustomImgProps extends HTMLAttributes<HTMLImageElement> {
   imgSrc: string | undefined;
   NotFoundComponent?: JSX.Element;
}

interface IImgState {
   isLoading: boolean;
   isError: boolean;
}

export const CustomImg = ({
   imgSrc = "",
   className = "",
   NotFoundComponent,
}: ICustomImgProps): JSX.Element => {
   const [imgState, setImgState] = useState<IImgState>({
      isLoading: false,
      isError: false,
   });

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
      //use CustomImg class in css to check if it apper on the screen
      <div
         className={twMerge(
            "bg-cover bg-no-repeat bg-center CustomImg",
            className
         )}
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
