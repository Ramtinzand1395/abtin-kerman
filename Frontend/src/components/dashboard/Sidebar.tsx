import React, { useState } from "react";

import "./sidebar.css";
// import { sidebarItems } from "./DashData";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

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
      icon: (
        <svg
          id="Layer_1"
          enableBackground="new 0 0 512 512"
          className="w-7 h-7 "
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="m231.28 12.132 64.196 37.063-208.13 120.164v89.042c0 3.558 1.764 6.613 4.846 8.392l48.244 27.854c1.541.889 3.304.889 4.845 0 1.541-.89 2.423-2.417 2.423-4.196v-86.244l208.129-120.164 64.196 37.064c6.163 3.558 9.69 9.668 9.69 16.784v156.574l-4.262 3.086c-2.031-.924-4.093-1.779-6.181-2.564l-5.923-37.073h-78.179l-5.923 37.003c-2.089.785-4.151 1.64-6.182 2.564l-30.356-21.978-41.138 41.138 21.98 30.358c-.924 2.03-1.778 4.092-2.563 6.18l-37.005 5.924v58.178l37.006 5.924c.784 2.088 1.639 4.149 2.562 6.18l-20.142 27.819-42.134 24.326c-6.163 3.558-13.218 3.558-19.38 0l-188.749-108.977c-6.163-3.558-9.69-9.668-9.69-16.784v-217.949c0-7.117 3.527-13.226 9.69-16.784l188.749-108.974c6.163-3.558 13.218-3.558 19.381 0zm173.756 295.122-5.325-33.27h-30.894l-5.325 33.27c-7.763 1.985-15.09 5.057-21.811 9.044l-27.3-19.765-21.845 21.845 19.767 27.301c-3.986 6.721-7.058 14.048-9.042 21.809l-33.272 5.326v30.894l33.272 5.326c1.986 7.761 5.057 15.089 9.043 21.81l-19.767 27.301 21.845 21.845 27.301-19.766c6.721 3.986 14.048 7.059 21.81 9.044l5.325 33.27h30.894l5.326-33.272c7.762-1.986 15.089-5.057 21.81-9.043l27.301 19.766 21.845-21.845-19.766-27.301c3.986-6.721 7.06-14.048 9.044-21.81l33.271-5.326v-30.894l-33.272-5.326c-1.986-7.761-5.057-15.089-9.043-21.81l19.767-27.301-21.845-21.845-27.3 19.766c-6.724-3.985-14.051-7.059-21.814-9.043zm-20.772 35.359c-25.21 0-45.647 20.437-45.647 45.647s20.437 45.647 45.647 45.647 45.647-20.437 45.647-45.647-20.437-45.647-45.647-45.647z"
            fillRule="evenodd"
          />
        </svg>
      ),
      helperTxt: "مدیریت محصولات ",

      path: `/dashboard/product-management/${User?._id}`,
    },
    {
      id: 3,
      label: "سفارشات",
      icon: (
        <svg
          id="Layer_1"
          className="w-7 h-7 "
          viewBox="0 0 512 512"
          xmlns="http://www.w3.org/2000/svg"
          data-name="Layer 1"
        >
          <path
            d="m284.7 178.035a13.459 13.459 0 0 0 -13.474-13.477h-203.198a13.477 13.477 0 0 0 0 26.953h203.2a13.458 13.458 0 0 0 13.472-13.476zm-29.773 77.965a13.458 13.458 0 0 0 -13.474-13.476h-173.425a13.476 13.476 0 0 0 0 26.952h173.425a13.458 13.458 0 0 0 13.474-13.476zm-200.375 77.885a13.461 13.461 0 0 0 13.476 13.476h108.3a13.476 13.476 0 0 0 0-26.952h-108.3a13.513 13.513 0 0 0 -13.476 13.476zm136.948 77.965a13.458 13.458 0 0 0 -13.474-13.476h-110a13.476 13.476 0 0 0 0 26.952h110a13.458 13.458 0 0 0 13.474-13.476zm-174.82-287.317 76.1-74.265v74.265zm322.572 84.639-122.763 122.755a13.482 13.482 0 0 0 -3.943 9.8l1.507 69.142a13.527 13.527 0 0 0 13.171 13.254l69.082 1.443h.389a13.445 13.445 0 0 0 9.531-3.9l33.026-33.009v91.53h-339.252v-328.7h91.4a28.33 28.33 0 0 0 28.326-28.315v-9.544h151.5a13.477 13.477 0 0 0 0-26.953h-151.5v-54.864h219.526zm115.612-77.484a18.924 18.924 0 0 1 26.793.016l24.812 24.785a19.007 19.007 0 0 1 .009 26.8l-8.526 8.567-51.648-51.7zm-27.595 27.57-10.391 10.342 51.65 51.7 10.34-10.491-51.6-51.559zm-150.124 238.971-37.228-37.255.795 36.418zm26.255-11.872-51.629-51.588 146.056-146.08 51.629 51.588z"
            fillRule="evenodd"
          />
        </svg>
      ),
      helperTxt: "سفارشات",
      path: "/orders",
    },
    {
      id: 4,
      label: "کاربران",
      icon: (
        <svg
          enableBackground="new 0 0 24 24"
          className="w-7 h-7 "
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="9" cy="5" r="5" />
          <path d="m11.534 20.8c-.521-.902-.417-2.013.203-2.8-.62-.787-.724-1.897-.203-2.8l.809-1.4c.445-.771 1.275-1.25 2.166-1.25.122 0 .242.009.361.026.033-.082.075-.159.116-.237-.54-.213-1.123-.339-1.736-.339h-8.5c-2.619 0-4.75 2.131-4.75 4.75v3.5c0 .414.336.75.75.75h10.899z" />
          <path d="m21.703 18.469c.02-.155.047-.309.047-.469 0-.161-.028-.314-.047-.469l.901-.682c.201-.152.257-.43.131-.649l-.809-1.4c-.126-.218-.395-.309-.627-.211l-1.037.437c-.253-.193-.522-.363-.819-.487l-.138-1.101c-.032-.25-.244-.438-.496-.438h-1.617c-.252 0-.465.188-.496.438l-.138 1.101c-.297.124-.567.295-.819.487l-1.037-.437c-.232-.098-.501-.008-.627.211l-.809 1.4c-.126.218-.07.496.131.649l.901.682c-.02.155-.047.309-.047.469 0 .161.028.314.047.469l-.901.682c-.201.152-.257.43-.131.649l.809 1.401c.126.218.395.309.627.211l1.037-.438c.253.193.522.363.819.487l.138 1.101c.031.25.243.438.495.438h1.617c.252 0 .465-.188.496-.438l.138-1.101c.297-.124.567-.295.819-.487l1.037.437c.232.098.501.008.627-.211l.809-1.401c.126-.218.07-.496-.131-.649zm-3.703 1.531c-1.105 0-2-.895-2-2s.895-2 2-2 2 .895 2 2-.895 2-2 2z" />
        </svg>
      ),
      helperTxt: "کاربران",
      path: "/user-manneger",
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
          <svg
            id="fi_2529508"
            viewBox="0 0 6.3499999 6.3500002"
            className="w-10 h-10"
            fill="#ffffff"
            xmlns="http://www.w3.org/2000/svg"
            // onClick={() => handleLogOut()}
          >
            <g id="layer1" transform="translate(0 -290.65)">
              <path
                id="path52"
                d="m3.1721577 291.17917a.26463566.26580324 0 0 0 -.262025.26889v2.12674a.26486756.26603617 0 0 0 .5297351 0v-2.12674a.26463566.26580324 0 0 0 -.2677101-.26889zm1.5437259.53311a.26463566.26580324 0 0 0 -.025842.00052.26463566.26580324 0 0 0 -.1467753.46926c.4583643.39096.7483457.97287.7483479 1.62632.0000018 1.17989-.9432648 2.13089-2.1153231 2.13089-1.1720581 0-2.1173921-.951-2.1173901-2.13089.000002-.64967.2862991-1.22762.7400788-1.61853a.26467261.26584036 0 1 0 -.343681-.40438c-.5664588.48798-.92612958 1.21533-.92613207 2.02291-.00000238 1.46669 1.18858337 2.66244 2.64712517 2.66244 1.4585422 0 2.6445438-1.19575 2.6445414-2.66244-.0000027-.81229-.3632264-1.54263-.9354347-2.03069a.26463566.26580324 0 0 0 -.1695153-.0654z"
                font-variant-ligatures="normal"
                font-variant-position="normal"
                font-variant-caps="normal"
                font-variant-numeric="normal"
                font-variant-alternates="normal"
                font-feature-settings="normal"
                text-indent="0"
                text-align="start"
                text-decoration-line="none"
                text-decoration-style="solid"
                text-decoration-color="rgb(0,0,0)"
                text-transform="none"
                text-orientation="mixed"
                white-space="normal"
                shape-padding="0"
                mix-blend-mode="normal"
                solid-color="rgb(0,0,0)"
                solid-opacity="1"
                vectorEffect="none"
              ></path>
            </g>
          </svg>
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
                  className="flex items-center"
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
                  className=""
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
              className="flex items-center"
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
