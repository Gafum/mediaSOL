import { Controller, useForm } from "react-hook-form";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { IReviews } from "../../../MainTypes/Reviews";
import StarRating from "./StarRating";
import { useState } from "react";

interface IReviewFormData extends Omit<IReviews, "id"> {}

export const ReviewForm = (): JSX.Element => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
      control,
   } = useForm<IReviewFormData>();

   const [writeComent, setWriteComent] = useState<boolean>(false);

   async function onSubmit(data: IReviewFormData) {
      console.log(data);
      reset();
      setWriteComent(false);
   }

   return (
      <>
         <CustomBtn
            btnText={writeComent ? "Formular schließen" : "Bewertung schreiben"}
            onClick={() => setWriteComent((prev) => !prev)}
            className="px-4 md:w-56 w-full bg-primaryDarkGrey"
         />

         {writeComent ? (
            <form onSubmit={handleSubmit(onSubmit)}>
               <div className="inputes">
                  <input
                     type="text"
                     required={true}
                     id="name"
                     {...register("userName", {
                        required: "Schreiben Sie Ihre Name",
                     })}
                     autoComplete="off"
                     maxLength={50}
                  />
                  <label htmlFor="name">Name</label>
                  {errors.userName && (
                     <p className="text-red-500 text-sm pl-1">
                        {errors.userName.message}
                     </p>
                  )}
               </div>

               <div className="inputes">
                  <textarea
                     required={true}
                     rows={5}
                     maxLength={250}
                     {...register("text", { required: "Geben Sie den Text" })}
                  ></textarea>
                  <label htmlFor="text">Text</label>
               </div>

               <Controller
                  name="stars"
                  control={control}
                  render={({ field }) => (
                     <StarRating
                        value={field.value}
                        onChange={field.onChange}
                     />
                  )}
               />

               <CustomBtn
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full mt-2"
                  btnText={
                     isSubmitting ? "Wird gesendet..." : "Nachricht senden"
                  }
               ></CustomBtn>
            </form>
         ) : (
            ""
         )}
      </>
   );
};
