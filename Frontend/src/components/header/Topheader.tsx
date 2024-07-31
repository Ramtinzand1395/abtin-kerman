import React from "react";
import { BsBasket3Fill } from "react-icons/bs";
import { CiMobile3 } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
const Topheader = () => {
  return (
    <div className="bg-black p-2 flex items-center justify-around text-xs">
      <div className=" items-center hidden md:flex">
        <MdEmail color="white" className="ml-2" size={20} />
        <p className="text-white">پشتیبانی:admin@info.com</p>
      </div>
      <div className=" items-center hidden md:flex">
        <CiMobile3 color="white" className="ml-2" size={20} />
        <p className="text-white">پیگیری سفارش:0913*******</p>
      </div>
      <div className="flex items-center">
        <BsBasket3Fill color="white" className="ml-2" size={20} />
        <p className="text-white">
          {" "}
          <span className="bg-white p-1 w-5 h-5 rounded-full text-black mx-2">
            0
          </span>
          سبد خرید
        </p>
      </div>
      <div className="flex items-center">
        <FaUser color="white" className="ml-2" size={20} />
        <p className="text-white">
        
         ورود/ثبت نام
        </p>
      </div>
    </div>
  );
};

export default Topheader;
