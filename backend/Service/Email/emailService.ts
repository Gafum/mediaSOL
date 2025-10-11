import { sendContact } from "./Contact/sendContact";
import { getContactForms } from "./DbEmail/getContactForms";
import { deleteContactForm } from "./DbEmail/deleteContactForm";

export class EmailService {
   static sendContact: typeof sendContact = sendContact;
   static getContactForms: typeof getContactForms = getContactForms;
   static deleteContactForm: typeof deleteContactForm = deleteContactForm;
}
