import express, { Request, Response } from "express";
import cors, { CorsOptions } from "cors";
import { config } from "dotenv";
import { indexRouter } from "./routes/index";

config();

const app = express();
const PORT = process.env.PORT || 5000;

// const corsOption: CorsOptions = {
//    origin: [
//       "http://localhost:5173/mediaSOL",
//       "https://gafum.github.io/mediaSOL/",
//    ],
//    credentials: true,
// };

app.use(cors());
app.use(express.json());

const start = async () => {
   try {
      app.use("/api", indexRouter);

      app.use((req: Request, res: Response) => {
         res.status(404).json({ message: "Not Found" });
      });

      app.listen(PORT, () => {
         console.log(`start on port ${PORT}`);
      });
   } catch (err) {
      console.log(err);
   }
};

start();
