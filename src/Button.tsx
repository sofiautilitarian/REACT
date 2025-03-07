import React, { ReactNode } from "react";
//ReactArrowFunctionExportComponent

interface Props {
  children: ReactNode;
  onClick: () => void; // a function with no parameter
  color?: 'primary'|'secondary'|'danger';
}
const Button = ({ children, onClick, color = 'primary'}: Props) => {
  return (
    <div>
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
