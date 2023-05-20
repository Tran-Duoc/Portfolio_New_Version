interface Props {
  src: string;
  animate?: string;
}

const Icon = ({ src, animate }: Props) => {
  return (
    <div
      className={`py-12 px-6 bg-slate-700    rounded-3xl   shadow-inner border-8 border-slate-800 ${animate}`}
    >
      <img
        src={src}
        alt={src}
        className=" w-56 h-56  lg:w-72 lg:h-72 object-contain bg-cover "
      />
    </div>
  );
};

export default Icon;
