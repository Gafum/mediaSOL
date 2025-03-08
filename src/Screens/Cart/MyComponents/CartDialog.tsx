import { useCartStore } from "../../../Store/CartStore";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { CustomDialog } from "../../../UI/CustomDialog/CustomDialog";
import { IModalState } from "../Cart";

interface ICartDialog {
   modalData: IModalState;
   setModalData: React.Dispatch<React.SetStateAction<IModalState>>;
}

export const CartDialog = ({
   modalData,
   setModalData,
}: ICartDialog): JSX.Element => {
   const clearCartList = useCartStore((state) => state.clearCartList);
   function closeModal() {
      setModalData({
         isOpen: false,
         headlineText: "",
         onOkeyClicK: undefined,
      });
   }

   return (
      <CustomDialog
         open={modalData.isOpen}
         setOpen={(newState: boolean) => {
            setModalData((prev) => {
               return { ...prev, isOpen: newState };
            });
         }}
      >
         <div className="p-5 min-h-44 flex flex-col justify-between items-center text-center gap-5">
            <h1 className="text-2xl font-medium">Sind Sie sicher?</h1>
            <p className="text-lg">{modalData.headlineText}</p>
            <div className="grid grid-cols-2 mt-5 gap-2 w-full">
               <CustomBtn
                  btnText={"Nein"}
                  className="bg-primaryPink w-full"
                  onClick={closeModal}
               />
               <CustomBtn
                  className="w-full"
                  btnText={"Ja"}
                  onClick={() => {
                     closeModal();
                     (modalData.onOkeyClicK
                        ? modalData.onOkeyClicK
                        : clearCartList)();
                  }}
               />
            </div>
         </div>
      </CustomDialog>
   );
};
