import { copyToClipboard } from "../Function/copyToClipboard";
import { showToast } from "../UI/CustomToast/CustomToast";

interface IuseCopyToClipboard {
   ToastContainer: () => JSX.Element | null;
   copyToClipboard: (text: string) => void;
}

export const useCopyToClipboard = (): IuseCopyToClipboard => {
   const { ToastContainer, showThisToast } = showToast;

   return {
      ToastContainer,
      copyToClipboard: (text: string) =>
         copyToClipboard(text, () =>
            showThisToast("In der Zwischenablage gespeichert")
         ),
   };
};
