import { useState, useEffect } from "react";

interface ToastProps {
   message: string;
   onClose: () => void;
}

const Toast = ({ message, onClose }: ToastProps) => {
   useEffect(() => {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
   }, [onClose]);

   return (
      <div className="fixed container pb-0 bottom-4 sm:bottom-0 right-1/2 translate-x-1/2 w-full">
         <div className="sm:fixed right-4 bottom-4 text-center w-full sm:w-auto bg-primaryDarkGrey text-white text-lg px-3 sm:px-8 py-3 rounded-lg shadow-lg animate-slide-in">
            {message}
         </div>
      </div>
   );
};

export const showToast = (() => {
   let setToast: (message: string) => void;

   const ToastContainer = () => {
      const [toast, setToastState] = useState<string | null>(null);
      setToast = setToastState;

      return toast ? (
         <Toast message={toast} onClose={() => setToast("")} />
      ) : null;
   };

   return {
      ToastContainer,
      showThisToast: (message: string) => setToast(message),
   };
})();
