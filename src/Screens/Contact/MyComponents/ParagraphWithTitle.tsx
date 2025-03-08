import { showToast } from "../../../UI/CustomToast/CustomToast";
import { IcontactDataProps } from "../ContactData";

export const ParagraphWithTitle = ({
   icon,
   text,
}: Omit<IcontactDataProps, "title">): JSX.Element => {
   const { ToastContainer, showThisToast } = showToast;

   function writeToClipboard() {
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

   return (
      <>
         <div
            className="flex flex-col items-center text-center w-full max-w-[150px] hover:opacity-75 transition-opacity duration-300"
            onClick={writeToClipboard}
         >
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primaryBlue">
               {icon}
            </div>
            <span className="mt-4 text-black text-sm">{text}</span>
         </div>
         <ToastContainer />
      </>
   );
};
