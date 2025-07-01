import { useMutation } from "@tanstack/react-query";
import { EmailService } from "../../../Services/Email/index";
import { IContactForm } from "../../../Screens/Contact/MyComponents/ContactForm";

export function useContact() {
   const mutation = useMutation({
      mutationKey: ["contact email"],
      mutationFn: (data: IContactForm) => EmailService.sendContact(data),
   });

   return {
      sendContact: mutation.mutate,
      
      sendContactAsync: mutation.mutateAsync,
      ...mutation,
   };
}
