import React from "react";
import BtnTow from "../utils/BtnTow";
import { useShopingcard } from "../context/ShopingCard";
import ConnectedProducts from "../Products/ConnectedProducts";
import { FaLocationDot} from "react-icons/fa6";

const ShopingCardPage: React.FC = () => {
  const { CardItems , setOpenMiniShoppingcard } = useShopingcard();
  console.log(CardItems);
  return (
    <div className="md:container md:mx-auto mx-2">
      <div className="border-2 mb-10 p-5 rounded-lg">
        <h3 className="text-gray-600 text-xs font-tanha">آدرس تحویل سفارش</h3>
        <p className="flex items-center my-5">
          <FaLocationDot className="ml-5" size={20} />
          کرمان بلوار جمهوری اسلامی شهرک بانک صادرات اندیشه ۸ انتهای کوچه سمت
          راست درب سفید طبقه اول
        </p>
        <button>تغییر یا ویرایش آدرس</button>
      </div>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-9 border-2 rounded-lg p-5 mb-10">
          <p className=" mb-2">سبد خرید</p>
          <span className="font-tanha text-gray-300">
            {CardItems.length} کالا
          </span>
          {CardItems.map((item) => (
            <div className="border-b-2 flex p-5 my-5">
              <img
                className="w-32 h-52 rounded-lg  "
                src={`http://localhost:5000/${item.cardmg}`}
                alt=""
              />
              <div className="mx-5">
                <p className="my-4">{item.title}</p>
                <p className="my-4">{item.capacity}</p>
                <p className="my-4">{item.platform}</p>
                <p className="my-4 font-bold text-xl">{item.price} تومان</p>
              </div>
            </div>
          ))}
        </div>
        <div className="fixed md:relative bottom-0 flex-row w-full md:col-span-3 flex md:flex-col items-center border-2 rounded-lg mb-10 bg-white">
          <div className=" items-center justify-around my-10 text-gray-600 md:flex hidden w-full ">
            <p>قیمت کالا ها (2)</p>
            <p>623000 تومان</p>
          </div>
          <div className="flex items-center justify-around my-10  w-full md:text-base text-xs">
            <p> جمع سبد خرید </p>
            <p>623000 تومان</p>
          </div>
          <BtnTow
            ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400 md:b-10 md:text-base text-xs"
            ButtonText=" تایید و تکمیل سفارش "
            onClick={() => setOpenMiniShoppingcard(false)}
          />
        </div>
      </div>
      <ConnectedProducts />
    </div>
  );
};

export default ShopingCardPage;
