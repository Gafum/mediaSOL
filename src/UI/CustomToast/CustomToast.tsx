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
      <div className="fixed bottom-4 right-4 bg-primaryDarkGrey text-white text-lg px-8 py-3 rounded-lg shadow-lg animate-slide-in">
         {message}
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
