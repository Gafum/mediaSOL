import { Router } from "express";
import { EmailService } from "../Service/Email/emailService";
import rateLimit from "express-rate-limit";

export const emailRouter = Router();

const contactLimiter = rateLimit({
   windowMs: 60 * 1000,
   max: 3,
   message: "Too many requests, try again later",
});

emailRouter.post("/contact", EmailService.sendContact);