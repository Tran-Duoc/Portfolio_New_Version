interface Props {
  children: string;
  style: string;
}

const Animate = ({ children, style }: Props) => {
  return <span className={`${style}`}>{children}</span>;
};

export default Animate;
