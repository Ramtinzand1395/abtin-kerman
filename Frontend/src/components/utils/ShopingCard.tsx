import React from "react";
import { Image, Tag } from "../../types";
import { Link } from "react-router-dom";
interface CardItemProps {
  title: string;
  price: number;
  primaryImage: Image | null;
  additionalImages?: Image[];
  _id?: string;
  tags?: Tag[];
}
const ShopingCard: React.FC<CardItemProps> = ({
  title,
  price,
  primaryImage,
  _id,
  tags,
}) => {
  return (
    <Link to={`/product/${_id}`}>
      <div className="flex flex-col items-start rounded-lg  cursor-pointer shadowhand">
        <img
          // src={`http://localhost:5000/${primaryImage?.direction}`}
              //! change
              src={`${primaryImage?.direction}`}
          className="w-full  mb-2 object-contain  max-h-[40vh] "
          alt=""
        />
        <div className=" m-2 ">
          <h4 className="font-bold font-tanha text-primary ">{title}</h4>
          <p className="my-2">{price} قیمت</p>
          {tags?.map((tag) => (
            <span key={tag._id} className="text-sm px-2 text-gray-500">
             {tag.tagName}{"#"}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ShopingCard;
