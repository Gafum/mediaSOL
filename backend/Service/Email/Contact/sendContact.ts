import { NextFunction, Request, Response } from "express";
import { contactEmail } from "../../../utils/mailer";
import { ApiError } from "../../../error/ApiError";
import { PrismaClient } from "@prisma/client";
import {
   validateAndSanitizeContact,
   IEmailContact,
} from "../../../Validators/emailContact";

const prisma = new PrismaClient();

async function saveContactToDB(data: IEmailContact) {
   try {
      await prisma.contactForm.create({ data });
   } catch (err) {
      console.error("DB error:", err);
      throw ApiError.internal("Could not save contact form");
   }
}

async function sendConfirmationEmail(data: IEmailContact) {
   try {
      const mail = {
         from: `"${data.name}" <${process.env.CONTACT_EMAIL}>`,
         to: data.email,
         subject: "Contact Form Submission",
         html: `
         <p>Hallo, ${data.name}!</p>
         <p>Wir haben Ihr Formular bekommen und werden Ihnen so schnell wie möglich antworten.</p>
         <hr/>
         <p><strong>Ihre Nachricht:</strong></p>
         <blockquote>${data.message}</blockquote>
         <small>Diese Nachricht ist automatisch generiert und Sie müssen nicht darauf antworten.</small>
      `,
      };

      await contactEmail.sendMail(mail);
   } catch (err) {
      console.error("Email send error:", err);
      throw ApiError.internal("Failed to send email");
   }
}

export async function sendContact(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      const cleanData = validateAndSanitizeContact(req.body);

      await saveContactToDB(cleanData);
      await sendConfirmationEmail(cleanData);
      res.status(200).json({ message: "Message Sent" });
   } catch (error) {
      if (error instanceof ApiError) {
         return next(error);
      }

      console.error(error);

      return next(ApiError.internal("Unexpected server error"));
   }
}
