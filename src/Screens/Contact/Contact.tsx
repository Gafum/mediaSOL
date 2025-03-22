import { ContactForm } from "./MyComponents/ContactForm";
import { contactData, followUsData } from "./ContactData";
import { ParagraphWithTitle } from "./MyComponents/ParagraphWithTitle";
import { SectionWithHeadline } from "../../Components/Section/SectionWithHeadline";
import { CustomBtn } from "../../UI/CustomBtn/CustomBtn";
import { MainMap } from "../../Components/MainMap/MainMap";

export const Contact = (): JSX.Element => {
   return (
      <div className="flex flex-col h-full min-h-[86vh]">
         <div className="flex flex-col lg:flex-row gap-4 mt-2 lg:mt-5">
            <div className="w-full lg:w-2/3">
               <ContactForm />
            </div>
            <div className="h-[3px] w-full bg-primaryBlue rounded-[3px] my-3 lg:hidden" />
            <MainMap className="w-full h-[200px] lg:h-auto lg:w-1/3" />
         </div>

         <div className="h-[3px] w-full bg-primaryBlue rounded-[3px] mt-8 sm:mt-12" />

         <SectionWithHeadline className="mt-4" title="Unsere Kontakte ">
            <div className="md:max-w-[1200px] mx-auto grid grid-cols-1 sm500:grid-cols-2 md:grid-cols-4 gap-3 sm500:gap-y-5 sm500:gap-x-2 md:gap-3 justify-items-center items-start md:w-full mt-6">
               {contactData.map((paragraphData) => {
                  return (
                     <ParagraphWithTitle
                        {...paragraphData}
                        key={paragraphData.text}
                     />
                  );
               })}
            </div>
         </SectionWithHeadline>

         <div className="h-[3px] w-full bg-primaryBlue rounded-[3px] mt-8 sm:mt-12 lg:mt-20" />

         <SectionWithHeadline
            className="mt-6 mb-3"
            title="Folge uns auf Social Media"
         >
            <div className="grid grid-cols-1 sm:grid-cols-3 justify-items-center gap-3 sm:mt-8">
               {followUsData.map((paragraphData) => {
                  return (
                     <a
                        key={paragraphData.title}
                        href={paragraphData.link}
                        target="_blank"
                        className="w-full"
                     >
                        <CustomBtn
                           btnText={
                              <div className="pl-2 sm300:pl-0 sm300:grid grid-cols-2 flex justify-start sm:flex gap-2 sm300:gap-0 sm500:gap-3 justify-items-center sm300:justify-center items-center">
                                 {paragraphData.icon}
                                 <span className="sm300:w-full sm:w-auto text-white text-lg text-left sm:text-center">
                                    {paragraphData.title}
                                 </span>
                              </div>
                           }
                           className="w-full"
                        />
                     </a>
                  );
               })}
            </div>
         </SectionWithHeadline>
      </div>
   );
};
