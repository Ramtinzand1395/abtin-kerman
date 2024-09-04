import React from "react";
import { FaInstagram } from "react-icons/fa";
import img from "../../assets/Firefly 20231028180948.png";
const InstaCallToAction: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-5 h-auto md:h-[40vh] my-10">
      {/* image */}
      <div className="md:col-span-4">
        <img
          src={img}
          className="overflow-hidden h-[40vh] w-full rounded-2xl"
          alt=""
        />
      </div>
      {/* Insta */}
      <div className="bg-primary rounded-2xl text-white w-full h-[40vh]  md:h-full md:col-span-2 flex flex-col items-center justify-evenly p-2 text-center">
        <FaInstagram size={50} />
        <h4 className="font-bold text-lg">ما را در اینستاگرام دنبال کنید</h4>
        <p>
          مشاهده آخرین جشنواره ها، تخفیف ها، محصولات جدید و اطلاع رسانی های
          فروشگاه
        </p>
      </div>
    </div>
  );
};

export default InstaCallToAction;
