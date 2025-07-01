import axios from "axios";
import { IErrorMessage, logError } from "../../MainTypes/ErrorMessage";
import { IContactForm } from "../../Screens/Contact/MyComponents/ContactForm";

export async function sendContact({
   name,
   email,
   message,
}: IContactForm): Promise<string> {
   try {
      const response = await axios.post<{ message: string } | IErrorMessage>(
         import.meta.env.VITE_BACKEND_URL + "/email/contact",
         JSON.stringify({ name, email, message }),
         {
            method: "POST",
            headers: {
               Accept: "application/json",
               "Content-Type": "application/json",
            },
         }
      );

      const data = response.data;

      if (response.status > 300) {
         logError(data);
      }

      if (Boolean(data.message)) {
         return data.message;
      } else {
         throw new Error("Unexpected response format");
      }
   } catch (error) {
      throw new Error("error");
   }
}
