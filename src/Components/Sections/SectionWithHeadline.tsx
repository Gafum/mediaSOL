import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SimpleSectionProps {
   children: ReactNode | undefined | "";
   title: string | ReactNode;
   className?: string;
}

export const SectionWithHeadline = ({
   children,
   title,
   className,
}: SimpleSectionProps): JSX.Element => {
   if (!children || children == "" || children == <></>) {
      return <></>;
   }

   return (
      <section
         className={twMerge(
            "mt-5",
            className ? className : "sm500:mt-7 md:mt-10"
         )}
      >
         <h2 className="font-semibold text-base sm500:text-lg sm:text-xl mb-3">
            {title}
         </h2>
         {children}
      </section>
   );
};
