import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import SearchProducts from "./SearchProducts";
import { MenuData } from "./menuData";
import LoginDropDown from "../utils/LoginDropDown";
import LoginModall from "../loginModall/LoginModall";
import MiniShoppingCard from "../shopping card/MiniShoppingCard";

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
  isLogedIn: boolean;
  setOpenModall: React.Dispatch<React.SetStateAction<boolean>>;
  OpenModall: boolean;
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  DropdownIthem: DropdownItem;
  setOpenMiniShoppingcard: React.Dispatch<React.SetStateAction<boolean>>;
  cardQty: number;
  OpenMiniShoppingcard: boolean;
}
interface DropdownItem {
  text1: string;
  icon1: React.ReactNode; // Assuming this is a component type for icons
  link1: string;
  text2: string;
  icon2: React.ReactNode; // Assuming this is a component type for icons
  text4: string;
  icon4: React.ReactNode; // Assuming this is a component type for icons
  link4: string;
  title: string;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  setOpenMenu,
  OpenMenu,
  setOpenMiniShoppingcard,
  cardQty,
  OpenMiniShoppingcard,
  isLogedIn,
  setOpenModall,
  OpenModall,
  setUser,
  DropdownIthem,
}) => {
  const [isHovered, setIsHovered] = useState<number | null>(null);
  return (
    <div className="text-xs md:text-base">
      <motion.div
        initial="hidden"
        animate={OpenMenu ? "visible" : "hidden"}
        variants={OpenMenuVariant}
        className="bg-white border-l-2 border-black px-4 h-[100vh] fixed overflow-y-auto top-0 right-0 z-20"
      >
        <div className="flex items-center justify-between my-4">
          <h4>منو</h4>
          <svg
            onClick={() => setOpenMenu(false)}
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
              fill="#292D32"
            />
          </svg>
        </div>
        <div className="my-5 flex items-center justify-between">
          <div className="">
            <SearchProducts />
          </div>
          <div className="flex items-center mr-10 relative">
            <button
              onClick={() => setOpenMiniShoppingcard(true)}
              className="relative text-white py-3 rounded-lg text-sm uppercase font-semibold tracking-tight overflow-visible"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M16.5285 6C16.5098 5.9193 16.4904 5.83842 16.4701 5.75746C16.2061 4.70138 15.7904 3.55383 15.1125 2.65C14.4135 1.71802 13.3929 1 12 1C10.6071 1 9.58648 1.71802 8.88749 2.65C8.20962 3.55383 7.79387 4.70138 7.52985 5.75747C7.50961 5.83842 7.49016 5.9193 7.47145 6H5.8711C4.29171 6 2.98281 7.22455 2.87775 8.80044L2.14441 19.8004C2.02898 21.532 3.40238 23 5.13777 23H18.8622C20.5976 23 21.971 21.532 21.8556 19.8004L21.1222 8.80044C21.0172 7.22455 19.7083 6 18.1289 6H16.5285ZM8 11C8.57298 11 8.99806 10.5684 9.00001 9.99817C9.00016 9.97438 9.00044 9.9506 9.00084 9.92682C9.00172 9.87413 9.00351 9.79455 9.00718 9.69194C9.01451 9.48652 9.0293 9.18999 9.05905 8.83304C9.08015 8.57976 9.10858 8.29862 9.14674 8H14.8533C14.8914 8.29862 14.9198 8.57976 14.941 8.83305C14.9707 9.18999 14.9855 9.48652 14.9928 9.69194C14.9965 9.79455 14.9983 9.87413 14.9992 9.92682C14.9996 9.95134 14.9999 9.97587 15 10.0004C15 10.0004 15 11 16 11C17 11 17 9.99866 17 9.99866C16.9999 9.9636 16.9995 9.92854 16.9989 9.89349C16.9978 9.829 16.9957 9.7367 16.9915 9.62056C16.9833 9.38848 16.9668 9.06001 16.934 8.66695C16.917 8.46202 16.8953 8.23812 16.8679 8H18.1289C18.6554 8 19.0917 8.40818 19.1267 8.93348L19.86 19.9335C19.8985 20.5107 19.4407 21 18.8622 21H5.13777C4.55931 21 4.10151 20.5107 4.13998 19.9335L4.87332 8.93348C4.90834 8.40818 5.34464 8 5.8711 8H7.13208C7.10465 8.23812 7.08303 8.46202 7.06595 8.66696C7.0332 9.06001 7.01674 9.38848 7.00845 9.62056C7.0043 9.7367 7.00219 9.829 7.00112 9.89349C7.00054 9.92785 7.00011 9.96221 7 9.99658C6.99924 10.5672 7.42833 11 8 11ZM9.53352 6H14.4665C14.2353 5.15322 13.921 4.39466 13.5125 3.85C13.0865 3.28198 12.6071 3 12 3C11.3929 3 10.9135 3.28198 10.4875 3.85C10.079 4.39466 9.76472 5.15322 9.53352 6Z"
                  fill="#000"
                />
              </svg>
              <div className="absolute -top-2 right-0 px-2.5 py-0.5 bg-red-500 rounded-full text-xs">
                {cardQty}
              </div>
            </button>
            {OpenMiniShoppingcard && (
              <MiniShoppingCard
                setOpenMiniShoppingcard={setOpenMiniShoppingcard}
              />
            )}
          </div>
        </div>
        <div className="my-5">
          {isLogedIn ? (
            <div className="">
              <LoginDropDown
                setUser={setUser}
                DropdownIthem={DropdownIthem}
                setOpenModall={setOpenModall}
              />
            </div>
          ) : (
            <div className="flex items-center justify-between min-w-[20vw]">
              <div className="flex items-center">
                <svg
                  className="ml-5"
                  width="30px"
                  height="30px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    cx="12"
                    cy="9"
                    r="3"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M17.9691 20C17.81 17.1085 16.9247 15 11.9999 15C7.07521 15 6.18991 17.1085 6.03076 20"
                    stroke="#1C274C"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
                <p
                  onClick={() => setOpenModall(true)}
                  className={`cursor-pointer whitespace-nowrap `}
                >
                  ورود/ثبت نام
                </p>
              </div>
            </div>
          )}
        </div>
        <ul className="flex flex-col ">
          <Link to={"/"}>
            <li className="flex items-center mb-4 text-base justify-between w-32">
              <div className="flex items-center">
                <svg
                  width="15px"
                  height="15px"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-2"
                >
                  <path
                    d="M1 6V15H6V11C6 9.89543 6.89543 9 8 9C9.10457 9 10 9.89543 10 11V15H15V6L8 0L1 6Z"
                    fill="#6b7280"
                  />
                </svg>
                خانه
              </div>
            </li>
          </Link>
          {MenuData.map((menuItem, index) => (
            <li
              key={index}
              onClick={() => setIsHovered(isHovered === index ? null : index)}
              className="cursor-pointer"
            >
              <button className="flex items-center mb-4 text-base justify-between w-full">
                <div className="flex items-center">
                  <span className="ml-2">{menuItem.icon}</span>
                  {menuItem.title}
                </div>

                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                    fill="#000000"
                  />
                </svg>
              </button>
              <motion.div
                initial="hidden"
                animate={isHovered === index ? "visible" : "hidden"}
                variants={headerVariant}
                className="cursor-pointer"
              >
                <div className={`flex flex-col items-start justify-around`}>
                  {menuItem.items.map((subMenu, subIndex) => (
                    <ul key={subIndex}>
                      <li className="font-bold font-tanha my-3 text-secondery">
                        {subMenu.title}
                      </li>
                      {subMenu.options.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-gray-600 mb-2 hover:text-primary hover:scale-105"
                        >
                          <Link
                            onClick={() => setOpenMenu(false)}
                            to={item.link}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </motion.div>
            </li>
          ))}
        </ul>
        <div className="mt-5 mx-2 md:mx-10">
          <p className="font-bold text-primary">
            برای تهیه بازی به صورت آفلاین برای ایکس باکس یا پلی استیشن به صورت
            حضوری مراجعه فرمایید.
          </p>
        </div>

        {OpenModall && (
          <LoginModall setUser={setUser} setOpenModall={setOpenModall} />
        )}
      </motion.div>
    </div>
  );
};

export default MobileMenu;
