import React from "react";
import test from "../../assets/4062c9fc8b3a999778ed824b24631ab0.jpg";

const SliderpageTest = () => {
  return (
    <div className="grid grid-cols-2 gap-2">
      <div className="flex items-center justify-center flex-col">
        <h3 className="font-bold text-lg">جدید ترین مدل ها</h3>
        <button
          className="rounded relative inline-flex group items-center justify-center px-3.5 py-2 m-1 cursor-pointer border-b-4 border-l-2 active:border-purple-600 active:shadow-none shadow-lg bg-gradient-to-tr from-purple-600 to-purple-500 border-purple-700 text-white"
        >
          <span className="absolute w-0 h-0 transition-all duration-300 ease-out bg-white rounded-full group-hover:w-32 group-hover:h-32 opacity-10"></span>
          <span className="relative">Button Text</span>
        </button>
      </div>
      <img className="" src={test} alt="" />
    </div>
  );
};

export default SliderpageTest;
