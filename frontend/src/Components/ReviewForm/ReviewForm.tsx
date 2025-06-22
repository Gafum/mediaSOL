import { Controller } from "react-hook-form";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { StarRating } from "./StarRating";
import { useReviewForm } from "./useReviewForm";

export interface IReviewFormProps {
   itemId: string | undefined;
   submitCallback?: () => void;
}

export const ReviewForm = ({
   itemId,
   submitCallback,
}: IReviewFormProps): JSX.Element => {
   const {
      onSubmit,
      register,
      handleSubmit,
      errors,
      isSubmitting,
      control,
      isPending,
   } = useReviewForm({ itemId, submitCallback });

   return (
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
               maxLength={30}
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
            {errors.text && (
               <p className="text-red-500 text-sm pl-1">
                  {errors.text.message}
               </p>
            )}
         </div>

         <Controller
            name="stars"
            control={control}
            render={({ field }) => (
               <StarRating value={field.value} onChange={field.onChange} />
            )}
         />

         {errors.stars && (
            <p className="text-red-500 text-base font-bold pl-1">
               {errors.stars.message}!!!
            </p>
         )}

         <CustomBtn
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2"
            btnText={
               isPending
                  ? "Loading..."
                  : isSubmitting
                    ? "Wird gesendet..."
                    : "Nachricht senden"
            }
         ></CustomBtn>
      </form>
   );
};
