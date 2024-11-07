import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";

interface OptionProps {
  text: string;
  Icon: React.ReactNode;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
}
interface DropdownProps {
  DropdownIthem: {
    icon1: React.ReactNode;
    text1: string;
    icon2: React.ReactNode;
    text2: string;
    icon4: React.ReactNode;
    text4: string;
    title: string;
    link1: string;
    link4: string;
  };
  setUser: React.Dispatch<React.SetStateAction<string | null>>;
  setOpenModall: React.Dispatch<React.SetStateAction<boolean>>;
}
const wrapperVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

const iconVariants = {
  open: { rotate: 180 },
  closed: { rotate: 0 },
};

const itemVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      when: "beforeChildren",
    },
  },
  closed: {
    opacity: 0,
    y: -15,
    transition: {
      when: "afterChildren",
    },
  },
};

const actionIconVariants = {
  open: { scale: 1, y: 0 },
  closed: { scale: 0, y: -7 },
};
const LoginDropDown: React.FC<DropdownProps> = ({
  DropdownIthem,
  setUser,
  setOpenModall,
}) => {
  const [open, setOpen] = useState(false);
  const Option: React.FC<OptionProps> = ({ text, Icon, setOpen, link }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          {Icon}
        </motion.span>
        {link === "exite" ? (
          <span
            onClick={() => {
              googleLogout();
              localStorage.removeItem("User");
              localStorage.removeItem("shopping-card");
              setUser(null);
              setOpenModall(false);
            }}
          >
            {text}
          </span>
        ) : (
          <Link to={link}>
            <span>{text}</span>
          </Link>
        )}
      </motion.li>
    );
  };
  return (
    <div className=" flex items-center  bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2  px-2 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-red-500 transition-colors"
        >
          <span className="font-medium text-sm whitespace-nowrap">
            {DropdownIthem.title}
          </span>
          <motion.span variants={iconVariants}>
          <svg width="20px" height="20px" viewBox="0 -4.5 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" >
    
    <title>arrow_up [#337]</title>
    <desc>Created with Sketch.</desc>
    <defs>

</defs>
    <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="Dribbble-Light-Preview" transform="translate(-260.000000, -6684.000000)" fill="#000000">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M223.707692,6534.63378 L223.707692,6534.63378 C224.097436,6534.22888 224.097436,6533.57338 223.707692,6533.16951 L215.444127,6524.60657 C214.66364,6523.79781 213.397472,6523.79781 212.616986,6524.60657 L204.29246,6533.23165 C203.906714,6533.6324 203.901717,6534.27962 204.282467,6534.68555 C204.671211,6535.10081 205.31179,6535.10495 205.70653,6534.69695 L213.323521,6526.80297 C213.714264,6526.39807 214.346848,6526.39807 214.737591,6526.80297 L222.294621,6534.63378 C222.684365,6535.03868 223.317949,6535.03868 223.707692,6534.63378" id="arrow_up-[#337]">

</path>
            </g>
        </g>
    </g>
</svg>
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute z-20 top-[120%] left-[50%] w-48 overflow-hidden"
        >
          <Option
            setOpen={setOpen}
            Icon={DropdownIthem.icon1}
            text={DropdownIthem.text1}
            link={DropdownIthem.link1}
          />
          <Option
            setOpen={setOpen}
            Icon={DropdownIthem.icon2}
            text={DropdownIthem.text2}
            link={DropdownIthem.link1}
          />

          <Option
            setOpen={setOpen}
            Icon={DropdownIthem.icon4}
            text={DropdownIthem.text4}
            link={DropdownIthem.link4}
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default LoginDropDown;
