import React, { useState } from "react";

import "./sidebar.css";
// import { sidebarItems } from "./DashData";
import { Link } from "react-router-dom";
import { FaComment, FaHome, FaPowerOff, FaTags, FaUser } from "react-icons/fa";
import { MdEdit, MdManageAccounts } from "react-icons/md";
import { IoIosListBox } from "react-icons/io";
import { SiCkeditor4, SiRockstargames } from "react-icons/si";
import { RiGalleryFill } from "react-icons/ri";

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
    // ? ADMIN
    ...(User?.isAdmin
      ? [
          {
            id: 2,
            label: "مدیریت محصولات",
            icon: <SiRockstargames size={30} />,
            helperTxt: "مدیریت محصولات ",
            path: `/dashboard/product-management/${User?._id}`,
          },
          {
            id: 3,
            label: "سفارشات",
            icon: <IoIosListBox size={30} />,
            helperTxt: "سفارشات",
            path: `/dashboard/orders/${User?._id}`,
          },
          {
            id: 4,
            label: "کاربران",
            icon: <MdManageAccounts size={30} />,
            helperTxt: "کاربران",
            path: `/user-manneger/${User?._id}`,
          },
          {
            id: 5,
            label: "گالری عکس",
            icon: <RiGalleryFill size={30} />,
            helperTxt: "گالری عکس",
            path: `/dashboard/gallery/${User?._id}`,
          },
          {
            id: 7,
            label: "دسته بندی و تگ ها",
            icon: <FaTags size={30} />,
            helperTxt: "دسته بندی و تگ ها",
            path: `/dashboard/tags/${User?._id}`,
          },

          {
            id: 9,
            label: "مدیرین نظرات",
            icon: <FaComment size={30} />,
            helperTxt: "مدیرین نظرات",
            path: `/dashboard/comment-manegment/${User?._id}`,
          },
          {
            id: 10,
            label: "مقالات",
            icon: <SiCkeditor4 size={30} />,
            helperTxt: "مقالات",
            path: `/dashboard/weblog/${User?._id}`,
          },
        ]
      : [
          {
            id: 2,
            label: "اطلاعات حساب",
            icon: <FaUser size={30} />,
            helperTxt: "اطلاعات حساب",
            path: `/dashboard/userInfo/${User?._id}`,
          },
          {
            id: 2,
            label: "ویرایش اطلاعات حساب",
            icon: <MdEdit  size={30} />,
            helperTxt: "ویرایش اطلاعات حساب",
            path: `/dashboard/editeUserInfo/${User?._id}`,
          },
        ]),
  ];

  const [openSidebar, setOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setOpenSidebar(!openSidebar);
  };

  return (
    <div
      className={`h-full min-h-screen bg-primary flex flex-col   transition-all pr-2 ease-in-out sticky top-0  duration-200 ${
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
          <FaPowerOff size={30} color="white" className="m-2" />
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
            <span className=" text-white">admin</span>
          </div>
        </div>
      </Link>

      {sidebarItems?.map((item) =>
        openSidebar ? (
          <button
            key={item.id}
            className={`my-2 p-2  flex text-sm transition-all hover:bg-white  ease-in-out duration-200 hover:font-bold hover:text-black rounded-l-full  ${
              location.pathname === item.path
                ? "font-bold bg-white text-blue-500"
                : "font-normal  text-white"
            } `}
          >
            <Link className={`flex items-center `} to={item.path}>
              <div
                className={`hover:text-black ${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-white"
                }`}
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
          </button>
        ) : (
          <Link
            className={`icon  w-full  rounded-r-full my-2 flex items-center justify-center p-2 ${
              location.pathname === item.path
                ? "font-bold bg-white text-blue-500"
                : "font-normal  text-white"
            } `}
            key={item.id}
            to={item.path}
          >
            <div>{item.icon}</div>
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
