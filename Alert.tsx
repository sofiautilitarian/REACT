import React, { Children, ReactNode } from "react";
interface Props {
  children: Props;
}
const Alert = ({ children }: Props) => {
  return (
    <div className="alert alert-primary" role="alert">
      A simple primary alert—check it out!
    </div>
  );
};
