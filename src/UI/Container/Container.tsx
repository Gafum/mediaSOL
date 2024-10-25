import React from "react";

interface IContainerProps {
   children: React.ReactNode;
}

function Container({ children }: IContainerProps): JSX.Element {
   return (
      <>
         <div className="w-full static" style={{ padding: "18px 36px" }}>
            {children}
         </div>
      </>
   );
}

export default Container;