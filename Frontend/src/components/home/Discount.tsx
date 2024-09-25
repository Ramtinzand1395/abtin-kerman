import React from "react";
import LeftAnimation from "../utils/LeftAnimation";
const Discount: React.FC = () => {
  return (
    // <div className="grid grid-cols-4 gap-5 items-center justify-center w-full h-[60vh] my-0">
    //   {/* title */}
    //     <LeftAnimation>
    //   <div className="flex flex-col items-start justify-around h-[60vh]">
    //       <h3 className="text-2xl font-bold">پیشنهادات ویژه کرمان آتاری</h3>
    //       <button className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-white active:shadow-none shadow-lg bg-gradient-to-tr from-white to-white border-white text-white">
    //         <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
    //         <span className="relative">مشاهده همه پیشنهادات</span>
    //       </button>
    //   </div>
    //     </LeftAnimation>
    //   {/* image */}
    //   <div className=" col-span-3">
    //   </div>
    // </div>

    <div className="">
      <div className="fixedImage relative h-[20vh] md:h-[60vh]">
        <LeftAnimation>
          <h2 className="font-bold text-lg text-primary lg:text-4xl mt-10 mb-2">
            پیشنهاد های ویژه کرمان آتاری
          </h2>
          {/* <div className="w-full h-[8px] rounded-3xl border-2 border-gray-500 mb-5"></div> */}
        </LeftAnimation>
        <div className="absolute top-24 right-0">
          <button className="relative inline-flex items-center px-8 py-3 overflow-hidden text-lg font-medium bg-gray-200 text-black border-2 border-primary rounded-2xl hover:text-white group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-0 transition-all bg-primary opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
            <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span className="relative">مشاهده بیشتر </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
