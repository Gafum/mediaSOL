import { NextFunction, Request, Response } from "express";
import { createTransport } from "nodemailer";
import { ApiError } from "../../error/ApiError";
import z from "zod";
import sanitizeHtml from "sanitize-html";

const contactSchema = z.object({
   name: z.string().trim().min(1, "Name is required").max(100),
   email: z.string().trim().email("Invalid email format"),
   message: z.string().trim().min(1, "Message is required").max(1000),
});

const contactEmail = createTransport({
   service: "gmail",
   auth: {
      user: process.env.CONTACT_EMAIL,
      pass: process.env.ADMIN_SECRET,
   },
});

contactEmail.verify((error) => {
   if (error) {
      console.error("Email transporter not ready:", error);
   } else {
      console.log("Ready to Send");
   }
});

export async function sendContact(
   req: Request,
   res: Response,
   next: NextFunction
) {
   const parsed = contactSchema.safeParse(req.body);

   if (!parsed.success) {
      const messages = parsed.error.errors[0].message ?? "Validation failed";
      return next(ApiError.badRequest(messages));
   }

   const { name, email, message } = parsed.data;

   const safeName = sanitizeHtml(name, {
      allowedTags: [],
      allowedAttributes: {},
   });
   const safeMessage = sanitizeHtml(message, {
      allowedTags: [],
      allowedAttributes: {},
   });

   const mail = {
      from: `"${safeName}" <${process.env.CONTACT_EMAIL}>`,
      to: email,
      subject: "Contact Form Submission",
      html: `
         <p>Hallo, ${safeName}!</p>
         <p>Wir haben Ihr Formular bekommen und werden Ihnen so schnell wie möglich antworten.</p>
         <p>Mit freundlichen Grüßen</p>
         <p>MediaSOL-Team</p>
         <hr />
         <p><i>Ihre Nachricht:</i></p>
         <blockquote>${safeMessage}</blockquote>
         <small>Diese Nachricht ist automatisch generiert und Sie müssen nicht darauf antworten.</small>
      `,
   };

   try {
      await contactEmail.sendMail(mail);
      res.status(200).json({ message: "Message Sent" });
   } catch (error) {
      console.error("Send email error:", error);
      return next(ApiError.internal("Failed to send email"));
   }
}
