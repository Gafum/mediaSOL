import rateLimit from "express-rate-limit";
import { ApiError } from "../error/ApiError";

export const contactLimiter = rateLimit({
   windowMs: 60 * 1000,
   max: 3,
   handler: (_req, _res, next) => {
      next(ApiError.tooManyRequests());
   },
});
