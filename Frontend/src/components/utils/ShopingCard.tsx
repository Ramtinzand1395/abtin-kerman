import React from "react";
import { Image } from "../../types";
import { Link } from "react-router-dom";
interface CardItemProps {
  title: string;
  price: number;
  primaryImage: Image | null;
  additionalImages?:Image[];
  _id: string;
  // description: string;
}
const ShopingCard: React.FC<CardItemProps> = ({
  title,
  price,
  primaryImage,
  _id,
}) => {
  return (
    <Link to={`/product/${_id}`}>
      <div className="flex flex-col  rounded-lg  ease-in-out transition-all duration-150  hover:bg-gray-100 cursor-pointer border-2 border-primary">
        {/* <div className="h-[30vh]"> */}
          <img
            src={`http://localhost:5000/${primaryImage?.direction}`}
            className=" mb-5 "
            alt=""
          />
        {/* </div> */}
        <div className="font-bold text-base md:text-xl font-tanha text-primary h-[6vh] md:h-[8vh] my-2 ">
          {title}
        </div>
        <div className="flex items-center my-3 p-5 ">
          <p>{price} قیمت</p>
        </div>
      </div>
    </Link>
  );
};

export default ShopingCard;
