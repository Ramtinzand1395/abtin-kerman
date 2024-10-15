import React, { useEffect, useState } from "react";
import { FaUser } from "react-icons/fa";
import LoginModall from "../loginModall/LoginModall";
import { FiEdit, FiShoppingBag } from "react-icons/fi";
import { useShopingcard } from "../context/ShopingCard";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MenuData } from "./menuData";
import { User } from "../../types";
import { IoEnterOutline, IoExitOutline } from "react-icons/io5";
import LoginDropDown from "../utils/LoginDropDown";
const headerVariant = {
  hidden: {
    opacity: 0,

    height: "0vh",
    transitionEnd: {
      display: "none",
    },
  },
  visible: {
    display: "block",
    opacity: 1,
    height: "30vh",
    transition: { duration: 0.5, type: "tween" },
  },
};
const MonitorMenu: React.FC = () => {
  const [isHovered, setIsHovered] = useState({
    menu1: false,
    menu2: false,
    menu3: false,
    menu4: false,
  });
  const [StickyNavbar, setStickyNavbar] = useState(false);
  const ChangeNavbar = () => {
    if (window.scrollY >= 500) {
      setStickyNavbar(true);
    } else {
      setStickyNavbar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", ChangeNavbar);
    return () => {
      window.removeEventListener("scroll", ChangeNavbar);
    };
  }, []);

  const [OpenModall, setOpenModall] = useState(false);
  const [User, setUser] = useState<User | null>(null);

  // !DROP ITHEMS
  const DropdownIthem = {
    text1: "ورود به داشبورد",
    icon1: IoEnterOutline,
    link1: `/dashboard/${User?._id}`,
    text2: "ویرایش حساب کاربری",
    icon2: FiEdit,
    text4: "خروج از حساب",
    icon4: IoExitOutline,
    link4: "exite",
    title: "خوش آمدید",
  };
  const { CardItems, setOpenMiniShoppingcard } = useShopingcard();
  const [isLogedIn, setisLogedIn] = useState(false);
  useEffect(() => {
    const isLogedin = localStorage.getItem("User");
    if (isLogedin) {
      setisLogedIn(true);
      return;
    } else {
      setisLogedIn(false);
    }
  }, [User]);
  // console.log(isLogedIn,"isLogedIn");
  // console.log(User, "user");
  return (
    <div
      className={`flex items-center  justify-between p-4  border-t-2 border-b-2  border-black ${
        StickyNavbar
          ? "fixed top-0 my-0 z-20 bg-primary text-white w-full"
          : "block my-10"
      }`}
    >
      {/* menu */}
      <ul className="flex items-center justify-around w-full whitespace-nowrap relative">
        <Link to={"/"}>
          <li className="cursor-pointer">خانه</li>
        </Link>
        {MenuData.map((data) => (
          <li
            key={data.id} // Use unique key for each item
            onMouseEnter={() => setIsHovered({ ...isHovered, [data.id]: true })}
            onMouseLeave={() =>
              setIsHovered({ ...isHovered, [data.id]: false })
            }
            className="cursor-pointer "
          >
            {data.title}
            <motion.div
              initial="hidden"
              animate={isHovered[data.id as keyof typeof isHovered] ? "visible" : "hidden"}
              variants={headerVariant}
              className="bg-white border-b-2 border-gray-600 w-[95vw] absolute right-0 top-12 z-20 cursor-pointer"
            >
              <div className="flex items-start justify-around">
                {data.items.map((item, index) => (
                  <ul key={index}>
                    <li className="font-bold font-tanha my-3 text-secondery">
                      {item.title}
                    </li>
                    {item.options.map((option, i) => (
                      <li
                        key={i}
                        className="text-gray-600 mb-2 hover:text-primary hover:scale-105"
                      >
                        <Link to={option.link}>{option.label}</Link>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </motion.div>
          </li>
        ))}
        {/* <li>لوازم گیمینگ</li> */}

        {/* <li
          onMouseEnter={() => setIsHovered({ ...isHovered, menu1: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, menu1: false })}
          className="cursor-pointer"
        >
          کنسول بازی
          <motion.div
            initial="hidden"
            animate={isHovered.menu1 ? "visible" : "hidden"}
            variants={headerVariant}
            className="bg-white border-b-2 border-gray-600 w-[95vw]  absolute right-0 top-11 z-20 cursor-pointer"
          >
            <div className={`flex items-start justify-around`}>
              <ul className="">
                <li className="font-bold font-tanha my-3 text-secondery">
                  <Link to={"/products/playstations"}>پلی استیشن</Link>
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  <Link to={"/products/playstation-5"}>پلی استیشن 5</Link>
                </li>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  <Link to={"/products/playstation-4"}>پلی استیشن 4</Link>
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
        </li> */}
        {/* <li
          onMouseEnter={() => setIsHovered({ ...isHovered, menu2: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, menu2: false })}
          className="cursor-pointer"
        >
          لوازم جانبی{" "}
          <motion.div
            initial="hidden"
            animate={isHovered.menu2 ? "visible" : "hidden"}
            variants={headerVariant}
            className="bg-white border-b-2 border-gray-600 w-[95vw]  absolute right-0 top-11 z-10 cursor-pointer"
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
        </li> */}
        {/* <li
          onMouseEnter={() => setIsHovered({ ...isHovered, menu3: true })}
          onMouseLeave={() => setIsHovered({ ...isHovered, menu3: false })}
          className="cursor-pointer"
        >
          بازی ها{" "}
          <motion.div
            initial="hidden"
            animate={isHovered.menu3 ? "visible" : "hidden"}
            variants={headerVariant}
            className="bg-white border-b-2 border-gray-600 w-[95vw]  absolute right-0 top-11 z-10 cursor-pointer"
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
                <Link to={`/games/accountgames`}>
                  <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                    بازی های قانونی
                  </li>
                </Link>
                <li className="text-gray-600 mb-2 hover:text-primary hover:scale-105">
                  گیم پس
                </li>
              </ul>
            </div>
            <p className="font-bold mt-5 mx-10 text-primary">
              برای تهیه بازی به صورت آفلاین برای ایکس باکس یا پلی استیشن به صورت
              حضوری مراجعه فرمایید.
            </p>
          </motion.div>
        </li> */}
      </ul>
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
            <FaUser
              className={`ml-2 ${StickyNavbar ? "text-white" : "text-black"}`}
              size={20}
            />
            <p
              onClick={() => setOpenModall(true)}
              className={`cursor-pointer whitespace-nowrap ${
                StickyNavbar ? "text-white" : "text-black"
              }`}
            >
              ورود/ثبت نام
            </p>
          </div>
        </div>
      )}
      <div className="flex items-center mr-10">
        <button
          onClick={() => setOpenMiniShoppingcard(true)}
          className="relative text-white p-3 rounded-lg text-sm uppercase font-semibold tracking-tight overflow-visible"
        >
          <FiShoppingBag
            className={`ml-2 ${StickyNavbar ? "text-white" : "text-black"}`}
            size={20}
          />

          <div className="absolute -top-3 -right-3 px-2.5 py-0.5 bg-red-500 rounded-full text-xs">
            {CardItems.length > 0 ? CardItems.length : 0}
          </div>
        </button>
      </div>

      {OpenModall && (
        <LoginModall setUser={setUser} setOpenModall={setOpenModall} />
      )}
    </div>
  );
};

export default MonitorMenu;
