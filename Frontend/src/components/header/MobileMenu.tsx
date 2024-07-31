import React from "react";
import { MdClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";

const MobileMenu = ({ OpenMenu, setOpenMenu }) => {
  return (
    <AnimatePresence>
      <motion.div
        exit={{ x: [1000, 500, 2000, -1000], transition: { duration: 2 } }}
        className="bg-white w-[60vw] h-full fixed top-0 right-0 z-10"
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
    </AnimatePresence>
  );
};

export default MobileMenu;
