import React, { useState } from "react";
import logo from "../../assets/atari-seeklogo.svg";
import { MdMenu } from "react-icons/md";
interface CenterHederMobileProps {
  setOpenMenu: (open: boolean) => void;
}
const CenterHederMobile: React.FC<CenterHederMobileProps> = ({
  setOpenMenu,
}) => {
  const [StickyMobileNavbar, setStickyMobileNavbar] = useState(false);
  const ChangeMobileNavbar = () => {
    if (window.scrollY >= 20) {
      setStickyMobileNavbar(true);
    } else {
      setStickyMobileNavbar(false);
    }
  };
  window.addEventListener("scroll", ChangeMobileNavbar);
  return (
    <div className="mx-2">
      <div
        className={`flex items-center justify-between my-2 ${
          StickyMobileNavbar ? "fixed bg-white w-full top-0 z-10 p-4" : "block"
        }`}
      >
        {/* Menu */}
        <div onClick={() => setOpenMenu(true)} className="justify-start flex">
          <MdMenu size={30} />
        </div>
        {/* Logo */}
        <div className="flex items-center text-2xl">
          <img src={logo} className="w-10 h-10 " alt="Logo" />
          <h2
            //   initial="start"
            //   animate="end"
            //   whileHover="hover"
            //   variants={headerVarient}
            className="font-bold mr-2"
          >
            کرمان آتاری
          </h2>
        </div>
      </div>
      {/* Search */}
      <div className=" my-3">
        <div className="flex">
          <div className="relative w-full">
            <input
              type="search"
              title="serach"
              placeholder="جستجو نام, برند,..."
              id="search-dropdown"
              className="block p-1.5 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
            />
            <button
              type="submit"
              className="absolute top-0 end-0 p-1.5 w-28 font-medium h-full text-xs text-white bg-secondery rounded-e-2xl border  hover:bg-primary  focus:ring-4 focus:outline-none focus:ring-blue-300 "
            >
              جستجو
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterHederMobile;
