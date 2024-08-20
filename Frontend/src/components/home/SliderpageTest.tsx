import React from "react";
import BtnOne from "../utils/BtnOne";

interface SliderpageTestProps {
  img: string;
}

const SliderpageTest: React.FC<SliderpageTestProps> = ({ img }) => {
  return (
    <div className="w-full h-[60vh]">
      <div className="absolute bottom-10 right-10">
        <BtnOne />
      </div>
      <img className="w-full h-full" src={img} alt="" />
    </div>
  );
};

export default SliderpageTest;
