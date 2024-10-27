import React from "react";
import { FaArrowAltCircleLeft, FaMailchimp } from "react-icons/fa";
import { User } from "../../../types";
interface AddressInfoModallProps {
  setOpenChange: React.Dispatch<React.SetStateAction<boolean >>;
  UserInfo: User;
}
const AddressInfoModall: React.FC<AddressInfoModallProps> = ({
  setOpenChange,
  UserInfo,
}) => {
  return (
    <div>
      <div className="flex flex-col">
        <p className="flex items-center my-2">
          <FaMailchimp className="ml-5" />
          {UserInfo?.address ? UserInfo?.address?.address : "ادرس وارد نشده"}
        </p>
        <p className="flex items-center my-2">
          <FaMailchimp className="ml-5" />
          {UserInfo?.email ? UserInfo?.email : "ایمیل وارد نشده"}
        </p>
        <p className="flex items-center my-2">
          <FaMailchimp className="ml-5" />
          {UserInfo?.phone ? UserInfo?.phone : "شماره مویابل وارد نشده"}
        </p>{" "}
        <p className="flex items-center my-2">
          <FaMailchimp className="ml-5" />
          {UserInfo?.address?.postalCode
            ? UserInfo?.address?.postalCode
            : "کد پستی وارد نشده"}
        </p>{" "}
        <p className="flex items-center my-2">
          <FaMailchimp className="ml-5" />
          {UserInfo.firstName ? UserInfo?.firstName : "اسم وارد نشده"}{" "}
          {UserInfo?.lastName}
        </p>
        <button
          onClick={() => {
            setOpenChange(true);
          }}
          className="text-secondery flex items-center my-5"
        >
          <FaArrowAltCircleLeft className="ml-5" />
          ویرایش
        </button>
      </div>
    </div>
  );
};

export default AddressInfoModall;
