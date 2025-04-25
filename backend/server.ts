import express, { Request, Response } from "express";
import { items } from "./data";
import cors, { CorsOptions } from "cors";
const corsOption: CorsOptions = {
   origin: ["http://localhost:5173/"],
   credentials: true,
};

const app = express();

app.use(cors(corsOption));

app.listen(8080, () => {
   console.log("start on port 8080");
});

app.get("/api/items", (req: Request, res: Response) => {
   res.json(items);
});
