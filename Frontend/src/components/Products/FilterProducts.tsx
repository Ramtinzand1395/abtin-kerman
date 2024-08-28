import React from "react";
import DropDown from "../utils/DropDown";
import { FiEdit } from "react-icons/fi";

const FilterProducts: React.FC = () => {
  const DropdownIthem = {
    text1: "مرتب سازی بر اساس",
    icon1: FiEdit,
    link1: `/dashboard`,
    text2: "ویرایش حساب کاربری",
    icon2: FiEdit,
    text3: "ویرایش حساب کاربری",
    icon3: FiEdit,
    text4: "ویرایش حساب کاربری",
    icon4: FiEdit,
    title: "خوش آمدید",
  };
  return (
    <div className="flex items-center justify-between">
      مرتب سازی بر اساس :
      <DropDown DropdownIthem={DropdownIthem}/>
    </div>
  );
};

export default FilterProducts;
