import { Review } from "@prisma/client";
import { itemsList } from "./items";
export type IReviews = Review;

interface IReviewsList extends Omit<IReviews, "createdAt" | "updatedAt"> {}

export const reviewsList: IReviewsList[] = [
   {
      userName: "Fredo Andish",
      text: "Die Firma ist führend in ihrem Bereich und bietet außergewöhnliche Dienstleistungen und Produkte. Ihre Gadgets sind innovativ und von höchster Qualität, ihre Netzwerkstationen erfüllen auch anspruchsvollste Anforderungen, und der technische Support ist unschlagbar: freundlich, schnell und äußerst fachkundig. ",
      stars: 3,
      itemId: itemsList[0].id,
      id: "123",
   },
   {
      userName: "Adam Hoph",
      text: 'Die Firma bietet akzeptable Dienstleistungen und Produkte, ohne jedoch besonders hervorzustechen. Gadgets und Netzwerkstationen funktionieren wie beworben, aber es fehlt das "gewisse Etwa", das sie von der Konkurrenz abhebt. ',
      stars: 2,
      id: "454564231",
      itemId: itemsList[1].id,
   },
   {
      userName: "Toni Bans",
      text: "Diese Bewertung zeigt, dass die Firma in den meisten Bereichen überzeugt. Gadgets sind hochwertig, Lieferungen erfolgen pünktlich, und der technische Support ist kompetent und hilfsbereit. Auch die Netzwerkstationen sind zuverlässig und gut konfigurierbar. Es handelt sich um einen Anbieter, der das Vertrauen seiner Kunden größtenteils verdient hat, auch wenn es immer Raum für Verbesserungen gibt, wie z. B. noch mehr innovative Produkte.",
      stars: 4,
      id: "mainId234123123",
      itemId: itemsList[4].id,
   },
   {
      userName: "John Rosni",
      text: "Das Angebot ist akzeptabel, aber die Geräteauswahl ist begrenzt, und die Installation der Netzwerklösungen dauert länger als versprochen.",
      stars: 1,
      id: "4545642431",
      itemId: itemsList[0].id,
   },
   {
      userName: "Hanno Donny",
      text: "Der Service ist unzuverlässig, Lieferzeiten werden oft nicht eingehalten, und die technische Unterstützung ist schwer erreichbar.",
      stars: 0,
      id: "89014212",
      itemId: itemsList[3].id,
   },
];
