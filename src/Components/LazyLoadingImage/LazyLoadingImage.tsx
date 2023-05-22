import React from "react";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
interface Props {
  image: string;
  className?: string;
}

const LazyLoadingImage = ({ image, className }: Props) => {
  return (
    <div>
      <LazyLoadImage
        height="full"
        src={image} // use normal <img> attributes as props
        width="full"
        effect="blur"
        className={className}
      />
    </div>
  );
};

export default LazyLoadingImage;
