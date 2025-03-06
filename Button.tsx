import React, { ReactNode } from "react";
//ReactArrowFunctionExportComponent

interface Props {
  children: ReactNode;
}
const Button = ({ children }: Props) => {
  return (
    <div>
      <button type="button" className="btn btn-primary">
        {children}
      </button>
    </div>
  );
};

export default Button;
