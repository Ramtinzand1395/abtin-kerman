import React from "react";
import BtnTow from "../utils/BtnTow";
import { useShopingcard } from "../context/ShopingCard";
import ConnectedProducts from "../utils/ConnectedProducts";
import { Link } from "react-router-dom";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";

const ShopingCardPage: React.FC = () => {
  const {
    CardItems,
    InceraseCardQty,
    DecreaseCardQty,
    removeFromCard,
    cardQty,
  } = useShopingcard();
  const totalPrice = CardItems.reduce((total, cardItem) => {
    const price = cardItem.data.price;
    return total + price * cardItem.ItemQty;
  }, 0);
  const handleFinish = () => {
    console.log("first");
  };
  return (
    <div className="md:container md:mx-auto mx-2 my-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-9 border-2 rounded-lg p-5 mb-10">
          <p className=" mb-2">سبد خرید</p>
          <span className="font-tanha text-gray-300">{cardQty} کالا</span>
          <div className="flex flex-col ">
            {CardItems?.map((item) => (
              <div
                key={item.id}
                className=" p-2 text-white  font-tanha flex items-start w-full border-b-2"
              >
                <div className="flex flex-col items-center justify-between h-72 ml-5">
                  <img
                    src={`http://localhost:5000/${item.data.image.direction}`}
                    className="w-full h-full object-contain max-w-[15vw] max-h-[15vw]"
                    alt={item.data.image.imageName}
                  />

                  <div className="flex items-center justify-around border-2 rounded-lg py-2 w-32 bg-white mt-5">
                    <FaPlus
                      size={10}
                      className="cursor-pointer text-secondery"
                      onClick={() => InceraseCardQty(item?.id, null)}
                    />
                    <span className=" text-secondery">{item.ItemQty}</span>
                    {item.ItemQty === 1 ? (
                      <FaTrash
                        size={10}
                        className="cursor-pointer text-secondery"
                        onClick={() => removeFromCard(item.id)}
                      />
                    ) : (
                      <FaMinus
                        size={10}
                        className="cursor-pointer text-secondery"
                        onClick={() => DecreaseCardQty(item?.id)}
                      />
                    )}
                  </div>
                </div>
                <div className="flex flex-col ite justify-between h-64">
                  <h3 className="text-black font-bold">{item.data.title}</h3>
                  <div className="flex flex-col">
                    {item?.data?.features?.map((Specification) => (
                      <span className="text-gray-500 text-sm mb-2">
                        {Specification.key} {Specification.value}
                      </span>
                    ))}
                  </div>
                  <p className="text-black">
                    {item.data.price * item.ItemQty} تومان
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="fixed md:sticky md:top-20 self-start bottom-0 flex-row w-auto md:col-span-3 flex md:flex-col items-center border-2 rounded-lg mb-10 bg-white">
          <div className=" items-center justify-around my-10 text-gray-600 md:flex hidden w-full ">
            <p>قیمت کالا ها ({cardQty})</p>
            <p>{totalPrice} تومان</p>
          </div>
          <div className="flex items-center justify-around my-10  w-full md:text-base text-xs">
            <p> جمع سبد خرید </p>
            <p>{totalPrice} تومان</p>
          </div>
          <Link to={"/checkout/cart/info"}>
            <BtnTow
              ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400 md:b-10 md:text-base text-xs my-5"
              ButtonText=" تایید و تکمیل سفارش "
              onClick={() => handleFinish()}
            />
          </Link>
        </div>
      </div>
      <ConnectedProducts />
    </div>
  );
};

export default ShopingCardPage;
