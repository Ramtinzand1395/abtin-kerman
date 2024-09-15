import React from "react";
import BtnOne from "../utils/BtnOne";
import SliderAnimation from "../utils/SliderAnimation";

interface SliderpageTestProps {
  img: string;
  topText: string;
  bottomText: string;
}

const SliderpageTest: React.FC<SliderpageTestProps> = ({
  img,
  topText,
  bottomText,
}) => {
  return (
    <div className="w-full h-[60vh] grid grid-cols-2">
      <div className="">
        <div className="absolute bottom-32 right-32">
          <BtnOne />
        </div>
        <div className="absolute top-10 right-10">
          <SliderAnimation>
            <h3 className="text-white font-tanha text-7xl font-bold">
              {topText}
            </h3>
            <h3 className="text-white font-tanha text-7xl font-bold">
              {bottomText}
            </h3>
          </SliderAnimation>
        </div>
      </div>
      <img className="w-32 h-32" src={img} alt="" />
    </div>
  );
};

export default SliderpageTest;
