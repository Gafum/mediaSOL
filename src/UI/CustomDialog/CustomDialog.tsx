interface ICustomDialogProps {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   children: React.ReactNode;
}

export const CustomDialog = ({
   open,
   setOpen,
   children,
}: ICustomDialogProps): JSX.Element => {
   return (
      <div
         className={
            open
               ? "fixed top-0 left-0 w-full h-full z-20 flex justify-center items-center bg-[#00000088]"
               : "hidden"
         }
         onClick={() => setOpen(false)}
      >
         <div
            className="bg-white w-1/3 rounded-md relative top-[-100px] shadow-lg shadow-gray-800"
            onClick={(event: React.MouseEvent) => event.stopPropagation()}
         >
            {children}
         </div>
      </div>
   );
};
