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
    <div className="w-full h-[40vh] lg:h-[60vh] ">
      <div className="">
        <div className="absolute bottom-2 right-5 lg:bottom-10 lg:right-32">
          <BtnOne />
        </div>
        {/* <div className="absolute top-10 right-16"> */}
          <SliderAnimation>
            <h3 className=" text-primary font-bold absolute top-2 right-5 lg:top-16  lg:right-16">{topText}</h3>
            <p className=" font-tanha text-start absolute top-20 right-5 lg:top-44 lg:right-20 w-96">{bottomText}</p>
          </SliderAnimation>
        {/* </div> */}
      </div>
      <img className="lg:w-full h-full" src={img} alt="" />
    </div>
  );
};

export default SliderpageTest;
