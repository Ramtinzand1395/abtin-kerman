import React from "react";
import { ImageType, Tag } from "../../types";
import { Link } from "react-router-dom";
interface CardItemProps {
  title: string;
  price: number;
  primaryImage: ImageType | null;
  additionalImages?: ImageType[];
  _id?: string;
  tags?: Tag[];
  averageRating:number;
}
const ShopingCard: React.FC<CardItemProps> = ({
  title,
  price,
  primaryImage,
  _id,
  tags,
  averageRating
}) => {
  return (
    <Link to={`/product/${_id}`}>
      <div className="flex flex-col items-start rounded-lg cursor-pointer shadowhand relative p-4 min-h-[450px] bg-gradient-to-t to-secondery from-white">
      <img
          // src={`http://localhost:5000/${primaryImage?.direction}`}
          //! change
          src={`${primaryImage?.direction}`}
          className="w-full  mb-2 object-contain rounded-lg  max-h-[40vh] "
          alt={primaryImage?.imageName}
        />
        <div className="text-start">
          <h4 className="font-bold font-tanha text-primary ">{title}</h4>
          <p className="my-2 ">{price} قیمت</p>
          <div className="">
        {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`cursor-pointer text-2xl ${
                  star <= averageRating ? "text-yellow-400" : "text-gray-400"
                }`}
              >
                ★
              </span>
            ))}
        </div>
          {tags?.map((tag) => (
            <span key={tag._id} className="text-sm px-2 text-gray-500">
              {tag.tagName}
              {"#"}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
};

export default ShopingCard;
