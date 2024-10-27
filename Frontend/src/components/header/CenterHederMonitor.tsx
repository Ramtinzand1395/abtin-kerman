import React from "react";
import logo from "../../assets/atari-seeklogo.svg";
import { FaTractor } from "react-icons/fa";

const CenterHederMonitor:React.FC = () => {
  return (
    <div className="mx-2 flex items-center justify-between gap-5 my-2">
      {/* Logo */}
      <div className="flex items-center text-2xl">
        <img src={logo} className="w-14 h-14" alt="Logo" />
        <h2 className="mx-2 whitespace-nowrap text-primary">کرمان آتاری</h2>
      {/* Search */}
      <div className="">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              title="serach"
              placeholder="جستجو نام, برند,..."
              id="search-dropdown"
              className="block p-2.5 w-[500px] z-20 text-sm text-gray-900 bg-[#f0f0f1] rounded-lg focus:ring-black-500 focus:border-blaring-black-500"
            />

          </div>
        </div>
      </div>
      </div>
      {/* Free */}
      <div className="flex">
        <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary p-2">
          <FaTractor size={20} className="text-white" />
        </div>
        <div className="flex flex-col gap-1 mr-5 whitespace-nowrap text-sm">
          <span>سرویس ارسال اکسپرس</span>
          <span>ارسال رایگان در شهر کرمان</span>
        </div>
      </div>
    </div>
  );
};

export default CenterHederMonitor;
