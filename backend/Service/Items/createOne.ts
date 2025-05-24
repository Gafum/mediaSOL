import { NextFunction, Request, Response } from "express";
import { ApiError } from "../../error/ApiError";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function createOne(
   req: Request,
   res: Response,
   next: NextFunction
) {
   try {
      // const newItem = await prisma.item.create({
      //    data: {
      //       name: "Monster Gaming PC - Intel i7 3,90Ghz | 32GB RAM | 1TB SSD | Nvidia RTX 3050 8GB",
      //       price: 142123.123,
      //       description:
      //          "Der ERAZER Bandit P20 ist Deine kompakte Gaming-Maschine. Seinem Namen macht er alle Ehre, indem er schurkenhaft im kleinen Gehäuse verbirgt, was in ihm steckt: Auf minimalem Raum liefert er beeindruckende Leistung für Dein Spielerlebnis. Das Spielgenre ist dabei nebensächlich: Komplexe strategische Zusammenhänge berechnet der mächtige Intel Core i7 Prozessor. Grafisch aufwendige virtuelle Welten stellt der Bandit P20 mit seiner NVIDIA GeForce RTX 4070 flüssig und ohne Ruckeln dar. Der ERAZER Bandit P20 ist Deine kompakte Gaming-Maschine. Seinem Namen macht er alle Ehre, indem er schurkenhaft im kleinen Gehäuse verbirgt, was in ihm steckt: Auf minimalem Raum liefert er beeindruckende Leistung für Dein Spielerlebnis. Das Spielgenre ist dabei nebensächlich: Komplexe strategische Zusammenhänge berechnet der mächtige Intel Core i7 Prozessor. Grafisch aufwendige virtuelle Welten stellt der Bandit P20 mit seiner NVIDIA GeForce RTX 4070 flüssig und ohne Ruckeln dar.",
      //       img: process.env.FRONTEND_URL + "static/images/items/firstPC.jpg",
      //       type: "Computer",
      //       action: 20,
      //       commentsList: ["mainId234123123", "mainId23423423"],
      //    },
      // });

      const items = await prisma.item.findMany();

      res.status(200).json(items);
   } catch (error) {
      console.log(error);
      return next(ApiError.internal("Error on server"));
   }
}
