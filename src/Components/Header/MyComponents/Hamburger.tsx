import { useState } from "react";
import { twMerge } from "tailwind-merge";

export interface HamburgerProps {
   onClick: () => void;

   isInitiallyOpen?: boolean;
   className?: string;
}

export const Hamburger = (props: HamburgerProps) => {
   const { onClick, isInitiallyOpen, className } = props;
   const [isOpen, setIsOpen] = useState<boolean>(isInitiallyOpen ?? false);

   const handleClick = () => {
      setIsOpen((prev) => !prev);
      onClick();
   };

   return (
      <button
         onClick={handleClick}
         type="button"
         className={twMerge(
            "w-4 sm500:w-6 h-2.5 sm500:h-3 my-auto relative cursor-pointer",
            className
         )}
      >
         <div
            className={twMerge(
               "bg-black block w-full h-[3px] sm500:h-[3.7px] rounded transition-all absolute -translate-y-1/2 ",
               isOpen ? "top-1/2 rotate-45" : "top-0"
            )}
         />
         <div
            className={twMerge(
               "bg-black block w-full h-[3px] sm500:h-[3.7px] rounded transition-all translate-x-0",
               isOpen ? "bg-transparent scale-x-0" : "scale-x-100"
            )}
         />
         <div
            className={twMerge(
               "bg-black block w-full h-[3px] sm500:h-[3.7px] rounded-full transition-all absolute -translate-y-1/2 ",
               isOpen ? "top-1/2 -rotate-45" : "top-full"
            )}
         />
      </button>
   );
};
