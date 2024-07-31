import React from "react";
import logo from "../../assets/4062c9fc8b3a999778ed824b24631ab0.jpg";
import { MdMenu } from "react-icons/md";
import { motion } from "framer-motion";
// const headerVarient = {
//   start: {
//     opacity: 0,
//     fontSize: "1px",
//     rotateZ: 0,
//   },
//   end: {
//     opacity: 1,
//     fontSize: "50px",
//     rotateZ: [0, 360, 0, 360, 0, 360, 0],
//     transition: { duration: 1, type: "tween" },
//   },
//   hover: {
//     textShadow: "10px  10px  10px  rgb(256,256,256)",
//     scale: [1, 2, 1],
//     transition: { duration: 1 },
//   },
// };
const CenterHederMobile = ({setOpenMenu}) => {
  return (
    <div className="grid grid-cols-2 my-2 mx-2 gap-5">
      {/* Logo */}
      <div className="flex items-center text-2xl">
        <img src={logo} className="w-10 h-10 rounded-full" alt="Logo" />
        <h2
        //   initial="start"
        //   animate="end"
        //   whileHover="hover"
        //   variants={headerVarient}
          className="font-bold mr-2"
        >
          کرمان آتاری
        </h2>
      </div>
      {/* Menu */}
      <div onClick={()=>setOpenMenu(true)} className="justify-end flex">
        <MdMenu size={30} />
      </div>
      {/* Search */}
      <div className=" col-span-2">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              title="serach"
              placeholder="جستجو نام, برند,..."
              id="search-dropdown"
              className="block p-1.5 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-[#5cc1b9] focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-1.5 w-28 font-medium h-full text-xs text-white bg-[#5cc1b9] rounded-e-2xl border  hover:bg-[#23867d] focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterHederMobile;
