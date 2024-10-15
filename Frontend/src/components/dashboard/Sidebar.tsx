import React, { useState } from "react";

import "./sidebar.css";
// import { sidebarItems } from "./DashData";
import { Link } from "react-router-dom";
import { FaComment, FaHome, FaPowerOff, FaProductHunt, FaTags } from "react-icons/fa";
import { MdManageAccounts } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { IoGameControllerOutline } from "react-icons/io5";
import { GrGallery } from "react-icons/gr";
import { SiCkeditor4, SiRockstargames } from "react-icons/si";

const Sidebar: React.FC = () => {
  const userJson = localStorage.getItem("User");
  const User = userJson ? JSON.parse(userJson) : null;
  const sidebarItems = [
    {
      id: 1,
      label: "خانه",
      icon: <FaHome size={30} />,
      helperTxt: "بازگشت به صفحه نخست",
      path: "/",
    },
    {
      id: 2,
      label: "مدیریت محصولات",
      icon:<SiRockstargames size={30}  />,
      helperTxt: "مدیریت محصولات ",

      path: `/dashboard/product-management/${User?._id}`,
    },
    {
      id: 3,
      label: "سفارشات",
      icon: <IoIosListBox size={30} />,
      helperTxt: "سفارشات",
      path: "/orders",
    },
    {
      id: 4,
      label: "کاربران",
      icon: <MdManageAccounts size={30} />,
      helperTxt: "کاربران",
      path: "/user-manneger",
    },
    {
      id: 5,
      label: "ساخت اکانت بازی جدید",
      icon: <IoGameControllerOutline size={30} />,
      helperTxt: "ساخت اکانت بازی جدید",
      path: `/dashboard/account-game-manneger/${User?._id}`,
    },
    {
      id: 6,
      label: "ساخت اکانت بازی جدید",
      icon: <GrGallery  size={30} />,
      helperTxt: "ساخت اکانت بازی جدید",
      path: `/dashboard/gallery/${User?._id}`,
    },
    {
      id: 7,
      label: "دسته بندی و تگ ها",
      icon: <FaTags  size={30} />,
      helperTxt: "دسته بندی و تگ ها",
      path: `/dashboard/tags/${User?._id}`,
    },
    {
      id: 8,
      label: "ساخت محول جدید",
      icon: <FaProductHunt   size={30} />,
      helperTxt: "ساخت محول جدید",
      path: `/dashboard/create-product/${User?._id}`,
    },
    {
      id:9,
      label: "مدیرین نظرات",
      icon: <FaComment   size={30} />,
      helperTxt: "مدیرین نظرات",
      path: `/dashboard/comment-manegment/${User?._id}`,
    },
    {
      id:10,
      label: "مقالات",
      icon: <SiCkeditor4   size={30} />,
      helperTxt: "مقالات",
      path: `/dashboard/weblog/${User?._id}`,
    },
  ];

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div
      className={`h-full min-h-screen bg-primary flex flex-col transition-all ease-in-out   duration-200 ${
        openSidebar ? "w-56 " : "w-16  items-center"
      }`}
    >
      <div className="flex items-center justify-between">
        <div
          className={`cursor-pointer mb-2 toggle ${
            openSidebar ? "active" : ""
          }`}
          onClick={toggleSidebar}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`${
            openSidebar ? "visible" : "hidden"
          } cursor-pointer mt-2 mr-2`}
        >
         <FaPowerOff size={30} color="white"  className="m-2"/>
        </div>
      </div>

      <Link to={"/User-Information"}>
        <div
          className={`flex items-center justify-center  flex-col md:flex-row md:justify-start my-2  pb-2 ${
            openSidebar ? "border-b-2 " : "border-b-0 "
          } `}
        >
          {/* {User && User?.profile ? (
            <img
              src={User?.profile}
              className="rounded-full border-2 border-white w-10 h-10 mx-2"
              alt="User.profile"
            />
          ) : ( */}
          <svg
            className="w-8 h-8 mx-2"
            clipRule="evenodd"
            fill="#fff"
            fillRule="evenodd"
            imageRendering="optimizeQuality"
            shapeRendering="geometricPrecision"
            textRendering="geometricPrecision"
            viewBox="0 0 100 100"
            xmlns="http://www.w3.org/2000/svg"
            id="fi_5653974"
          >
            <g id="Layer_x0020_1">
              <path
                d="m50 24.34c9.75 0 17.66 7.91 17.66 17.66 0 1.82-.27 3.57-.78 5.22 8.81 5.71 14.2 15.5 14.2 26.09 0 3.09-4.69 3.09-4.69 0 0-8.79-4.33-16.9-11.5-21.8-3.14 4.9-8.64 8.16-14.89 8.16s-11.75-3.26-14.89-8.16c-7.17 4.9-11.5 13.01-11.5 21.8 0 3.09-4.69 3.09-4.69 0 0-10.59 5.39-20.38 14.2-26.09-.51-1.65-.78-3.4-.78-5.22 0-9.75 7.91-17.66 17.66-17.66zm0-22.28c26.47 0 47.94 21.47 47.94 47.94s-21.47 47.94-47.94 47.94-47.94-21.47-47.94-47.94 21.47-47.94 47.94-47.94zm0 4.69c-23.88 0-43.25 19.37-43.25 43.25s19.37 43.25 43.25 43.25 43.25-19.37 43.25-43.25-19.37-43.25-43.25-43.25zm0 22.28c-7.16 0-12.97 5.81-12.97 12.97 0 7.17 5.81 12.97 12.97 12.97s12.97-5.8 12.97-12.97c0-7.16-5.81-12.97-12.97-12.97z"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
          {/* )} */}
          <div
            className={`${
              openSidebar ? "block" : "hidden"
            } flex flex-col text-white`}
          >
            <span className=" text-white">Domin Url</span>
            <span className=" text-white">cv</span>
          </div>
        </div>
      </Link>

      {sidebarItems.map((item) =>
        openSidebar ? (
          <button
            key={item.id}
            className={`my-2 p-2  flex text-sm transition-all hover:bg-white hover:text-primary ease-in-out duration-200 hover:font-bold rounded-l-full  ${
              location.pathname === item.path
                ? "font-bold bg-blue-100 text-[#0007ff]"
                : "font-normal  text-white"
            } `}
          >
            {item.path === "them" ? (
              <a
              //   href={`
              // https://${DomainData?.base_domain}.taktiko.io/toolbar/?editcode:${Username}`}
              >
                <div
                  className={`flex items-center ${location.pathname === item.path ? "text-red-500" : "text-white"}`}
                  style={{
                    fill: location.pathname === item.path ? "#0007ff" : "white",
                    transition: "fill 0.3s ease",
                  }}
                >
                  {item.icon}
                  <p className="mr-2">{item.label}</p>
                </div>
              </a>
            ) : (
              <Link className={`flex items-center `} to={item.path}>
                <div
                  className={`${location.pathname === item.path ? "text-red-500" : "text-white"}`}
                  style={{
                    fill: location.pathname === item.path ? "#0007ff" : "white",
                    transition: "fill 0.3s ease",
                  }}
                >
                  {item.icon}
                </div>
                <p className="mr-2 font-tanha ">{item.label}</p>
                <div
                  className={`bg-black rigth-5 rounded-lg py-1 px-3 absolute z-10 helper`}
                >
                  <span className="text-xs text-white bg-secondery">
                    {item.helperTxt}
                  </span>
                </div>
              </Link>
            )}
          </button>
        ) : item.path === "them" ? (
          <a
            className={`icon `}
            // href={`https://${DomainData?.base_domain}.taktiko.io/toolbar/?editcode=${Username}`}
          >
            <div
              className={`flex items-center ${location.pathname === item.path ? "text-red-500" : "text-white"}`}
              style={{
                fill: location.pathname === item.path ? "#0007ff" : "white",
                transition: "fill 0.3s ease",
              }}
            >
              {item.icon}
              <div
                className={`bg-blue-500 left-5 rounded-lg py-1 px-3 absolute z-10 helper`}
              >
                <span className="text-xs text-white bg-secondery">
                  {item.helperTxt}
                </span>
              </div>
            </div>
          </a>
        ) : (
          <Link
            className={`icon bg-white w-full  rounded-r-full my-2 flex items-center justify-center p-2 ${
              location.pathname === item.path ? "bg-blue-100" : ""
            } `}
            key={item.id}
            to={item.path}
          >
            <div
              style={{
                fill: location.pathname === item.path ? "red" : "#062348",
                transition: "fill 0.3s ease",
              }}
            >
              {item.icon}
            </div>
            <div
              className={`text-white bg-secondery text-bl right-5 rounded-lg py-1 px-3 absolute z-10 helper`}
            >
              <span className="text-xs ">{item.helperTxt}</span>
            </div>
          </Link>
        )
      )}
    </div>
  );
};

export default Sidebar;
