import Slider from "react-slick"
import { sliderSettings } from "../../../UI/CustomData/sliderSettings"

interface IReviews {
   userName: string
   comment: string
   stars: 0 | 1 | 2 | 3 | 4
}

const starsName: string[] = ["Bad", "Not good", "Not bad", "Good", "Excellent"]

const reviewsList: IReviews[] = [
   {
      userName: "user 1",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum blanditiis tempora quisquam hic officiis, suscipit, sequi obcaecati deserunt possimus, neque maxime repudiandae mollitia enim doloribus soluta. Explicabo, obcaecati. Officia accusamus dicta nam laudantium doloribus quam dolores error quasi sint.",
      stars: 3,
   },
   {
      userName: "Adam Hoph",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum blanditiis tempora quisquam hic officiis, suscipit, sequi obcaecati deserunt possimus, neque maxime repudiandae mollitia enim doloribus soluta. Explicabo, obcaecati. Officia accusamus dicta nam laudantium doloribus quam dolores error quasi sint.",
      stars: 2,
   },
   {
      userName: "user 2",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum blanditiis tempora quisquam hic officiis, suscipit, sequi obcaecati deserunt possimus, neque maxime repudiandae mollitia enim doloribus soluta. Explicabo, obcaecati. Officia accusamus dicta nam laudantium doloribus quam dolores error quasi sint.",
      stars: 4,
   },
   {
      userName: "user 3",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum blanditiis tempora quisquam hic officiis, suscipit, sequi obcaecati deserunt possimus, neque maxime repudiandae mollitia enim doloribus soluta. Explicabo, obcaecati. Officia accusamus dicta nam laudantium doloribus quam dolores error quasi sint.",
      stars: 1,
   },
   {
      userName: "user 4",
      comment:
         "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad ipsum blanditiis tempora quisquam hic officiis, suscipit, sequi obcaecati deserunt possimus, neque maxime repudiandae mollitia enim doloribus soluta. Explicabo, obcaecati. Officia accusamus dicta nam laudantium doloribus quam dolores error quasi sint.",
      stars: 0,
   },
]

function ReviewsSection(): JSX.Element {
   return (
      <div className="w-full flex flex-col justify-center items-start mt-4">
         <h3 className="font-semibold text-xl">Popular Reviews</h3>
         <div className="max-w-full w-full mt-4">
            <Slider {...sliderSettings}>
               {reviewsList.map(({ userName, comment, stars }) => {
                  return (
                     <div className="pr-4 w-1/3">
                        <div
                           key={comment}
                           className="bg-primaryLightGrey rounded-md p-4"
                        >
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
                                       )
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
                  )
               })}
            </Slider>
         </div>
      </div>
   )
}

export default ReviewsSection
