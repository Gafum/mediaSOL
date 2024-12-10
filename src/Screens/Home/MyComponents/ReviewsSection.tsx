import Slider from "react-slick";
import { sliderSettings } from "../../../UI/CustomData/sliderSettings";

interface IReviews {
   userName: string;
   comment: string;
   stars: 0 | 1 | 2 | 3 | 4;
}

const starsName: string[] = [
   "Nicht gut",
   "Könnte besser sein",
   "Okay",
   "Gut",
   "Ausgezeichnet",
];

const reviewsList: IReviews[] = [
   {
      userName: "user 1",
      comment:
         "Die Firma ist führend in ihrem Bereich und bietet außergewöhnliche Dienstleistungen und Produkte. Ihre Gadgets sind innovativ und von höchster Qualität, ihre Netzwerkstationen erfüllen auch anspruchsvollste Anforderungen, und der technische Support ist unschlagbar: freundlich, schnell und äußerst fachkundig. ",
      stars: 3,
   },
   {
      userName: "Adam Hoph",
      comment:
         'Die Firma bietet akzeptable Dienstleistungen und Produkte, ohne jedoch besonders hervorzustechen. Gadgets und Netzwerkstationen funktionieren wie beworben, aber es fehlt das "gewisse Etwa", das sie von der Konkurrenz abhebt. ',
      stars: 2,
   },
   {
      userName: "user 2",
      comment:
         "Diese Bewertung zeigt, dass die Firma in den meisten Bereichen überzeugt. Gadgets sind hochwertig, Lieferungen erfolgen pünktlich, und der technische Support ist kompetent und hilfsbereit. Auch die Netzwerkstationen sind zuverlässig und gut konfigurierbar. Es handelt sich um einen Anbieter, der das Vertrauen seiner Kunden größtenteils verdient hat, auch wenn es immer Raum für Verbesserungen gibt, wie z. B. noch mehr innovative Produkte.",
      stars: 4,
   },
   {
      userName: "user 3",
      comment:
         "Das Angebot ist akzeptabel, aber die Geräteauswahl ist begrenzt, und die Installation der Netzwerklösungen dauert länger als versprochen.",
      stars: 1,
   },
   {
      userName: "user 4",
      comment:
         "Der Service ist unzuverlässig, Lieferzeiten werden oft nicht eingehalten, und die technische Unterstützung ist schwer erreichbar.",
      stars: 0,
   },
];

function ReviewsSection(): JSX.Element {
   return (
      <div className="w-full flex flex-col justify-center items-start mt-6">
         <h3 className="font-semibold text-xl">Neueste Bewertungen</h3>
         <div className="max-w-full w-full mt-4">
            <Slider {...sliderSettings}>
               {reviewsList.map(({ userName, comment, stars }) => {
                  return (
                     <div className="pr-4 w-1/3" key={comment}>
                        <div className="bg-primaryLightGrey shadow-sm rounded-md p-4 h-[210px]">
                           <div className="flex justify-between">
                              <div className="Stars flex flex-col items-start">
                                 <h4 className="capitalize font-semibold">
                                    {starsName[stars]}
                                 </h4>
                                 <div className="flex">
                                    {starsName.map((e, index) => {
                                       return (
                                          <svg
                                             key={e}
                                             xmlns="http://www.w3.org/2000/svg"
                                             width="17"
                                             height="17"
                                             viewBox="0 0 24 24"
                                             fill={
                                                index < stars + 1
                                                   ? "#FFD700"
                                                   : "#ddd"
                                             }
                                             stroke-linecap="round"
                                             stroke-linejoin="round"
                                             className="lucide lucide-star"
                                          >
                                             <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" />
                                          </svg>
                                       );
                                    })}
                                 </div>
                              </div>
                              <div className="text-[#999] capitalize text-sm">
                                 {userName}
                              </div>
                           </div>
                           <p className="text-[#999] overflow-hidden text-ellipsis max-w-full line-clamp-5 mt-2 text-sm">
                              {comment}
                           </p>
                        </div>
                     </div>
                  );
               })}
            </Slider>
         </div>
      </div>
   );
}

export default ReviewsSection;
