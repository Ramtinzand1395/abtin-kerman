import React, { useState } from "react";
import logo from "../../assets/atari-seeklogo.svg";
interface CenterHederMobileProps {
  setOpenMenu: (open: boolean) => void;
}
const CenterHederMobile: React.FC<CenterHederMobileProps> = ({
  setOpenMenu,
}) => {
  const [StickyMobileNavbar, setStickyMobileNavbar] = useState(false);
  const ChangeMobileNavbar = () => {
    if (window.scrollY >= 150) {
      setStickyMobileNavbar(true);
    } else {
      setStickyMobileNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeMobileNavbar);
  return (
    <div className="">
      <div
        className={`flex items-center justify-between bg-primary text-white p-4 ${
          StickyMobileNavbar ? "fixed w-full top-0 z-20 " : "block"
        }`}
      >
        {/* Menu */}
        <div onClick={() => setOpenMenu(true)} className="justify-start flex">
          <svg
            width="30px"
            height="30px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#fff"
          >
            <path
              fill="#fff"
              d="M4 6H20M4 12H20M4 18H20"
              stroke="#fff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        {/* Logo */}
        <div className="flex items-center text-2xl">
          <h2 className="font-bold mr-2">کرمان آتاری</h2>
          <img src={logo} className="w-10 h-10 " alt="Logo" />
        </div>
      </div>
    </div>
  );
};

export default CenterHederMobile;
