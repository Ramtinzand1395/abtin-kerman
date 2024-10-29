import React, { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { Link } from "react-router-dom";
import BtnTow from "../utils/BtnTow";
import { useShopingcard } from "../context/ShopingCard";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa";
import AddressModall from "./modalls/AddressModall";
import {
  addOrderService,
  getUserInfoService,
} from "../../services/ApiServices";
import { toast } from "react-toastify";
import { User } from "../../types";

const ShopingInfo: React.FC = () => {
  const {
    CardItems,
    InceraseCardQty,
    removeFromCard,
    DecreaseCardQty,
    cardQty,
  } = useShopingcard();
  const totalPrice = CardItems.reduce((total, cardItem) => {
    const price = cardItem.data.price;
    return total + price * cardItem.ItemQty;
  }, 0);
  const [OpenModal, setOpenModal] = useState(false);
  const [UserInfo, setUserInfo] = useState<User>();
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  const [Loadingdata, setLoadingdata] = useState(false);
  useEffect(() => {
    const getUser = async () => {
      try {
        const { data } = await getUserInfoService(user._id);
        setUserInfo(data.user);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, [Loadingdata]);

  const handleAddOrder = async () => {
    console.log(CardItems)
    try {
      const userId = user._id;
      const { data } = await addOrderService({
        data: {
          CardItems,
          userId,
        },
      });
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="md:container md:mx-auto mx-2 my-5">
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-12 md:col-span-9 border-2 rounded-lg p-5 mb-10">
          <div className="border-2 mb-10 p-5 rounded-lg">
            <h3 className="text-gray-600 text-xs font-tanha">
              آدرس تحویل سفارش
            </h3>
            <p className="flex items-center my-5">
              <FaLocationDot className="ml-5" size={20} />
              {UserInfo?.address
                ? UserInfo?.address?.address
                : "هنوز آدرسی وارد نشده"}
            </p>
            <div className="">
              اطلاعات تماس:{" "}
              {UserInfo?.phone ? UserInfo?.phone : "هنوز شماره تلفن وارد نشده"}
            </div>
            <button
              onClick={() => setOpenModal(true)}
              className="text-pretty text-blue-500 flex items-center justify-end w-full"
            >
              تغییر یا ویرایش آدرس
            </button>
          </div>
          <div className="border-2 mb-10 p-5 rounded-lg">
            <h3 className="text-gray-600 text-xs font-tanha">کد تخفیف</h3>
            <p> کد تخفیف</p>

            <input title="DiscountCode" type="text" className="border-2" />
            <button>اعمال کد</button>
          </div>
          <div className="grid grid-cols-6 gap-5 ">
            {CardItems?.map((item) => (
              <div
                key={item.id}
                className=" p-2 text-white  font-tanha flex items-start w-full "
              >
                <div className="flex flex-col items-center h-72 ml-5">
                  <img
                    // src={`http://localhost:5000/${item.data.image.direction}`}
                    //! change
                    src={`${item.data.image.direction}`}
                    className="w-full h-full object-contain max-w-[100px] max-h-[100px]"
                    alt={item.data.image.imageName}
                  />

                  <div className="flex items-center justify-around border-2 rounded-lg py-2 w-20 bg-white mt-5">
                    <FaPlus
                      size={10}
                      className="cursor-pointer text-secondery"
                      onClick={() => InceraseCardQty(item?.id, null , {
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
                      })}
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
              </div>
            ))}
          </div>
        </div>
        <div className="fixed md:sticky md:top-20 self-start bottom-0 flex-row w-auto md:col-span-3 flex md:flex-col items-center border-2 rounded-lg mb-10 bg-white">
          <div className=" items-center justify-around my-5 text-gray-600 md:flex hidden w-full ">
            <p>قیمت کالا ها ({cardQty})</p>
            <p>{totalPrice} تومان</p>
          </div>
          <div className="flex items-center justify-around my-5  w-full md:text-base text-xs">
            <p> هزینه ارسال</p>

            <p>{totalPrice} تومان</p>
          </div>
          <div className="flex items-center justify-around my-5  w-full md:text-base text-xs">
            <p> جمع سبد خرید </p>

            <p>{totalPrice} تومان</p>
          </div>

          <Link to={"/checkout/cart/info"}>
            <BtnTow
              ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400 md:b-10 md:text-base text-xs my-5"
              ButtonText=" پرداخت"
              onClick={() => handleAddOrder()}
            />
          </Link>
        </div>
      </div>
      {OpenModal && UserInfo && (
        <AddressModall
          setOpenModal={setOpenModal}
          UserInfo={UserInfo}
          setLoadingdata={setLoadingdata}
        />
      )}
    </div>
  );
};

export default ShopingInfo;
