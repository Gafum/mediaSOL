import { ButtonHTMLAttributes } from "react";

interface ICustomBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   btnText?: string;
   bgColor?: "primaryBlue" | "PrimaryPink" | "white" | string;
   color?: "primaryBlue" | "primaryPink" | "white" | string;
}

function CustomBtn({
   onClick,
   btnText,
   className,
   bgColor = "primaryBlue",
   color = "white",
}: ICustomBtnProps): JSX.Element {
   return (
      <button
         onClick={onClick}
         className={
            `bg-${bgColor} rounded-md py-2 px-1 transition duration-300 hover:brightness-110 hover:shadow-lg ${"text-" + color} ` +
            (className ? className : "")
         }
      >
         {btnText}
      </button>
   );
}

export default CustomBtn;
