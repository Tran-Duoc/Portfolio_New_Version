interface Props {
  children: string;
  style?: string;
}

const SubTitle = ({ children, style }: Props) => {
  return <span className={`${style}`}>{children}</span>;
};

export default SubTitle;
