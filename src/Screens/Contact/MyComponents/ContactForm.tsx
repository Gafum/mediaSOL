import { useForm } from "react-hook-form";
import CustomInput from "../../../UI/CustomInput/CustomInput";

interface IContactForm {
   name: string;
   email: string;
   message: string;
}

export const ContactForm = () => {
   const {
      register,
      handleSubmit,
      formState: { isSubmitting },
      reset,
   } = useForm<IContactForm>();

   const onSubmit = async (data: IContactForm) => {
      console.log("Form Data:", data);
      reset();
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
         <CustomInput
            type="text"
            {...register("name", { required: "Name ist erforderlich" })}
            placeholder="Name"
         />

         <CustomInput
            type="email"
            {...register("email", {
               required: "E-Mail ist erforderlich",
               pattern: {
                  value: /^\S+@\S+\.\S+$/,
                  message: "Geben Sie eine gültige E-Mail-Adresse ein",
               },
            })}
            placeholder="Email"
         />

         <CustomInput
            {...register("message", {
               required: "Nachricht ist erforderlich",
            })}
            rows={12}
            placeholder="Ihre Nachricht..."
         />

         <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primaryBlue text-white py-2 rounded-lg hover:bg-blue-700 transition disabled:opacity-50"
         >
            {isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
         </button>
      </form>
   );
};
