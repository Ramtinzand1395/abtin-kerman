import React from "react";
import { GameDataInfo, ImageType, Tag } from "../../types";
import { Link } from "react-router-dom";

interface CardItemProps {
  title: string;
  primaryImage: ImageType | null;
  additionalImages: ImageType[];
  info: GameDataInfo[];
  _id?: string;
  tags: Tag[];
  averageRating: number;
}

const AccountsGames: React.FC<CardItemProps> = ({
  title,
  primaryImage,
  // additionalImages,
  info,
  _id,
  tags,
  averageRating,
}) => {
  const sortedPrices = info ? [...info].sort((a, b) => a.price - b.price) : [];
  const hasMultiplePrices = info && info.length > 1;

  return (
    <Link to={`/accountgame/${_id}`}>
      <div
        className="flex flex-col justify-end rounded-lg cursor-pointer shadowhand relative divhover  min-h-[300px] md:min-h-[400px] accountgames-background "
        style={{
          backgroundImage: `url('${primaryImage?.direction}')`,
        }}
      >
        {/* <div className="filter-bg absolute ">a</div> */}
        <div className="bg-secondery bg-opacity-90 p-2 text-white z-10 scale-bg">
          <div className="font-bold font-tanha mb-2 ">
            <h4>{title}</h4>
          </div>
          <div className="flex items-center text-xs md:text-sm mb-2 ">
            {hasMultiplePrices ? (
              <>
                <p className="">
                  از {sortedPrices[0].price} _{" "}
                  {sortedPrices[sortedPrices.length - 1].price} تومان
                </p>
              </>
            ) : (
              info.map((item, index) => (
                <div key={index} className="">
                  {item.price} تومان
                </div>
              ))
            )}
          </div>
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
          <div className="flex items-center mb-2">
            {tags?.map((tag) => (
              <span key={tag._id} className="text-sm px-5 py-1 mx-2 rounded-3xl bg-gray-700 ">
                {tag.tagName}
                {" #"}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default AccountsGames;

{
  /* <div className="flex flex-col rounded-lg cursor-pointer shadowhand relative divhover p-4 min-h-[400px] bg-gradient-to-t to-secondery from-white">
<div className="flex items-center justify-center ">

<img
  // src={`http://localhost:5000/${primaryImage?.direction}`}
  //! change
  src={`${primaryImage?.direction}`}
  className="mb-5 w-full rounded-lg primaryImage"
  alt="Primary Image"
/>
<img
  // src={`http://localhost:5000/${additionalImages[0]?.direction}`}
  //! change
  src={`${additionalImages[0]?.direction}`}
  className="w-full mb-5 rounded-lg absolute top-0 left-0 primaryImage secondImage"
  alt="Additional Image"
/>
</div>

<div className="font-bold font-tanha text-primary my-2 ">
  <h4>{title}</h4>
</div>
<div className="flex items-center text-xs md:text-sm mb-2 ">
  {hasMultiplePrices ? (
    <>
      <p className="">
        از {sortedPrices[0].price} _{" "}
        {sortedPrices[sortedPrices.length - 1].price} تومان
      </p>
    </>
  ) : (
    info.map((item, index) => (
      <div key={index} className="">
        {item.price} تومان
      </div>
    ))
  )}
</div>
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
<div className="flex items-center mb-2">
  {tags?.map((tag) => (
    <span key={tag._id} className="text-sm px-2 text-gray-500">
      {tag.tagName}
      {"#"}
    </span>
  ))}
</div>
</div> */
}

// <div
// className="flex flex-col justify-end rounded-lg cursor-pointer shadowhand relative divhover  min-h-[300px] accountgames-background "
// style={{
//   backgroundImage: `url('${primaryImage?.direction}')`,
// }}
// >
// <div className="filter-bg absolute ">a</div>
// <div className="bg-black bg-opacity-70 p-2 text-white z-10">
//   <div className="font-bold font-tanha mb-2 ">
//     <h4>{title}</h4>
//   </div>
//   <div className="flex items-center text-xs md:text-sm mb-2 ">
//     {hasMultiplePrices ? (
//       <>
//         <p className="">
//           از {sortedPrices[0].price} _{" "}
//           {sortedPrices[sortedPrices.length - 1].price} تومان
//         </p>
//       </>
//     ) : (
//       info.map((item, index) => (
//         <div key={index} className="">
//           {item.price} تومان
//         </div>
//       ))
//     )}
//   </div>
//   <div className="">
//     {[1, 2, 3, 4, 5].map((star) => (
//       <span
//         key={star}
//         className={`cursor-pointer text-2xl ${
//           star <= averageRating ? "text-yellow-400" : "text-white"
//         }`}
//       >
//         ★
//       </span>
//     ))}
//   </div>
//   <div className="flex items-center mb-2">
//     {tags?.map((tag) => (
//       <span key={tag._id} className="text-sm px-2 text-gray-700 ">
//         {tag.tagName}
//         {"#"}
//       </span>
//     ))}
//   </div>
// </div>
// </div>