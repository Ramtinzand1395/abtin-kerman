import React from "react";
import BtnTow from "./BtnTow";
interface CardItemProps {
  OpenTag?: boolean;
  OpenDiscount?: boolean;
  discount?: number;
  title: string;
  price: number;
  btnText: string;
  image: string;
  description:string;
}
const ShopingCard: React.FC<CardItemProps> = ({
  title,
  price,
  btnText,
  image,
  description,
}) => {
  return (
    <div className="flex flex-col border-2 p-5  rounded-lg hover:scale-105 ease-in-out transition-all duration-150 border-black hover:bg-gray-100 cursor-pointer">
      <img src={image} className="w-full h-60 mb-5" alt="" />
      <div className="font-bold text-lg">{title}</div>
      <span className="mb-5 font-tanha text-xs my-5">
      {description}
      </span>
      <div className="flex items-center w-full mb-5">
        <div className="bg-red-500 rounded-full w-3 h-3 ml-5"></div>
        <span className="font-tanha">ژانر :اکشن</span>
      </div>
        <div className="mb-5">{price} تومان</div>
        <BtnTow
          ButtonColor="bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400"
          ButtonText={btnText}
        />
    </div>
  );
};

export default ShopingCard;
