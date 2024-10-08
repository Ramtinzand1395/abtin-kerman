import React, { useState } from "react";
import { motion } from "framer-motion";
import CommentsTab from "./CommentsTab";
import { GameData, Product } from "../../types";
interface ChipProps {
  text: string;
  selected: boolean;
  setSelected: (text: string) => void;
}
interface TabsProps {
  ProductInformationTab: React.FC;
  ProductReturnTermsTab: React.FC;
  Product:Product | GameData;
}
const Chip: React.FC<ChipProps> = ({ text, selected, setSelected }) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={`${
        selected
          ? "text-white"
          : "text-slate-900 hover:text-slate-200 hover:bg-slate-700"
      } text-sm transition-colors px-2.5 py-2 rounded-md relative`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.span
          layoutId="pill-tab"
          transition={{ type: "spring", duration: 0.5 }}
          className="absolute inset-0 z-0 bg-gradient-to-r from-green-600 to-lime-800 rounded-md"
        ></motion.span>
      )}
    </button>
  );
};
const tabs = [" توضیحات", " توضیحات تکمیلی ", "نظرات"];
const Tabs: React.FC<TabsProps> = ({
  ProductInformationTab,
  ProductReturnTermsTab,
  Product,
}) => {
  const [selected, setSelected] = useState(tabs[0]);
  console.log(Product,"ww")
  return (
    <div className="bg-slate-100 rounded-t-lg p-5">
      <div className="px-4 my-5 flex items-center flex-wrap gap-2">
        {tabs.map((tab) => (
          <Chip
            text={tab}
            selected={selected === tab}
            setSelected={setSelected}
            key={tab}
          />
        ))}
      </div>
      {selected === " توضیحات" ? (
        <div className="">
          <ProductInformationTab />
        </div>
      ) : selected === " توضیحات تکمیلی " ? (
        <div className="">
          <ProductReturnTermsTab />
        </div>
      ) : (
        <div className="">
          <CommentsTab Product={Product}/>
        </div>
      )}
    </div>
  );
};

export default Tabs;
