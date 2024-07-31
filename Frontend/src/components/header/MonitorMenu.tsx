import React, { useState } from "react";
import { motion } from "framer-motion";
const headerVariant = {
  hidden: {
    opacity: 0,
    x: "800px",
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    display: "block",
    opacity: 1,
    x: "0px",
    transition: { duration: 0.5, type: "tween" },
  },
};
const MonitorMenu = () => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex items-center container mx-auto justify-between p-4 my-10 border-t-2 border-b-2  border-black">
      {/* menu */}
      <div className="grid grid-cols-7 w-auto relative">
        <p
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          گوشی هوشمند
          <motion.div
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={headerVariant}
            className="bg-white border-2 border-black w-full h-[20vh] absolute top-10 z-10"
          >
            asd
          </motion.div>
        </p>
        <p>لپ تاپ</p>
        <p>هدفون و هندزفری</p>
        <p>ساعت هوشمند</p>
        <p>قاب و محافظ</p>
        <p>اسپیکر</p>
        <p>گجت های پوشیدنی</p>
      </div>
      <div className="">
        <p>بزرگترین حراج آنلاین رو از دست نده!</p>
      </div>
    </div>
  );
};

export default MonitorMenu;
