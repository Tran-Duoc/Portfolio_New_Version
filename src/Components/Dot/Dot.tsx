interface Props {
  style: string;
  value: string | number;
  handle?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  itemID: number | string;
  activeIndex: number | string;
}

const Dot = ({ style, handle, value, itemID, activeIndex }: Props) => {
  return (
    <div
      className={`w-5 h-5 hover:bg-cyan-600  duration-200  rounded-full flex items-center justify-center group  ${
        itemID === activeIndex ? " bg-cyan-400 " : "bg-slate-600 "
      }`}
      data-value={value}
      onClick={handle}
    >
      <div
        className={` ${style}  rounded-full group-hover:bg-blue-300 pointer-events-none`}
      ></div>
    </div>
  );
};

export default Dot;
