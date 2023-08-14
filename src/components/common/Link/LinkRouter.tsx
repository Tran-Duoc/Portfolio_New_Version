import { Link } from "react-router-dom";

interface Props extends React.RefAttributes<HTMLAnchorElement> {
  children: string | React.ReactNode;
  to: string;
}

const LinkRouter = ({ children, to, ...rest }: Props) => {
  return (
    <Link to={to} {...rest}>
      {children}
    </Link>
  );
};

export default LinkRouter;
