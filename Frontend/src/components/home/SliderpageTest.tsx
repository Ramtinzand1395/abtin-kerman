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
    <div className="w-full h-[60vh] ">
      <div className="">
        <div className="absolute bottom-10 right-32">
          <BtnOne />
        </div>
        {/* <div className="absolute top-10 right-16"> */}
          <SliderAnimation>
            <h3 className="  text-6xl text-primary font-bold absolute top-16 right-16">{topText}</h3>
            <p className=" font-tanha text-xl text-start absolute top-44 right-20 w-96">{bottomText}</p>
          </SliderAnimation>
        {/* </div> */}
      </div>
      <img className="w-full h-full" src={img} alt="" />
    </div>
  );
};

export default SliderpageTest;
