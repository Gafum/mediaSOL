import { Request, Response, NextFunction, ErrorRequestHandler } from "express";

export const JsonParseErrorHandler: ErrorRequestHandler = (
   err,
   req,
   res,
   next
) => {
   if (err instanceof SyntaxError && "body" in err) {
      res.status(400).json({ message: "Invalid JSON format" });
      return;
   }
   next(err);
};
