import React, { useState } from "react";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { addUserInfoService } from "../../../services/ApiServices";
import { toast } from "react-toastify";
import { User } from "../../../types";
interface GetUserInformationProps{
  address :string,
  City :string,
  Provider :string,
  UserInfo :User,
  setLoadingdata :React.Dispatch<React.SetStateAction<boolean >>,
}
const GetUserInformation:React.FC<GetUserInformationProps> = ({
  address,
  City,
  Provider,
  UserInfo,
  setLoadingdata,
}) => {
  const user = JSON.parse(localStorage.getItem("User") || "{}");
  const [userInfo, setUserInfo] = useState({
    plaque: UserInfo?.address?.plaque || "",
    unit: UserInfo?.address?.unit || "",
    postalCode: UserInfo?.address?.postalCode || "",
    firstName: UserInfo?.firstName || "",
    lastName: UserInfo?.lastName || "",
    phone: UserInfo?.phone || "",
    address: address || "", // Initialize from props
    city: City || "", // Initialize from props
    provider: Provider || "", 
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };
  const handleAddUserInf = async () => {
    setLoadingdata(true);
    try {
      const { data } = await addUserInfoService({
        userInfo,
        userId: user?._id,
      });
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingdata(false);
    }
  };
  return (
    <div>
      <div className="border-b-2">
        <h5>نشانی پستی</h5>
        <textarea
        title="address"
          value={userInfo.address}
          onChange={handleChange}
          name="address"
          className="border-2 w-full my-2 p-3 rounded-lg"
        >
          {address}
        </textarea>
        <button className="text-secondery flex items-center mb-2">
          <FaArrowAltCircleLeft className="ml-5" />
          اصلاح موقیت مکانی روی نقشه
        </button>
      </div>
      <div className="border-b-2 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5 mb-4 ">
          {/* دارپ دون */}
          <div className="">
            استان
          
            {City}
          </div>
          <div className="">
            شهر
           
            {Provider}
          </div>
        </div>

        <div className="grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between gap-5">
          <div className="flex flex-col">
            <label htmlFor="">پلاک</label>
            <input
              value={userInfo.plaque}
              onChange={handleChange}
              id="plaque"
              title="plaque"
              name="plaque"
              type="text"
              className="px-2 border-2 rounded-lg text-subtitle py-5 lg:py-2 w-full rounded-medium"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">واحد</label>
            <input
              id="unit"
              name="unit"
              type="text"
              title="unit"
              className="px-2 border-2 rounded-lg text-subtitle py-5 lg:py-2 w-full rounded-medium"
              value={userInfo.unit}
              onChange={handleChange}
            />
          </div>{" "}
          <div className="">
            <label htmlFor="">کد پستی</label>
            <input
              id="postalCode"
              name="postalCode"
              className="px-2 border-2 rounded-lg text-subtitle w-full py-5 lg:py-2 rounded-medium"
              placeholder="کد پستی ده رقمی بدون خط"
              type="text"
              value={userInfo.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>
      </div>

      {/* نام و نام خانوادگی */}
      <div className="my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="">
          <label htmlFor="">نام</label>
          <input
            id="firstName"
            name="firstName"
            className="px-2 border-2 rounded-lg text-subtitle w-full py-5 lg:py-2 rounded-medium"
            placeholder="علی"
            type="text"
            value={userInfo.firstName}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="">نام خانوادگی</label>
          <input
            id="lastName"
            name="lastName"
            className="px-2 border-2 rounded-lg text-subtitle w-full py-5 lg:py-2 rounded-medium"
            placeholder="حسینی"
            type="text"
            value={userInfo.lastName}
            onChange={handleChange}
          />
        </div>
        <div className="">
          <label htmlFor="phone">شماره موبایل</label>
          <input
            id="phone"
            name="phone"
            className="px-2 border-2 rounded-lg text-subtitle w-full py-5 lg:py-2 rounded-medium"
            placeholder="0913******85"
            type="text"
            value={userInfo.phone}
            onChange={handleChange}
          />
        </div>
      </div>
      {/* دکمه */}
      <div className="sticky bottom-0 bg-white flex items-center justify-center p-2 border-t-2">
        <button onClick={() => handleAddUserInf()} className="bg-red-400 p-2">
          ثبت آدرس
        </button>
      </div>
    </div>
  );
};

export default GetUserInformation;
