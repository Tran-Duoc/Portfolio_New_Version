 
interface Props
  extends React.DetailedHTMLProps<
    React.ImgHTMLAttributes<HTMLImageElement>,
    HTMLImageElement
  > {
  imageSrc: string;
  desc: string;
}

const Image: React.FC<Props> = ({ imageSrc, desc, ...rest }) => {
  return <img src={imageSrc} alt={desc} {...rest} />;
};

export default Image;
