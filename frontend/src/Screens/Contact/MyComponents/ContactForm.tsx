import { useForm } from "react-hook-form";
import { CustomBtn } from "../../../UI/CustomBtn/CustomBtn";
import {
   StandartDialog,
   useStandartDialog,
} from "../../../UI/CustomDialog/Standart/StandartDialog";
import { useContact } from "../../../Hooks/Query/Email/useContact";

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

   const { modalData, setModalData } = useStandartDialog();
   const { sendContact, isPending } = useContact();

   const onSubmit = async (formData: IContactForm) => {
      sendContact(formData, {
         onSettled(data, error) {
            console.log(data);
            if (Boolean(error)) {
               setModalData({
                  isOpen: true,
                  content: (
                     <p>
                        Entschuldigung, {formData.name}! Leider ist beim Senden
                        der E-Mail ein Fehler aufgetreten.
                     </p>
                  ),
                  headlineText: "Fehler!",
                  isAlert: true,
               });
            } else {
               setModalData({
                  isOpen: true,
                  content: (
                     <>
                        <span className="capitalize">{formData.name}</span>, Sie
                        werden die Daten per E-Mail{" "}
                        <span className="font-medium">{formData.email}</span>{" "}
                        erhalten
                     </>
                  ),
                  headlineText: "Warten auf Antwort",
                  isAlert: true,
               });
            }
            reset();
         },
      });
   };

   return (
      <>
         <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-1"
         >
            <h2 className="font-semibold text-base text-center lg:text-left md:text-xl">
               Kontakt-Formular
            </h2>

            {/* Name */}
            <div className="inputes lg:mt-7">
               <input
                  required={true}
                  type="text"
                  maxLength={40}
                  {...register("name", { required: "Name ist erforderlich" })}
                  className={errors.name && "incorrect"}
               />
               <label className="block font-medium text-base">Ihr Name</label>
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
               disabled={isSubmitting || isPending}
               className="w-full mt-2"
               btnText={
                  isSubmitting || isPending
                     ? "Wird gesendet..."
                     : "Nachricht senden"
               }
            ></CustomBtn>
         </form>

         <StandartDialog modalData={modalData} setModalData={setModalData} />
      </>
   );
};
