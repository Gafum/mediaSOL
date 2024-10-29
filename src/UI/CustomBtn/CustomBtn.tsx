import { MouseEvent } from "react";

interface ICustomBtnProps {
   onClick: (event: MouseEvent) => void;
   btnText: string;
   className?: string;
}

function CustomBtn({ onClick, btnText, className }: ICustomBtnProps): JSX.Element {
   return (
      <button
         onClick={onClick}
         className={"bg-primaryBlue rounded-md text-white py-2 px-1 transition duration-300 hover:brightness-110 hover:shadow-lg " + (className ? className : "")}
      >
         {btnText}
      </button>
   );
}

export default CustomBtn;