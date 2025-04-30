import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { indexRouter } from "./routes/index";
import { ErrorHandler } from "./middleware/ErrorHandlingMiddleware";
import { ApiError } from "./error/ApiError";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const start = async () => {
   try {
      app.use("/api", indexRouter);

      app.use("/", (req: Request, res: Response, next: NextFunction) => {
         try {
            next(ApiError.badRequest("Not found"));
         } catch (e) {
            console.log(e);
         }
      });

      app.use(ErrorHandler); //Must stay in the end

      app.listen(PORT, () => {
         console.log(`start on port ${PORT}`);
      });
   } catch (err) {
      console.log(err);
   }
};

start();
