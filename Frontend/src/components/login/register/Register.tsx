import React from "react";
import { ErrorMessage, Field, Formik, Form } from "formik";
interface RegisterProps {
  signInClicked: boolean;
}
const Register: React.FC<RegisterProps> = ({ signInClicked }) => {
  return (
    <div className="signInContainer  formContainer">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        onSubmit={(values) => {
          // loginuser(values);
          console.log(values);
        }}
      >
        <Form className={`${signInClicked ? " hidden" : " regform"} `}>
          <h2 className="font-tanha text-base md:text-3xl text-white font-bold text-start px-1 md:px-10">
            ورود به حساب کاربری
          </h2>
          {/* <div className="flex items-center justify-between w-40 my-5">
            <FaInstagram className="text-red-500" size={25} />
            <FaWhatsapp className="text-green-500" size={25} />
            <FaTelegram className="text-blue-500" size={25} />
          </div> */}
          <div className="my-10 px-1 md:px-10">
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
              render={(msg) => <div className="text-red-500 m-4">{msg}</div>}
            />
          </div>
          <div className="my-10 px-1 md:px-10">
            <label
              className={`block md:text-base font-medium text-xs text-white font-vazir text-start mb-2 `}
            >
              پسورد
            </label>
            <Field
              name="password"
              type="password"
              className="focus:bg-gray-500 border border-black text-black text-base rounded-lg block p-2 w-full"
            />

            <ErrorMessage
              name="password"
              render={(msg) => <div className="text-red-500 m-4">{msg}</div>}
            />
          </div>
          <div className="mx-1 md:px-10 flex items-start flex-col">
            <button className="relative inline-block text-lg group">
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-[#281A3D] rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-[#281A3D] group-hover:-rotate-180 ease"></span>
                <span className="relative"> ورود </span>
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

export default Register;
