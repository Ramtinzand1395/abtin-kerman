import React from "react";
import img1 from "../../../assets/baner/3671710.webp";
import img2 from "../../../assets/baner/81lu8l0IcL._AC_SL1500_.webp";
import img3 from "../../../assets/baner/fc-25-ps5-cover.webp";
import img4 from "../../../assets/baner/fflgu1jr_thumb2.webp";

const Baner3: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-10">
      <div className="w-full h-[50vh] rounded-lg banerBG flex flex-col justify-between p-4">
        <h4
          className="font-bold font-tanha text-white text-left"
          style={{
            textShadow:
              "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
          }}
        >
          بهترین بازی های پلی استشین 5
        </h4>
        <div className="flex items-center justify-around">
          <div className="bg-white rounded-md p-2">
            <img src={img1} className="w-20 h-20" alt="" />
          </div>
          <div className="bg-white rounded-md p-2">
            <img src={img2} className="w-20 h-20" alt="" />
          </div>
          <div className="bg-white rounded-md p-2">
            <img src={img3} className="w-20 h-20" alt="" />
          </div>
          <div className="bg-white rounded-md p-2">
            <img src={img4} className="w-20 h-20" alt="" />
          </div>
        </div>
      </div>

      <div className="w-full h-[50vh] rounded-lg banerBG2 flex flex-col justify-between p-4">
        <h4
          className="font-bold font-tanha text-white text-right"
          style={{
            textShadow:
              "2px 2px 0 black, -2px 2px 0 black, 2px -2px 0 black, -2px -2px 0 black",
          }}
        >
          خرید اکانت های ظرفیتی
        </h4>
      </div>
    </div>
  );
};

export default Baner3;
