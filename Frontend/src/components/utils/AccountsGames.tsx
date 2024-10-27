import React from "react";
import { GameDataInfo, Image, Tag } from "../../types";
import { Link } from "react-router-dom";

interface CardItemProps {
  title: string;
  primaryImage: Image | null;
  additionalImages: Image[];
  info: GameDataInfo[];
  _id?: string;
  tags: Tag[];
}

const AccountsGames: React.FC<CardItemProps> = ({
  title,
  primaryImage,
  additionalImages,
  info,
  _id,
  tags,
}) => {
  const sortedPrices = info ? [...info].sort((a, b) => a.price - b.price) : [];
  const hasMultiplePrices = info && info.length > 1;

  return (
    <Link to={`/accountgame/${_id}`}>
      <div className="flex flex-col rounded-t-lg cursor-pointer shadowhand relative divhover">
        <img
          // src={`http://localhost:5000/${primaryImage?.direction}`}
          //! change
          src={`${primaryImage?.direction}`}
          className="w-full h-[50vh] mb-5 rounded-t-lg primaryImage"
          alt="Primary Image"
        />
        <img
          // src={`http://localhost:5000/${additionalImages[0]?.direction}`}
          //! change
          src={`${additionalImages[0]?.direction}`}
          className="w-full h-[50vh] mb-5 rounded-t-lg absolute top-0 left-0 secondImage"
          alt="Additional Image"
        />

        <div className="font-bold text-base md:text-xl font-tanha text-primary my-5 px-5">
          <h4>{title}</h4>
        </div>
        <div className="flex items-center text-xs md:text-sm mb-5 px-5">
          {hasMultiplePrices ? (
            <>
              <p className="my-2">
                از {sortedPrices[0].price} _{" "}
                {sortedPrices[sortedPrices.length - 1].price} تومان
              </p>
            </>
          ) : (
            info.map((item, index) => (
              <div key={index} className="my-2">
                {item.price} تومان
              </div>
            ))
          )}
        </div>
        <div className="flex items-center mb-2">
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

export default AccountsGames;
