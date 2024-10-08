import React from "react";
import { Image } from "../../types";
import { Link } from "react-router-dom";
interface CardItemProps {
  title: string;
  price: number;
  primaryImage: Image | null;
  additionalImages?: Image[];
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
      <div className="flex flex-col items-start rounded-lg  cursor-pointer shadowhand">
        <img
          src={`http://localhost:5000/${primaryImage?.direction}`}
          className="w-full h-[50vh] mb-2 "
          alt=""
        />
        <div className=" m-2 ">
          <h4 className="font-bold font-tanha text-primary ">{title}</h4>
          <p className="my-2">{price} قیمت</p>
        </div>
      </div>
    </Link>
  );
};

export default ShopingCard;
