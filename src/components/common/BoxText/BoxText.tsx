
interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode | string;
}

const BoxText: React.FC<Props> = ({ children, ...rest }) => {
  return <span {...rest}>{children}</span>;
};

export default BoxText;
