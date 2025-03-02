import { ButtonHTMLAttributes } from "react";
import { twMerge } from "tailwind-merge";

interface ICustomBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   btnText?: string | JSX.Element;
   bgColor?: "primaryBlue" | "PrimaryPink" | "white" | string;
   color?: "primaryBlue" | "primaryPink" | "white" | string;
}

export const CustomBtn = ({
   onClick,
   btnText,
   className,
   bgColor = "primaryBlue",
   color = "white",
}: ICustomBtnProps): JSX.Element => {
   return (
      <button
         onClick={onClick}
         className={twMerge(
            `bg-${bgColor} rounded-md py-2 px-1 transition duration-300 hover:brightness-110 hover:shadow-lg ${"text-" + color}`,
            className
         )}
      >
         {btnText}
      </button>
   );
};
