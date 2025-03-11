import { showToast } from "../UI/CustomToast/CustomToast";

interface IuseCopyToClipboard {
   ToastContainer: () => JSX.Element | null;
   copyToClipboard: (text: string) => void;
}

// I must set it in other folder

export const useCopyToClipboard = (): IuseCopyToClipboard => {
   const { ToastContainer, showThisToast } = showToast;

   function copyToClipboard(text: string) {
      navigator.permissions
         .query({ name: "clipboard-write" as PermissionName })
         .then((result) => {
            if (result.state === "granted" || result.state === "prompt") {
               navigator.clipboard.writeText(text).then(
                  () => {
                     showThisToast("In der Zwischenablage gespeichert");
                  },
                  () => {
                     console.log("Can not write to clipboard");
                  }
               );
            }
         });
   }
   return { ToastContainer, copyToClipboard };
};
