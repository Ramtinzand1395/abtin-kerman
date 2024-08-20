import React from "react";
import LeftAnimation from "../utils/LeftAnimation";
// import "./text.css"
const Discount: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-center justify-center w-full h-[60vh] my-0">
      {/* title */}
      <div className="">
        <LeftAnimation>
          <h3 className="text-3xl font-bold">پیشنهادات ویژه کرمان آتاری</h3>
          <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white">
            <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
            <span className="relative">مشاهده همه پیشنهادات</span>
          </button>
        </LeftAnimation>
      </div>
      {/* image */}
      <div className="md:col-span-2 ">
          <div className="fixedImage w-full h-[60vh]"></div>
      </div>
    </div>
  );
};

export default Discount;
