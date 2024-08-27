import React, { useState } from "react";
// import {
//   FiEdit,
//   FiChevronDown,
//   FiTrash,
//   FiShare,
//   FiPlusSquare,
// } from "react-icons/fi";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
interface OptionProps {
  text: string;
  Icon: React.ComponentType;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  link: string;
}
interface DropdownProps {
  DropdownIthem: {
    icon1: React.ComponentType;
    text1: string;
    icon2: React.ComponentType;
    text2: string;
    icon3: React.ComponentType;
    text3: string;
    icon4: React.ComponentType;
    text4: string;
    title: string;
    link1: string;
  };
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
const DropdownIthem: React.FC<DropdownProps> = ({ DropdownIthem }) => {
  const [open, setOpen] = useState(false);
  const Option: React.FC<OptionProps> = ({ text, Icon, setOpen, link }) => {
    return (
      <motion.li
        variants={itemVariants}
        onClick={() => setOpen(false)}
        className="flex items-center gap-2 w-full p-2 text-xs font-medium whitespace-nowrap rounded-md hover:bg-indigo-100 text-slate-700 hover:text-indigo-500 transition-colors cursor-pointer"
      >
        <motion.span variants={actionIconVariants}>
          <Icon />
        </motion.span>
        <Link to={link}>
          <span>{text}</span>
        </Link>
      </motion.li>
    );
  };
  return (
    <div className=" flex items-center justify-center bg-white z-10">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2 px-10 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-red-500 transition-colors"
        >
          <span className="font-medium text-sm">{DropdownIthem.title}</span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
          </motion.span>
        </button>

        <motion.ul
          initial={wrapperVariants.closed}
          variants={wrapperVariants}
          style={{ originY: "top", translateX: "-50%" }}
          className="flex flex-col gap-2 p-2 rounded-lg bg-white shadow-xl absolute top-[120%] left-[50%] w-48 overflow-hidden"
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
            Icon={DropdownIthem.icon3}
            text={DropdownIthem.text3}
            link={DropdownIthem.link1}
          />
          <Option
            setOpen={setOpen}
            Icon={DropdownIthem.icon4}
            text={DropdownIthem.text4}
            link={DropdownIthem.link1}
          />
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default DropdownIthem;
