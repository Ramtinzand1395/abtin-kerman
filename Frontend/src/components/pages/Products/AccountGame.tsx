import React, { ChangeEvent, useEffect, useState } from "react";
import ConnectedProducts from "../../utils/ConnectedProducts";
import BtnTow from "../../utils/BtnTow";
// import { useShopingcard } from "../context/ShopingCard";
import { getGameSingleService } from "../../../services/ApiServices";
import { useParams } from "react-router-dom";
import { GameData } from "../../../types";
import Tabs from "../../utils/tab/Tabs";

const AccountGame: React.FC = () => {
  // !Context
  // const { testaccountGame, setOpenMiniShoppingcard } = useShopingcard();
  const [game, setgame] = useState<GameData | null>(null);
  const { gameId } = useParams();
  const [currentImage, setCurrentImage] = useState<string>("");

  useEffect(() => {
    if (!gameId) return;
    const getGame = async () => {
      try {
        const { data } = await getGameSingleService(gameId);
        setgame(data);
        setCurrentImage(data?.primaryImage?.direction);
      } catch (err) {
        console.log(err);
      }
    };
    getGame();
  }, [gameId]);
  const sortedPrices = game?.info
    ? [...game.info].sort((a, b) => a.price - b.price)
    : [];

  const [userCardItem, setuserCardItem] = useState({
    platform: "",
    price: "",
    capacity: "",
    _id: "",
    inStock: false,
    sellOne: true,
    cardmg: "",
    title: "",
  });
  const handleUserSelectChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setuserCardItem({
      ...userCardItem,
      [e.target.name]: e.target.value,
    });
  };
  // const isInStock = () => {
  //   if (game?.info) {
  //     const gameInfo = game.info.find(
  //       (item) =>
  //         item.platform === userCardItem.platform &&
  //         item.capacity === userCardItem.capacity
  //     );

  //     if (gameInfo && gameInfo.inStock) {
  //       setuserCardItem((prev) => ({
  //         ...prev,
  //         inStock: true,
  //         price: gameInfo.price,
  //         _id: gameId,
  //         cardmg: game?.primaryImage.direction,
  //         title: game.title,
  //       }));
  //       return;
  //     } else {
  //       setuserCardItem((prev) => ({
  //         ...prev,
  //         inStock: false,
  //         price: 0,
  //         _id: gameId,
  //         cardmg: game?.primaryImage.direction,
  //         title: game.title,
  //       }));
  //       return;
  //     }
  //   }
  //   return;
  // };
  const handleAddToCart = () => {
    // if (!userCardItem.platform || !userCardItem.capacity) {
    //   alert("Please select both platform and capacity");
    //   return;
    // }
    // testaccountGame(userCardItem);
    // setOpenMiniShoppingcard(true);
    console.log("first");
  };
  // useEffect(() => {
  //   if (userCardItem.platform.length > 0 && userCardItem.capacity.length > 0) {
  //     isInStock();
  //   }
  // }, [userCardItem.platform, userCardItem.capacity]);
  const handleImageClick = (imageDirection: string) => {
    setCurrentImage(imageDirection);
  };
  const hasMultiplePrices = game?.info && game.info.length > 1;

  return (
    <div className="md:container md:mx-auto mx-2">
      {/* First Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Game picture */}
        <div className="">
          <img
            src={`http://localhost:5000/${currentImage}`}
            alt=""
            className="w-full h-full object-contain max-w-[300px] max-h-[60vh] my-5"
          />
          <div className=" items-center hidden md:flex mb-10">
            {game?.additionalImages?.map((img) => (
              <img
                key={img._id}
                src={`http://localhost:5000/${img?.direction}`}
                alt=""
                className="w-full h-full object-contain max-w-[70px] max-h-[70px] border-2 border-primary p-2 cursor-pointer"
                onClick={() => handleImageClick(img?.direction)}
              />
            ))}
            <img
              src={`http://localhost:5000/${game?.primaryImage?.direction}`}
              alt=""
              className="w-full h-full object-contain max-w-[70px] max-h-[70px] border-2 border-primary p-2 mx-2 cursor-pointer"
              onClick={() =>
                game?.primaryImage?.direction &&
                handleImageClick(game?.primaryImage?.direction)
              }
            />
          </div>
        </div>
        {/* Select  */}
        <div className="flex flex-col items-start justify-evenly">
          <h1 className="font-tanha text-4xl font-bold">{game?.title}</h1>
          <p>
             {hasMultiplePrices ? (
            <>
              <p className="my-2">
                از {sortedPrices[0].price} _{" "}
                {sortedPrices[sortedPrices.length - 1].price} تومان
              </p>
            </>
          ) : (
            game?.info.map((item, index) => (
              <div key={index} className="my-2">
                {item.price} تومان
              </div>
            ))
          )}
          </p>
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2 text-secondery">
              پلتفرم
            </label>
            <select
              value={userCardItem.platform}
              onChange={handleUserSelectChange}
              name="platform"
              className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
              title="یک کزینه را انتخاب "
            >
              <option value=""> یک کزینه را انتخاب کنید</option>
              <option value="ps5">ps5</option>
              <option value="ps4">ps4</option>
            </select>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-semibold mb-2 text-secondery">
              ظرفیت
            </label>
            <select
              value={userCardItem.capacity}
              onChange={handleUserSelectChange}
              name="capacity"
              className="px-16 py-2 rounded-lg border-primary border-2"
              title="یک کزینه را انتخاب "
            >
              <option value=""> یک کزینه را انتخاب کنید</option>
              <option value="ظرفیت یک">ظرفیت یک</option>
              <option value="ظرفیت دو">ظرفیت دو</option>
              <option value="ظرفیت سه">ظرفیت سه</option>
            </select>
          </div>
          <div className="flex items-center">
            <div className="ml-5">
              {userCardItem.inStock ? (
                <label className="mr-2">قیمت: {userCardItem.price} تومان</label>
              ) : (
                <p className="text-red-500">در انبار موجود نیست</p>
              )}
            </div>
            <BtnTow
              ButtonColor="bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400"
              ButtonText="افزودن به سبد خرید"
              onClick={handleAddToCart}
            />
          </div>
        </div>
      </div>

      {/* Secont tabs */}
      <div className=" my-10">
        {game && (
          <Tabs
            Product={game}
          />
        )}
      </div>
      <div className="my-10">
        <ConnectedProducts />
      </div>
    </div>
  );
};

export default AccountGame;