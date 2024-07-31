import React, { useState } from "react";
import Topheader from "./Topheader";
import Menu from "./MonitorMenu";
import CenterHederMobile from "./CenterHederMobile";
import CenterHederMonitor from "./CenterHederMonitor";
import MonitorMenu from "./MonitorMenu";
import MobileMenu from "./MobileMenu";
import { AnimatePresence } from "framer-motion";

const HeaderContainer = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Topheader />
      <div className="block md:hidden">
        <CenterHederMobile setOpenMenu={setOpenMenu} />
      </div>
      <div className=" hidden md:block">
        <CenterHederMonitor />
      </div>
      {OpenMenu && (
        <div className="block md:hidden">
            <MobileMenu setOpenMenu={setOpenMenu} OpenMenu={OpenMenu} />
        </div>
      )}
      <div className=" hidden md:block">
        <MonitorMenu />
      </div>
    </div>
  );
};

export default HeaderContainer;
