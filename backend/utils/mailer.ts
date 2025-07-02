import { createTransport } from "nodemailer";

export const contactEmail = createTransport({
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
