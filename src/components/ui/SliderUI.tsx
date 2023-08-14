import { useState } from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SliderItem from "../common/SliderItem/SliderItem";

interface Props {
  timeDelay?: number;
  rtl?: boolean; // this mean option slider run right to left
}

const SliderUI: React.FC<Props> = ({ rtl, timeDelay }) => {
  return (
    <Slider
      className="slider single-item"
      infinite={true}
      speed={timeDelay}
      slidesToShow={5}
      slidesToScroll={5}
      rtl={rtl}
      autoplay={true}
    >
      <div>
        <SliderItem />
      </div>
      <div>
        <SliderItem />
      </div>
      <div>
        <SliderItem />
      </div>

      <div>
        <SliderItem />
      </div>
      <div>
        <SliderItem />
      </div>
      <div>
        <SliderItem />
      </div>
      <div>
        <SliderItem />
      </div>
      <div>
        <SliderItem />
      </div>
      <div>
        <SliderItem />
      </div>
    </Slider>
  );
};

SliderUI.defaultProps = {
  rtl: false,
  timeDelay: 1000,
};
export default SliderUI;
