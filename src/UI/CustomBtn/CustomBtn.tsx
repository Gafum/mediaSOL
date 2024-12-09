import { ButtonHTMLAttributes } from "react";

interface ICustomBtnProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   btnText?: string;
   bgColor?: "primaryBlue" | "white" | string;
   color?: "primaryBlue" | "white" | string;
}

function CustomBtn({
   onClick,
   btnText,
   className,
   children,
   bgColor = "primaryBlue",
   color = "white",
}: ICustomBtnProps): JSX.Element {
   return (
      <button
         onClick={onClick}
         className={
            `bg-${bgColor} rounded-md text-${color} py-2 px-1 transition duration-300 hover:brightness-110 hover:shadow-lg ` +
            (className ? className : "")
         }
      >
         {btnText ? btnText : children}
      </button>
   );
}

export default CustomBtn;
