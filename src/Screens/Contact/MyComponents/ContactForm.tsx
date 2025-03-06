import { useForm } from "react-hook-form";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import { CustomDialog } from "../../../UI/CustomDialog/CustomDialog";
import { useState } from "react";

interface IContactForm {
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
   const [formData, setFormData] = useState<IContactForm>();

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

         <CustomDialog open={modalOpen} setOpen={setModalOpen}>
            <div className="text-center p-3 pb-4 flex flex-col justify-between items-center overflow-hidden">
               <h2 className="font-semibold text-2xl">Warten auf Antwort</h2>

               <p className="mt-3 break-words break-all text-wrap max-w-full w-full">
                  <span className="capitalize">{formData?.name}</span>, Sie
                  erhalten die Daten per E-Mail{" "}
                  <span className="font-medium">{formData?.email}</span>
               </p>
               <CustomBtn
                  btnText={"Okay"}
                  className="w-2/3 mt-4 bg-primaryPink"
                  onClick={() => setModalOpen(false)}
               />
            </div>
         </CustomDialog>
      </>
   );
};
