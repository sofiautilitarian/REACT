import React, { ReactNode } from "react";
//ReactArrowFunctionExportComponent

interface Props{
  children: ReactNode;
}
const Alert = ({children}:Props) => {
  return <div className="alert alert-primary" role="alert">{children}
</div>
};

export default Alert;
