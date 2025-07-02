import { ApiError } from "../error/ApiError";
import { ErrorRequestHandler, NextFunction, Request, Response } from "express";

export const ErrorHandler: ErrorRequestHandler = (
   err: any,
   req: Request,
   res: Response,
   next: NextFunction
) => {
   if (err instanceof ApiError) {
      res.status(err.status).json({ message: err.message });
   } else {
      res.status(500).json({ message: "Error on Server" });
   }
};
