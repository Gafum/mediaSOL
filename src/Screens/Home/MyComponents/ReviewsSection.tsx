import { Star } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";

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
      userName: "Fredo Andish",
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
      userName: "Toni Bans",
      comment:
         "Diese Bewertung zeigt, dass die Firma in den meisten Bereichen überzeugt. Gadgets sind hochwertig, Lieferungen erfolgen pünktlich, und der technische Support ist kompetent und hilfsbereit. Auch die Netzwerkstationen sind zuverlässig und gut konfigurierbar. Es handelt sich um einen Anbieter, der das Vertrauen seiner Kunden größtenteils verdient hat, auch wenn es immer Raum für Verbesserungen gibt, wie z. B. noch mehr innovative Produkte.",
      stars: 4,
   },
   {
      userName: "John Rosni",
      comment:
         "Das Angebot ist akzeptabel, aber die Geräteauswahl ist begrenzt, und die Installation der Netzwerklösungen dauert länger als versprochen.",
      stars: 1,
   },
   {
      userName: "Hanno Donny",
      comment:
         "Der Service ist unzuverlässig, Lieferzeiten werden oft nicht eingehalten, und die technische Unterstützung ist schwer erreichbar.",
      stars: 0,
   },
];

import { Pagination } from "swiper/modules";

export const ReviewsSection = (): JSX.Element => {
   return (
      <div className="w-full flex flex-col justify-center items-start mt-6">
         <h3 className="font-semibold text-xl">Neueste Bewertungen</h3>
         <div className="max-w-full w-full mt-4 overflow-hidden pb-8">
            <Swiper
               slidesPerView={3}
               spaceBetween={5}
               pagination={{
                  clickable: true,
               }}
               modules={[Pagination]}
               className="overflow-visible"
            >
               {reviewsList.map(({ userName, comment, stars }) => {
                  return (
                     <SwiperSlide className="pr-4 w-1/3" key={comment}>
                        <div className="bg-primaryLightGrey shadow-sm rounded-md p-4 h-[210px]">
                           <div className="flex justify-between">
                              <div className="Stars flex flex-col items-start">
                                 <h4 className="capitalize font-semibold">
                                    {starsName[stars]}
                                 </h4>
                                 <div className="flex">
                                    {starsName.map((e, index) => {
                                       return (
                                          <Star
                                             key={e}
                                             size={16}
                                             fill={
                                                index < stars + 1
                                                   ? "#FFD700"
                                                   : "#ddd"
                                             }
                                             strokeWidth={1}
                                             color="#333"
                                             strokeLinecap="round"
                                             strokeLinejoin="round"
                                          />
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
                     </SwiperSlide>
                  );
               })}
            </Swiper>
         </div>
      </div>
   );
};
