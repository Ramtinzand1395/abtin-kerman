import React from "react";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
import BtnTow from "../utils/BtnTow";
import { useShopingcard } from "../context/ShopingCard";

const ShoppingCardData: React.FC = () => {
  const {
    CardItems,
    removeFromCard,
    setOpenMiniShoppingcard,
    DecreaseCardQty,
    InceraseCardQty,
  } = useShopingcard();
  const totalPrice = CardItems.reduce((total, cardItem) => {
    const price = cardItem.data.price;
    return total + price * cardItem.ItemQty;
  }, 0);

  return (
    <div className="flex flex-col ">
      {CardItems?.map((item) => (
        <div
          key={item.id}
          className="h-72 border-b-2 p-2 text-white  font-tanha flex rounded-lg"
        >
          <div className="flex flex-col items-center justify-around">
            <img
              // src={`http://localhost:5000/${item.data.image.direction}`}
              //! change
              src={`${item.data.image.direction}`}
              className="w-40 h-auto"
              alt={item.data.image.imageName}
            />
            <div className="flex items-center justify-around border-2 rounded-lg py-2 w-32 bg-white">
              <FaPlus
                size={10}
                className="cursor-pointer text-secondery"
                onClick={() =>
                  InceraseCardQty(item?.id, null, {
                    title: "",
                    image: {
                      imageName: "",
                      direction: "",
                      createdAt: "",
                      _id: "",
                    },
                    price: 0,
                    features: [],
                    tags: [],
                  })
                }
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

          <div className="mr-5 flex flex-col items-start justify-between h-full">
            <div className="">
              <h4 className="text-black mb-2">{item.data.title}</h4>
              <div className="flex flex-col">
                {item?.data?.features?.map((Specification) => (
                  <span className="text-gray-500 text-sm mb-2">
                    {Specification.key} {Specification.value}
                  </span>
                ))}
              </div>
            </div>
            <p className="text-black mb-10">
              {item.data.price * item.ItemQty} تومان
            </p>
          </div>
        </div>
      ))}
      <div className="flex items-center justify-around sticky bg-white w-auto  py-2 z-20 bottom-0">
        <div className="flex flex-col">
          <p className="text-sm text-gray-500 mb-2">مجموع قابل پرداخت</p>
          <span className="font-semibold">{totalPrice}</span>
        </div>
        <Link to={"/checkout/cart/"}>
          <BtnTow
            ButtonColor="bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400"
            ButtonText="تکمیل خرید"
            onClick={() => setOpenMiniShoppingcard(false)}
          />
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCardData;
