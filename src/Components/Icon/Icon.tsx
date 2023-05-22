interface Props {
  src: string;
  style?: string;
}

const Icon = ({ src, style }: Props) => {
  return <img src={src} alt="" className={style} />;
};

export default Icon;
