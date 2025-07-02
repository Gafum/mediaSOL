import { sendContact } from "./Contact/sendContact";
import { getContactForms } from "./Contact/getContactForms";

export class EmailService {
   static sendContact: typeof sendContact = sendContact;
   static getContactForms: typeof getContactForms = getContactForms;
}
