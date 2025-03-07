import { useForm } from "react-hook-form";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { useState } from "react";
import { ContactDialog } from "./ContactDialog";

export interface IContactForm {
   name: string;
   email: string;
   message: string;
}

export const ContactForm = () => {
   const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
      reset,
   } = useForm<IContactForm>();

   const [modalOpen, setModalOpen] = useState(false);
   const [formData, setFormData] = useState<IContactForm>({
      name: "",
      email: "",
      message: "",
   });

   const onSubmit = async (data: IContactForm) => {
      setFormData(data);
      setModalOpen(true);
      reset();
   };

   return (
      <>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
         >
            <h2 className="font-semibold text-xl">Kontakt-Formular</h2>

            {/* Name */}
            <div className="inputes mt-7">
               <input
                  required={true}
                  type="text"
                  maxLength={40}
                  {...register("name", { required: "Name ist erforderlich" })}
                  className={errors.name && "incorrect"}
               />
               <label>Ihr Name</label>
               {errors.name && (
                  <p className="text-red-500 text-sm pl-1">
                     {errors.name.message}
                  </p>
               )}
            </div>

            {/* Email */}
            <div className="inputes">
               <input
                  required={true}
                  type="text"
                  maxLength={40}
                  className={errors.email && "incorrect"}
                  {...register("email", {
                     required: "E-Mail ist erforderlich",
                     pattern: {
                        value: /^\S+@\S+\.\S+$/,
                        message: "Geben Sie eine gültige E-Mail-Adresse ein",
                     },
                  })}
               />
               <label className="block font-medium">E-Mail</label>
               {errors.email && (
                  <p className="text-red-500 text-sm pl-1">
                     {errors.email.message}
                  </p>
               )}
            </div>

            {/* Nachricht */}
            <div className="inputes">
               <textarea
                  required={true}
                  rows={5}
                  {...register("message", {
                     required: "Nachricht ist erforderlich",
                  })}
                  className={errors.message && "incorrect"}
               ></textarea>
               <label className="block font-medium">Ihre Nachricht</label>
               {errors.message && (
                  <p className="text-red-500 text-sm pl-1">
                     {errors.message.message}
                  </p>
               )}
            </div>

            <CustomBtn
               type="submit"
               disabled={isSubmitting}
               className="w-full mt-2"
               btnText={isSubmitting ? "Wird gesendet..." : "Nachricht senden"}
            ></CustomBtn>
         </form>
         <ContactDialog
            formData={formData}
            setModalOpen={setModalOpen}
            modalOpen={modalOpen}
         />
      </>
   );
};
