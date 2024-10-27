import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";
import { FaLocationPinLock } from "react-icons/fa6";

const Topheader: React.FC = () => {

  return (
    <div className="bg-primary p-2 flex items-center justify-around text-xs mb-2">
      <div className=" items-center hidden md:flex">
        <MdEmail color="white" className="ml-2" size={20} />
        <p className="text-white">پشتیبانی:kermanatari.ir@gmail.com</p>
      </div>
      <div className=" items-center hidden md:flex">
        <CiMobile3 color="white" className="ml-2" size={20} />
        <p className="text-white">پیگیری سفارش:09383077225</p>
      </div>
      <div className=" items-center hidden md:flex">
        <FaLocationPinLock color="white" className="ml-2" size={20} />
        <p className="text-white"> آدرس:09383077225</p>
      </div>
    </div>
  );
};

export default Topheader;
