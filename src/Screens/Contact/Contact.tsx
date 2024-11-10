import { LandPlot, Mail, Phone, SquareChartGantt } from "lucide-react"
import { contactData } from "./ContactData"

interface IParagraphWithTitleProps {
   title: string
   text: string
   icon: JSX.Element
}

function ParagraphWithTitle({
   icon,
   title,
   text,
}: IParagraphWithTitleProps): JSX.Element {
   return (
      <p className="w-full flex justify-start gap-2">
         <strong className="flex gap-1">
            {icon}
            {title}:
         </strong>
         <span>{text}</span>
      </p>
   )
}

const paragraphsInContacts: IParagraphWithTitleProps[] = [
   {
      title: "Adresse",
      text: contactData.address,
      icon: <LandPlot width={20} />,
   },
   {
      title: "Telefon",
      text: contactData.telephone,
      icon: <Phone width={20} />,
   },
   {
      title: "E-Mail",
      text: contactData.email,
      icon: <Mail width={20} />,
   },
   {
      title: "Öffnungszeiten",
      text: contactData.openTime,
      icon: <SquareChartGantt width={20} />,
   },
]

function Contact(): JSX.Element {
   return (
      <div>
         <div className="w-full flex justify-start items-center gap-5 min-h-[180px]">
            <img src="./mainIcon.svg" alt="M" className="w-1/2 max-w-[300px]" />
            <div className="w-full flex flex-col gap-2">
               <h1 className="font-bold text-[80px]">MediaSOL</h1>
            </div>
         </div>

         <div className="mt-4 flex flex-col w-full gap-1">
            {paragraphsInContacts.map((paragraphData) => {
               return <ParagraphWithTitle {...paragraphData} />
            })}
         </div>
      </div>
   )
}

export default Contact
