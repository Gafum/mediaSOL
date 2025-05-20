import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import { indexRouter } from "./routes/index";
import { ErrorHandler } from "./middleware/ErrorHandlingMiddleware";
import { JsonParseErrorHandler } from "./middleware/JsonParseErrorHandler";
import { ApiError } from "./error/ApiError";

config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(JsonParseErrorHandler);

const start = async () => {
   try {
      app.use("/api", indexRouter);

      app.use("/", (req: Request, res: Response, next: NextFunction) => {
         try {
            res.status(200).json({ message: "MediaSOl server" });
         } catch (e) {
            console.log(e);
            next(ApiError.internal("Server Problem"));
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
