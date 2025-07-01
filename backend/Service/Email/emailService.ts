import { sendContact } from "./sendContact";

export class EmailService {
   static sendContact: typeof sendContact = sendContact;
}
