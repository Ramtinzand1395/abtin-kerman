import React, { memo } from "react";
import BtnOne from "../../utils/BtnOne";
import SliderAnimation from "../../utils/SliderAnimation";

interface SliderpageTestProps {
  img: string;
  topText: string;
  bottomText: string;
}

const SliderpageTest: React.FC<SliderpageTestProps> = memo(
  ({ img, topText, bottomText }) => {
    return (
      <div className="w-full h-[40vh] lg:h-[60vh] relative">
        <div className="absolute bottom-2 right-5 lg:bottom-10 lg:right-32">
          <BtnOne />
        </div>
        <SliderAnimation>
          <h3 className="text-primary font-bold absolute top-2 right-5 lg:top-16 lg:right-16">{topText}</h3>
          <p className="font-tanha text-start absolute top-20 right-5 lg:top-44 lg:right-20 w-96">{bottomText}</p>
        </SliderAnimation>
        <img className="lg:w-full h-full" src={img} alt={topText} loading="lazy" />
      </div>
    );
  }
);

export default SliderpageTest;
