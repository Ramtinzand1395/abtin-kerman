import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
import { FaArrowDown } from "react-icons/fa6";
const OpenMenuVariant = {
  hidden: {
    width: "0vw",
    transitionEnd: {
      display: "none",
    },
    opacity: 0,
  },
  visible: {
    display: "block",
    opacity: 1,
    width: "60vw",
    transition: { duration: 0.5, type: "tween" },
  },
};
const headerVariant = {
  hidden: {
    transitionEnd: {
      display: "none",
    },
    opacity: 0,
  },
  visible: {
    display: "block",
    opacity: 1,
    transition: { duration: 0.5, type: "tween" },
  },
};
interface MobileMenuProps {
  OpenMenu: boolean;
  setOpenMenu: (open: boolean) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setOpenMenu, OpenMenu }) => {
  const [isHovered, setIsHovered] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });

  return (
    <div className=" text-xs md:text-base">
      <motion.div
        initial="hidden"
        animate={OpenMenu ? "visible" : "hidden"}
        variants={OpenMenuVariant}
        className="bg-white border-l-2 border-black h-[100vh] fixed overflow-y-auto top-0 rigth-0 z-10"
      >
        <div className="flex justify-end p-4">
          <MdClose
            onClick={() => setOpenMenu(false)}
            size={30}
            className="text-red-500 "
          />
        </div>
        <ul className="flex flex-col items-center ">
          <li
            onClick={() =>
              setIsHovered({ ...isHovered, menu1: !isHovered.menu1 , menu2:false ,menu3:false })
            }
            className="cursor-pointer"
          >
            <button className="flex items-center mb-4 text-base justify-between w-32">
              کنسول بازی
              <FaArrowDown />
            </button>
            <motion.div
              initial="hidden"
              animate={isHovered.menu1 ? "visible" : "hidden"}
              variants={headerVariant}
              className=" cursor-pointer"
            >
              <div className={`flex flex-col items-start justify-around`}>
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
                    کنسول های کلاسیک
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    پلی استشین 2
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    سوپر سگا
                  </li>
                </ul>
                <ul>
                  <li className="font-bold font-tanha my-3 text-secondery">
                    کنسول های کارکرده
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    پلی استشین 4
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    پلی استشین 3
                  </li>
                </ul>
              </div>
            </motion.div>
          </li>
          <li
            onClick={() =>
              setIsHovered({ ...isHovered, menu2: !isHovered.menu2 , menu1:false ,menu3:false })
            }
            className="cursor-pointer"
          >
            <button className="flex items-center mb-4 text-base justify-between w-32">
              لوازم جانبی <FaArrowDown />
            </button>
            <motion.div
              initial="hidden"
              animate={isHovered.menu2 ? "visible" : "hidden"}
              variants={headerVariant}
              className=" cursor-pointer"
            >
              <div className={`flex flex-col items-start justify-around`}>
                <ul className="">
                  <li className="font-bold font-tanha my-3 text-secondery">
                    لوازم پلی استیشن 5
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کنترلر
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    هدست{" "}
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    شارژر و استند{" "}
                  </li>{" "}
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کیف و کاور و اسکین{" "}
                  </li>
                </ul>
                <ul>
                  <li className="font-bold font-tanha my-3 text-secondery">
                    لوازم
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کنترلر{" "}
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    شارژر و استند{" "}
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    هدست{" "}
                  </li>{" "}
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کیف و کاور{" "}
                  </li>
                </ul>

                <ul>
                  <li className="font-bold font-tanha my-3 text-secondery">
                    لوازم پلی استیشن 4
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کنترلر{" "}
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    شارژر و استند{" "}
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    هدست{" "}
                  </li>{" "}
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کیف و کاور{" "}
                  </li>
                </ul>
                <ul>
                  <li className="font-bold font-tanha my-3 text-secondery">
                    لوازم ایکس باکس وان
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کنترلر{" "}
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    شارژر و استند{" "}
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    کیف و کاور{" "}
                  </li>
                </ul>
                <ul>
                  <li className="font-bold font-tanha my-3 text-secondery">
                    دیگر لوازم جانبی
                  </li>
                </ul>
              </div>
            </motion.div>
          </li>
          <li
            onClick={() =>
              setIsHovered({ ...isHovered, menu3: !isHovered.menu3 , menu1:false ,menu2:false })
            }
            className="cursor-pointer"
          >
            <button className="flex items-center mb-4 text-base justify-between w-32">
              بازی ها <FaArrowDown />
            </button>
            {/* here */}
            <motion.div
              initial="hidden"
              animate={isHovered.menu3 ? "visible" : "hidden"}
              variants={headerVariant}
              className=" cursor-pointer"
            >
              <div className={`flex flex-col items-start justify-around`}>
                <ul className="">
                  <li className="font-bold font-tanha my-3 text-secondery">
                    پلی استیشن 5
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    دیسک
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    اکانت بازی های ظرفیتی
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    پلی استیشین پلاس
                  </li>{" "}
                </ul>
                <ul className="">
                  <li className="font-bold font-tanha my-3 text-secondery">
                    پلی استیشن 4
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    دیسک
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    اکانت بازی های ظرفیتی
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    پلی استیشین پلاس
                  </li>{" "}
                </ul>

                <ul>
                  <li className="font-bold font-tanha my-3 text-secondery">
                    ایکس باکس
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    بازی های قانونی
                  </li>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    گیم پس
                  </li>
                </ul>
              </div>
            </motion.div>
          </li>
          <li>
            <button className="flex items-center mb-4 text-base justify-between w-32">
              لوازم گیمینگ
              <FaArrowDown />
            </button>
          </li>
        </ul>
      <div className="mt-5 mx-2 md:mx-10 ">
        <p className="font-bold  text-primary">
          برای تهیه بازی به صورت آفلاین برای ایکس باکس یا پلی استیشن به صورت
          حضوری مراجعه فرمایید.
        </p>
      </div>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
