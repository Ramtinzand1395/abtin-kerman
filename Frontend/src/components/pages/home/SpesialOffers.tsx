import React from "react";
import LeftAnimation from "../../utils/LeftAnimation";
import { FaArrowRight } from "react-icons/fa";
import Animations from "../../utils/Animations";
const SpesialOffers: React.FC = () => {
  return (
    <div className="">
        <Animations>
        <div className="flex items-center mt-10 mb-2">
          <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap ml-5">
           تخفیف ها
          </h2>{" "}
          <div className="w-full h-[8px] rounded-3xl bg-primary"></div>{" "}
        </div>
      </Animations>
      <div className="fixedImage relative  h-[60vh] bg-gray-200 rounded-lg p-5">
        <LeftAnimation>
          <h4 className="lg:font-extrabold font-light text-primary  mt-5 ">
            پیشنهاد های ویژه کرمان آتاری
          </h4>
        </LeftAnimation>
        <div className="absolute bottom-24 right-10">
          <button className="relative inline-flex items-center px-3 py-2 lg:px-8 lg:py-3 overflow-hidden text-lg font-medium bg-red-500 text-black border-2 border-red-600 rounded-2xl hover:text-white group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-0 transition-all bg-red-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <FaArrowRight />
            </span>
            <span className="relative text-white">مشاهده بیشتر </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SpesialOffers;
