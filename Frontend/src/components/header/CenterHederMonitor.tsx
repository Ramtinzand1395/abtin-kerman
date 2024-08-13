import React from "react";
import logo from "../../assets/atari-seeklogo.svg";
import { FaTractor } from "react-icons/fa";

const CenterHederMonitor:React.FC = () => {
  return (
    <div className="container mx-auto flex items-center justify-between gap-5 my-2">
      {/* Logo */}
      <div className="flex items-center text-2xl">
        <img src={logo} className="w-[5vw] h-[5vw]" alt="Logo" />
        <h2 className="font-bold mr-2 whitespace-nowrap text-primary">کرمان آتاری</h2>
      </div>
      {/* Search */}
      <div className="">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              title="serach"
              placeholder="جستجو نام, برند,..."
              id="search-dropdown"
              className="block p-2.5 w-[50vw] z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-2.5 w-28 font-medium h-full text-sm text-white bg-secondery rounded-e-2xl border  hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
      {/* Free */}
      <div className="flex">
        <div className="w-[5vw] h-[5vw] flex items-center justify-center rounded-full bg-primary p-2">
          <FaTractor size={50} className="text-white" />
        </div>
        <div className="flex flex-col gap-5 mr-5 whitespace-nowrap text-sm">
          <p>سرویس ارسال اکسپرس</p>
          <p>ارسال رایگان بالای 50 هزارتومان</p>
        </div>
      </div>
    </div>
  );
};

export default CenterHederMonitor;
