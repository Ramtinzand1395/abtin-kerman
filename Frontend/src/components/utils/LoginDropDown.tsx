import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown } from "react-icons/fi";
import { Link } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import { User } from "../../types";

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

    icon4: React.ComponentType;
    text4: string;
    title: string;
    link1: string;
    link4: string;
  };
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
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
          <Icon />
        </motion.span>
        {link === "exite" ? (
          <span
            onClick={() => {
              googleLogout();
              localStorage.removeItem("User");
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
    <div className=" flex items-center justify-center  bg-white">
      <motion.div animate={open ? "open" : "closed"} className="relative">
        <button
          onClick={() => setOpen((pv) => !pv)}
          className="flex items-center gap-2  px-2 py-2 rounded-md text-indigo-50 bg-indigo-500 hover:bg-red-500 transition-colors"
        >
          <span className="font-medium text-sm whitespace-nowrap">
            {DropdownIthem.title}
          </span>
          <motion.span variants={iconVariants}>
            <FiChevronDown />
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
