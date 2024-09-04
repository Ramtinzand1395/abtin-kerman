import React from "react";
import BtnOne from "../utils/BtnOne";
import SliderAnimation from "../utils/SliderAnimation";

interface SliderpageTestProps {
  img: string;
  text: string;
}

const SliderpageTest: React.FC<SliderpageTestProps> = ({ img, text }) => {
  return (
    <div className="w-full h-[60vh]">
      <div className="absolute bottom-10 right-10">
        <BtnOne />
      </div>
      <div className="absolute top-10 right-10">
        <SliderAnimation>
          <h3 className="text-white font-tanha text-5xl font-bold">{text}</h3>
        </SliderAnimation>
      </div>
      <img className="w-full h-full" src={img} alt="" />
    </div>
  );
};

export default SliderpageTest;
