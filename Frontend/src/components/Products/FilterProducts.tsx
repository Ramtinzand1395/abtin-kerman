import React from "react";
import DropDown from "../utils/DropDown";

const FilterProducts: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      مرتب سازی بر اساس :
      <DropDown />
    </div>
  );
};

export default FilterProducts;
