import React from "react";
import img from "../../../assets/Hero/as-requested-the-individual-layers-to-the-gta-vi-key-art-v0-ig1e88inlh4c1new3.png";
const Baner3: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
      <div className="bg-green-500 p-5 rounded-lg">
        <h2>انواع کنسول ها</h2>
        <img src={img} alt="" />
      </div>
      <div className="">
        <div className="bg-red-500">2</div>
        <div className="bg-blue-500">3</div>
      </div>
    </div>
  );
};

export default Baner3;
