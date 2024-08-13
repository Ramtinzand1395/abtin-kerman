import React, { useState } from "react";
import Topheader from "./Topheader";
import CenterHederMobile from "./CenterHederMobile";
import CenterHederMonitor from "./CenterHederMonitor";
import MonitorMenu from "./MonitorMenu";
import MobileMenu from "./MobileMenu";

const HeaderContainer: React.FC = () => {
  const [OpenMenu, setOpenMenu] = useState(false);
  return (
    <div>
      <Topheader />
      <div className="block md:hidden relative">
        <CenterHederMobile setOpenMenu={setOpenMenu} />
      </div>
      <div className=" hidden md:block">
        <CenterHederMonitor />
      </div>

      <div className="block md:hidden">
        <MobileMenu setOpenMenu={setOpenMenu} OpenMenu={OpenMenu} />
      </div>

      <div className=" hidden md:block">
        <MonitorMenu />
      </div>
    </div>
  );
};

export default HeaderContainer;
