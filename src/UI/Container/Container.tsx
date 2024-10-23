import React from "react";

interface IContainerProps {
   children: React.ReactNode;
}

function Container({ children }: IContainerProps): JSX.Element {
   return (<div>
      {children}
   </div>);
}

export default Container;