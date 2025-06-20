import { useForm } from "react-hook-form";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { IReviews } from "../../../MainTypes/Reviews";

interface IReviewFormData extends Omit<IReviews, "id"> {}

export const ReviewForm = (): JSX.Element => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<IReviewFormData>();

   async function onSubmit(data: IReviewFormData) {
      console.log(data);
      reset();
   }

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
               {...register("text", { required: "Geben Sie den Text" })}
            ></textarea>
            <label htmlFor="text">Text</label>
         </div>
         <CustomBtn
            type="submit"
            disabled={isSubmitting}
            className="w-full mt-2"
            btnText={isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
         ></CustomBtn>
      </form>
   );
};
