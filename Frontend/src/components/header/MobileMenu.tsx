import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { motion } from "framer-motion";
const headerVariant = {
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
    <div className="relative">
      <motion.div
        initial="hidden"
        animate={OpenMenu ? "visible" : "hidden"}
        variants={headerVariant}
        className="bg-white h-[100vh] fixed top-10 rigth-0 z-10"
      >
        <MdClose onClick={() => setOpenMenu(false)} />
        <ul className="flex flex-col items-center h-full justify-evenly w-full whitespace-nowrap relative">
          <li
            onMouseEnter={() => setIsHovered({ ...isHovered, menu1: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, menu1: false })}
            className="cursor-pointer"
          >
            کنسول بازی
            <motion.div
              initial="hidden"
              animate={isHovered.menu1 ? "visible" : "hidden"}
              variants={headerVariant}
              className="bg-white border-b-2 border-gray-600 w-[95vw] mx-0 absolute right-0 top-11 z-10 cursor-pointer"
            >
              <div className={`flex items-start justify-around`}>
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
            onClick={() => setIsHovered({ ...isHovered, menu2: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, menu2: false })}
            className="cursor-pointer"
          >
            لوازم جانبی{" "}
            <motion.div
              initial="hidden"
              animate={isHovered.menu2 ? "visible" : "hidden"}
              variants={headerVariant}
              className="bg-white border-b-2 border-gray-600 w-[95vw] mx-0 absolute right-0 top-11 z-10 cursor-pointer"
            >
              <div className={`flex items-start justify-around`}>
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
            onMouseEnter={() => setIsHovered({ ...isHovered, menu3: true })}
            onMouseLeave={() => setIsHovered({ ...isHovered, menu3: false })}
            className="cursor-pointer"
          >
            بازی ها{" "}
            <motion.div
              initial="hidden"
              animate={isHovered.menu3 ? "visible" : "hidden"}
              variants={headerVariant}
              className="bg-white border-b-2 border-gray-600 w-[95vw] mx-0 absolute right-0 top-11 z-10 cursor-pointer"
            >
              <div className={`flex items-start justify-around`}>
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
              <p className="font-bold mt-5 mx-10 text-primary">
                برای تهیه بازی به صورت آفلاین برای ایکس باکس یا پلی استیشن به
                صورت حضوری مراجعه فرمایید.
              </p>
            </motion.div>
          </li>
          <li>لوازم گیمینگ</li>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileMenu;
