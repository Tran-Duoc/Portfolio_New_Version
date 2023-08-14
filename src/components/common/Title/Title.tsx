import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: string | React.ReactNode;
}

const Title: React.FC<Props> = ({ children, ...rest }) => {
  return <span {...rest}>{children}</span>;
};

export default Title;
