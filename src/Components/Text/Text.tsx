interface Props {
  children: string;
  color?: string;
}

const Text = ({ children, color }: Props) => {
  return (
    <span
      className={`inline-block transition-all duration-200 hover:-translate-y-[8px] hover:text-[#00b4d8] ${color}`}
    >
      {children}
    </span>
  );
};

export default Text;
