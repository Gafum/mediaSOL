import { ReactNode } from "react";

interface SimpleSectionProps {
   children: ReactNode | undefined | "";
   title: string;
}

export const SectionWithHeadline = ({
   children,
   title,
}: SimpleSectionProps): JSX.Element => {
   if (!children || children == "" || children == <></>) {
      return <></>;
   }

   return (
      <section className="mt-10">
         <h2 className="font-semibold text-[21px] mb-3">{title}</h2>
         {children}
      </section>
   );
};
