import React from "react";
 import { ErrorMessage, Field, Formik, Form } from "formik";

const Login:React.FC  = () => {
  return (
    <div className="signUpContainer formContainer">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          // createuser(values);
          console.log(values);
        }}
        //   validationSchema={uservalidation}
      >
        <Form className="regform">
          <h2 className="font-tanha text-base md:text-3xl text-white font-bold text-start px-1 md:px-10">
            ساخت حساب جدید
          </h2>
          {/* <div className="flex items-center justify-between w-40 my-2 ">
          <FaInstagram className="text-red-500" size={25} />
          <FaWhatsapp className="text-green-500" size={25} />
          <FaTelegram className="text-blue-500" size={25} />
        </div> */}
          {/* <span className="font-tanha text-xs  md:text-base my-2">
          برای ایجاد حساب جدید ثبت نام کنید و منتظر تایید ادمین باشید.
        </span> */}

          <div className="my-2 px-1 md:px-10 ">
            {" "}
            <label
              className={`block md:text-base font-medium text-xs text-white font-vazir text-start mb-2 `}
            >
              نام کاربری{" "}
            </label>
            <Field
              name="username"
              type="text"
              className="focus:bg-gray-200 border border-black text-black text-base rounded-lg block p-2  w-full "
            />
            <ErrorMessage
              name="username"
              render={(msg) => (
                <div className="text-red-500 font-vazir">{msg}</div>
              )}
            />
          </div>
          <div className="my-2 px-1 md:px-10 ">
            <label
              className={`block md:text-base font-medium text-xs text-white font-vazir text-start mb-2 `}
            >
              ایمیل{" "}
            </label>
            <Field
              name="email"
              type="email"
              className="focus:bg-gray-200 border border-black text-black text-base rounded-lg block p-2  w-full "
            />

            <ErrorMessage
              name="email"
              render={(msg) => <div className="text-red-500  ">{msg}</div>}
            />
          </div>
          <div className="my-2 px-1 md:px-10 ">
            <label
              className={`block md:text-base font-medium text-xs text-white font-vazir text-start mb-2 `}
            >
              آی دی اینستاگرام <span className="text-yellow-400 mx-2">(اختیاری)</span>
            </label>
            <Field
              name="email"
              type="email"
              className="focus:bg-gray-200 border border-black text-black text-base rounded-lg block p-2  w-full "
            />

            <ErrorMessage
              name="email"
              render={(msg) => <div className="text-red-500  ">{msg}</div>}
            />
          </div>
          <div className="my-2 px-1 md:px-10 ">
            <label
              className={`block md:text-base font-medium text-xs text-white font-vazir text-start mb-2 `}
            >
              رمز عبور{" "}
            </label>
            <Field
              name="password"
              type="password"
              className="focus:bg-gray-200 border border-black text-black text-base rounded-lg block p-2  w-full "
            />

            <ErrorMessage
              name="password"
              render={(msg) => <div className="text-red-500">{msg}</div>}
            />
          </div>
          <div className="my-2 px-1 md:px-10 ">
            <label
              className={`block md:text-base font-medium text-xs text-white font-vazir text-start mb-2 `}
            >
              تکرار رمز عبور{" "}
            </label>
            <Field
              name="confirmpassword"
              type="password"
              className="focus:bg-gray-200 border border-black text-black text-base rounded-lg block p-2  w-full "
            />

            <ErrorMessage
              name="confirmpassword"
              render={(msg) => <div className="text-red-500 ">{msg}</div>}
            />
          </div>
          <div className="mx-2 md:px-10 flex items-start flex-col">
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#281A3D] rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#281A3D] group-hover:-rotate-180 ease"></span>
                <span className="relative"> ثبت نام </span>
              </span>
              <span
                className="absolute bottom-0 right-0  h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-[#281A3D] rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
