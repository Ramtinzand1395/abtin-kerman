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
      {/* <div className=" border-2 shadow-lg p-5 my-10">
        <h2 className="font-tanha font-bold text-lg border-b-2">
          ویرایش حساب کاربری
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-4">
            <div className="flex items-center justify-between">
              <p>نام و نام خانوادگی</p>
              <input
              title="username"
                className="block p-1.5 text-sm text-gray-900  rounded-lg border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
                type="text"
              />
            </div>
            <div className="flex items-center justify-between ">
              <p>شماره تماس</p>
              <input
              title="username"
                className="block p-1.5 no-arrows text-sm text-gray-900  rounded-lg border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
                type="number"
              />
            </div>
          <div className="flex items-center justify-between">
              <p>ایمیل</p>
              <input
              title="username"
              className="block p-1.5 text-sm text-gray-900  rounded-lg border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
              type="text"
              />
              </div>
          <div className="">
          <div className="flex items-center justify-between">
              <p>ایمیل</p>
              <input
              title="username"
              className="block p-1.5 text-sm text-gray-900  rounded-lg border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
              type="text"
              />
              </div>
              <div className="flex items-center justify-between">
              <p>ایمیل</p>
              <input
              title="username"
              className="block p-1.5 text-sm text-gray-900  rounded-lg border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
              type="text"
              />
              </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default UserInformation;
