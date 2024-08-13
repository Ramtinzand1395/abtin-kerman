import React from "react";
import { MdClose } from "react-icons/md";
import {  motion } from "framer-motion";
const headerVariant = {
  hidden: {
    width: "0vw",
    transitionEnd: {
      display: "none",
    },
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

const MobileMenu: React.FC<MobileMenuProps> = ({  setOpenMenu , OpenMenu }) => {
 
  return (
      <motion.div
      initial="hidden"
      animate={OpenMenu ? "visible" : "hidden"}
      variants={headerVariant}
        className="bg-white h-[100vh] absolute top-10 right-0 z-10"
      >
        <MdClose onClick={() => setOpenMenu(false)} />
        <ul>
          <li>ایتم اول</li>
          <li>ایتم اول</li>
          <li>ایتم اول</li>
          <li>ایتم اول</li>
          <li>ایتم اول</li>
        </ul>
      </motion.div>
  );
};

export default MobileMenu;
