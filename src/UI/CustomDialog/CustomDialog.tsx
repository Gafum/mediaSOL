interface ICustomDialogProps {
   open: boolean;
   setOpen:
      | React.Dispatch<React.SetStateAction<boolean>>
      | ((prev: boolean) => void);
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
               ? "fixed top-0 left-0 w-full h-full z-20 bg-[#00000088] backdrop-blur-md"
               : "hidden"
         }
         onClick={() => setOpen(false)}
      >
         <div
            className="bg-white w-[95%] sm500:w-3/4 sm:w-2/3 lg:w-1/3 rounded-md absolute left-1/2 -translate-x-1/2 -translate-y-1/2 top-[45%] sm:top-[41%] shadow-lg shadow-gray-800"
            onClick={(event: React.MouseEvent) => event.stopPropagation()}
         >
            {children}
         </div>
      </div>
   );
};
