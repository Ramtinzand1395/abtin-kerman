import React from "react";

const SearchProducts: React.FC = () => {
  return (
    <div className="relative w-full">
      <input
        type="search"
        title="serach"
        placeholder="جستجو نام, برند,..."
        id="search-dropdown"
        className="block p-2.5 w-full md:w-[400px] z-20 text-sm text-gray-900 bg-[#f0f0f1] rounded-lg focus:ring-black-500 focus:border-blaring-black-500"
      />
      <button
        type="button"
        className="absolute top-0 end-0 p-1.5 w-[70px] font-medium h-full text-xs text-white bg-secondery rounded-e-xl border  hover:bg-primary  focus:ring-4 focus:outline-none focus:ring-blue-300 "
      >
        جستجو
      </button>
    </div>
  );
};

export default SearchProducts;
