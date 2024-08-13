import React, { useState } from "react";
import { motion } from "framer-motion";
const headerVariant = {
  hidden: {
    height: "0vh",
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    display: "block",
    opacity: 1,
    height: "25vh",
    transition: { duration: 0.5, type: "tween" },
  },
};
const MonitorMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [StickyNavbar, setStickyNavbar] = useState(false);
  const ChangeNavbar = () => {
    console.log("first")
    if (window.scrollY >= 150) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeNavbar);
  return (
    <div className={`flex items-center  justify-between p-4  border-t-2 border-b-2  border-black ${StickyNavbar ? "fixed top-0 my-0 z-10 bg-white w-full":"block my-10"}`}>
      {/* menu */}
      <ul className="flex items-center justify-evenly w-full whitespace-nowrap relative">
        <li
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="cursor-pointer"
        >
          کنسول بازی
          <motion.div
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={headerVariant}
            className="bg-white border-b-2 border-gray-600 w-[95vw] h-[20vh] absolute right-0 top-11 z-10 cursor-pointer"
          >
            <div className={`flex items-start justify-between`}>
              <ul className="">
                <li className="font-bold font-tanha my-3 text-secondery">
                  پلی استیشن
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  پلی استیشن 5
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  پلی استیشن 4
                </li>
              </ul>
              <ul>
                <li className="font-bold font-tanha my-3 text-secondery">
                  ایکس باکس
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  ایکس باکس سریز
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  ایکس باکس وان
                </li>
              </ul>
              <ul>
                <li className="font-bold font-tanha my-3 text-secondery">
                  نینتندو
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  سوییچ اولد
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  سوییچ استاندارد
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  سوییچ لایت
                </li>
              </ul>
              <ul>
                <li className="font-bold font-tanha my-3 text-secondery">
                  کنسول دستی
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  سیستم عامل استیم
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  سیستم عامل ویندوز
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  سیستم عامل اندروید
                </li>
              </ul>
              <ul>
                <li className="font-bold font-tanha my-3 text-secondery">
                  کنسول های کلاسیک
                </li>
              </ul>
              <ul>
                <li className="font-bold font-tanha my-3 text-secondery">
                  کنسول های کارکرده
                </li>
              </ul>
            </div>
          </motion.div>
        </li>
        <li>لوازم جانبی</li>
        <li>بازی ها</li>
        <li>لوازم گیمینگ</li>
        <li>واقعیت مجازی</li>
        <li>کلکسیونی</li>
      </ul>

      <div className="whitespace-nowrap">
        <p>بزرگترین حراج آنلاین رو از دست نده!</p>
      </div>
    </div>
  );
};

export default MonitorMenu;
