import { useState } from "react";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { CustomDialog } from "../../../UI/CustomDialog/CustomDialog";
import { twMerge } from "tailwind-merge";

// Types
export interface IModalState {
   isOpen: boolean;
   onOkeyClick?: () => void;
   content: React.ReactNode | string;
   isAlert?: boolean;
   headlineText?: string;
}

interface IStandartDialogProps {
   modalData: IModalState;
   setModalData: React.Dispatch<React.SetStateAction<IModalState>>;
}

// Constanten
const defaultDialogData = {
   isOpen: false,
   onOkeyClick: () => {},
   content: "",
   headlineText: "",
   isAlert: false,
};

// Hooks
export const useStandartDialog = (): IStandartDialogProps => {
   const [modalData, setModalData] = useState<IModalState>(defaultDialogData);

   return { modalData, setModalData };
};

// Components
export const StandartDialog = ({
   modalData,
   setModalData,
}: IStandartDialogProps): JSX.Element => {
   const { isOpen, headlineText, content, isAlert, onOkeyClick } = modalData;

   function closeModal() {
      setModalData(defaultDialogData);
   }

   return (
      <CustomDialog
         open={isOpen}
         setOpen={(newState: boolean) => {
            setModalData((prev) => {
               return { ...prev, isOpen: newState };
            });
         }}
      >
         <div className="p-3 sm:p-5 min-h-24 sm:min-h-32 md:min-h-44 flex flex-col justify-between items-center text-center gap-3 md:gap-5">
            <h1 className="text-lg sm:text-2xl font-medium">
               {headlineText ? headlineText : "Sind Sie sicher?"}
            </h1>
            <p className="w-full text-sm sm:text-lg">{content}</p>

            <div
               className={twMerge(
                  "grid  mt-3 sm500:mt-5 gap-2 w-full",
                  isAlert ? "grid-cols-1" : "grid-cols-2"
               )}
            >
               <CustomBtn
                  btnText={isAlert ? "Okay" : "Nein"}
                  className="bg-primaryPink w-full"
                  onClick={closeModal}
               />
               {isAlert ? (
                  ""
               ) : (
                  <CustomBtn
                     className="w-full"
                     btnText={"Ja"}
                     onClick={() => {
                        closeModal();
                        if (onOkeyClick) {
                           onOkeyClick();
                        }
                     }}
                  />
               )}
            </div>
         </div>
      </CustomDialog>
   );
};
