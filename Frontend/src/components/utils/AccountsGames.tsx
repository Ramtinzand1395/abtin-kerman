import React, { useState } from "react";
import { GameDataInfo, Image } from "../../types";
import { Link } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
interface CardItemProps {
  // OpenTag?: boolean;
  // OpenDiscount?: boolean;
  // discount?: number;
  title: string;
  // price: number;
  // btnText: string;
  primaryImage: Image | null;
  additionalImages: Image[];
  info: GameDataInfo[];
  _id?: string;
}
const AccountsGames: React.FC<CardItemProps> = ({
  title,
  primaryImage,
  additionalImages,
  info,
  _id,
}) => {
  const [hovered, setHovered] = useState(false);
  const sortedPrices = info ? [...info].sort((a, b) => a.price - b.price) : [];
  return (
    <Link to={`/accountgame/${_id}`}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex flex-col  rounded-lg  ease-in-out transition-all duration-150  hover:bg-gray-100 cursor-pointer border-2 border-primary"
      >
        <img
          src={`http://localhost:5000/${
            hovered ? (
              additionalImages ? (
                additionalImages[0]?.direction
              ) : (
                <FaQuestion />
              )
            ) : (
              primaryImage?.direction
            )
          }`}
          className="w-full h-60 mb-5 "
          alt=""
        />
        <div className="font-bold text-base md:text-xl font-tanha text-primary h-[6vh] md:h-[8vh] p-5 ">
          {title}
        </div>
        <div className="flex items-center text-xs md:text-sm my-3 p-5 ">
          {info && info?.length > 1 ? (
            <>
              <div className="mb-5">از {sortedPrices[0].price} تومان</div>
              <div className="mb-5 ml-2">
                تا {sortedPrices[sortedPrices.length - 1].price} تومان
              </div>
            </>
          ) : (
            info?.map((item , index) => (
              <div key={index} className="mb-5">
                {item.price} تومان
              </div>
            ))
          )}
        </div>
      </div>
    </Link>
  );
};

export default AccountsGames;
