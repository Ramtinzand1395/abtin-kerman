import React from "react";

const UserInformation: React.FC = () => {
  return (
    <div className=" w-full md:container md:mx-auto mx-2">
      <div className=" border-2 shadow-lg p-5 my-10">
        <h2 className="font-tanha font-bold text-lg border-b-2">
          اطلاعات حساب کاربری
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-4">
          <div className="">
            <p>نام و نام خانوادگی</p>
            <p className="mt-4">شماره تماس</p>
          </div>
          <div className="">
            <p>ایمیل</p>
          </div>
        </div>
      </div>
   
    </div>
  );
};

export default UserInformation;
