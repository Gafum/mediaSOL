import { useForm } from "react-hook-form";
import { IReviews } from "../../MainTypes/Reviews";
import { useCreateOne } from "../../Hooks/Query/Reviews/useCreateOne";
import { IReviewFormProps } from "./ReviewForm";

interface IReviewFormData extends Omit<IReviews, "id" | "itemId"> {}

export const useReviewForm = ({ itemId, submitCallback }: IReviewFormProps) => {
   // Backend Requests ===>
   const { createReview, isPending } = useCreateOne(itemId);

   // Form =====>
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
      control,
      setError,
   } = useForm<IReviewFormData>({
      defaultValues: {
         userName: "",
         text: "",
         stars: 4,
      },
   });

   // Form Submit ====>
   async function onSubmit(reviewData: IReviewFormData) {
      // Checker =====>
      if (!itemId) {
         console.log("itemId is not found");

         setError("stars", {
            type: "required",
            message: "Request not found",
         });
         return;
      }

      const trimmedData: IReviewFormData = {
         ...reviewData,
         userName: reviewData.userName.trim(),
         text: reviewData.text.trim(),
      };

      if (!trimmedData.userName) {
         console.log("Username is required");
         setError("userName", {
            type: "required",
            message: "Username is required",
         });
         return;
      }

      if (!trimmedData.text) {
         console.log("Message is required");
         setError("text", {
            type: "required",
            message: "Message is required",
         });
         return;
      }
      try {
         // Backend Request =====>
         createReview(
            { ...trimmedData, itemId: itemId },
            {
               onError(data) {
                  console.log(data);
               },
               onSettled(data) {
                  if (data.id) {
                     reset();
                     if (submitCallback) {
                        submitCallback();
                     }
                     return;
                  }
                  if ("message" in data) {
                     setError("stars", {
                        type: "required",
                        message: data.message,
                     });
                  }
                  console.log(data);
               },
            }
         );
      } catch (err) {
         console.log(err);
      }
   }

   return {
      onSubmit,
      register,
      handleSubmit,
      errors,
      isSubmitting,
      control,
      isPending,
   };
};
