import { Link } from "react-router-dom";

interface Props {
  type: string;
  children: string;
  style: string;
  path?: string;
}

const Button = ({ type, children, style, path }: Props) => {
  return (
    <>
      {type === "link" ? (
        <Link to={`${path ? path : ""} `} className={style} target="_blank">
          {children}
        </Link>
      ) : (
        <button className={style}>{children}</button>
      )}
    </>
  );
};

export default Button;
