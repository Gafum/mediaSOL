import { Router } from "express";
import { EmailService } from "../Service/Email/emailService";
import { contactLimiter } from "../middleware/ContactLimiter";

export const emailRouter = Router();

// Contact
emailRouter.get("/contact", EmailService.getContactForms);
emailRouter.post("/contact", contactLimiter, EmailService.sendContact);
