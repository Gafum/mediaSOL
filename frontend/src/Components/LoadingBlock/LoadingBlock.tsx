import { twMerge } from "tailwind-merge";

export const LoadingBlock = ({
   className,
}: {
   className?: string;
}): JSX.Element => {
   return (
      <h2 className={twMerge("mt-5 w-full text-center", className)}>
         Loading...
      </h2>
   );
};
