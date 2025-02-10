import { ReactNode } from "react";

interface SimpleSectionProps {
   children: ReactNode | undefined | "";
   name: string;
}

export const SectionWithHeadline = ({
   children,
   name,
}: SimpleSectionProps): JSX.Element => {
   if (!children || children == "") {
      return <></>;
   }

   return (
      <section className="mt-10">
         <h2 className="font-semibold text-[21px]">{name}</h2>
         {children}
      </section>
   );
};
