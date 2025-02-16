import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

interface SimpleSectionProps {
   children: ReactNode | undefined | "";
   title: string;
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
      <section className={twMerge("mt-10 ", className)}>
         <h2 className="font-semibold text-[21px] mb-3">{title}</h2>
         {children}
      </section>
   );
};
