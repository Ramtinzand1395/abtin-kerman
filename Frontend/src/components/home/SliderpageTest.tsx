import React from "react";
import { motion } from "framer-motion";

import "./SliderCss.css";
interface SliderpageTestProps {
  img: string;
}
const BouncingBtnVariant = {
  start: {
    scale: [1, 2, 1, 1, 2, 1, 1, 2, 1, 1, 2, 1],

    // transitionEnd: {
    //   display: "none",
    // },
  },
 
};
const SliderpageTest: React.FC<SliderpageTestProps> = ({ img }) => {
  return (
    <div className="">
      <div className="absolute bottom-10 right-10">
        <motion.button
          initial="start"
          variants={BouncingBtnVariant}
          className="relative inline-block text-lg group"
        >
          <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-primary group-hover:-rotate-180 ease"></span>
            <span className="relative">مشاهده بیشتر</span>
          </span>
          <span
            className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-primary rounded-lg group-hover:mb-0 group-hover:mr-0"
            data-rounded="rounded-lg"
          ></span>
        </motion.button>
      </div>
      <img className="" src={img} alt="" />
    </div>
  );
};

export default SliderpageTest;
