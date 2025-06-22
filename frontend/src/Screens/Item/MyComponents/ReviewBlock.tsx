import { useState } from "react";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import {
   IReviewFormProps,
   ReviewForm,
} from "../../../Components/ReviewForm/ReviewForm";

export const ReviewBlock = ({ itemId }: IReviewFormProps): JSX.Element => {
   const [writeComent, setWriteComent] = useState<boolean>(false);

   return (
      <>
         {/* Toogle Btn */}
         <CustomBtn
            btnText={writeComent ? "Formular schließen" : "Bewertung schreiben"}
            onClick={() => setWriteComent((prev) => !prev)}
            className="px-4 md:w-56 w-full bg-primaryDarkGrey"
         />
         {writeComent ? (
            <ReviewForm
               itemId={itemId}
               submitCallback={() => setWriteComent(false)}
            />
         ) : (
            ""
         )}
      </>
   );
};
