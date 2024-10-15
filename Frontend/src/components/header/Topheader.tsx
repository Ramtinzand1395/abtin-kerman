import React from "react";
import { CiMobile3 } from "react-icons/ci";
import { MdEmail } from "react-icons/md";

import { useShopingcard } from "../context/ShopingCard";
import MiniShoppingCard from "../shopping card/MiniShoppingCard";
import { FaLocationPinLock } from "react-icons/fa6";

const Topheader: React.FC = () => {
  // const [OpenModall, setOpenModall] = useState(false);
  // const [User, setUser] = useState<UserType | null>(null);

  // // !DROP ITHEMS
  // const DropdownIthem = {
  //   text1: "ویرایش حساب کاربری",
  //   icon1: FiEdit,
  //   link1: `/dashboard/${User?._id}`,
  //   text2: "ویرایش حساب کاربری",
  //   icon2: FiEdit,
  //   text3: "ویرایش حساب کاربری",
  //   icon3: FiEdit,
  //   text4: "خروج",
  //   icon4: FiEdit,
  //   link4: "exite",

  //   title: "خوش آمدید",
  // };
  const { OpenMiniShoppingcard, setOpenMiniShoppingcard } = useShopingcard();
  return (
    <div className="bg-primary p-2 flex items-center justify-around text-xs mb-2">
      {OpenMiniShoppingcard && (
        <MiniShoppingCard setOpenMiniShoppingcard={setOpenMiniShoppingcard} />
      )}
      <div className=" items-center hidden md:flex">
        <MdEmail color="white" className="ml-2" size={20} />
        <p className="text-white">پشتیبانی:kermanatari.ir@gmail.com</p>
      </div>
      <div className=" items-center hidden md:flex">
        <CiMobile3 color="white" className="ml-2" size={20} />
        <p className="text-white">پیگیری سفارش:09383077225</p>
      </div>
      {/* CHANGE ICON TO DASHBOARD */}
      {/* {User ? (
        <div className="">
          <DropDown
            setUser={setUser}
            DropdownIthem={DropdownIthem}
            setOpenModall={setOpenModall}
          />
        </div>
      ) : (
        <div className="flex items-center">
          <FaUser color="white" className="ml-2" size={20} />
          <p
            onClick={() => setOpenModall(true)}
            className="text-white cursor-pointer"
          >
            ورود/ثبت نام
          </p>
          {OpenModall && (
            <LoginModall setUser={setUser} setOpenModall={setOpenModall} />
          )}
          <div className="flex items-center mr-10">
            <button
              onClick={() => setOpenMiniShoppingcard(true)}
              className="text-white cursor-pointer flex  items-center"
            >
              {" "}
              <span className="bg-white p-1 w-5 h-5 rounded-full text-black mx-2 flex justify-center items-center">
                {CardItems.length > 0 ? CardItems.length : 0}
              </span>
              <BsBasket3Fill color="white" className="ml-2" size={20} />
            </button>
          </div>
        </div>
      )} */}
      <div className=" items-center hidden md:flex">
        <FaLocationPinLock color="white" className="ml-2" size={20} />
        <p className="text-white"> آدرس:09383077225</p>
      </div>
    </div>
  );
};

export default Topheader;
