interface Props {
  image?: string;
}

const PhoneMockup = ({ image }: Props) => {
  return (
    <div className="mockup-phone">
      <div className="camera"></div>
      <div className="display">
        <div className="artboard artboard-demo phone-1">
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover bg-cover  "
          />
        </div>
      </div>
    </div>
  );
};

export default PhoneMockup;
