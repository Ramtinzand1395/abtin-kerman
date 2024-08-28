import React from "react";
import { MdClose } from "react-icons/md";
import LoginBtn from "../utils/LoginBtn";
import { GoogleLogin } from "@react-oauth/google";
interface LoginModallProps {
  setOpenModall: React.Dispatch<React.SetStateAction<boolean>>;
}
const LoginModall: React.FC<LoginModallProps> = ({ setOpenModall }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Stop event propagation to prevent closing the modal when clicked inside
    event.stopPropagation();
  };
  // // ! googleAuth
  // const googleAuth =() =>{
  //   window.open("http://localhost:5000/auth/google/callback"),
  //   "_self"
  // };
  // const logout =() =>{
  //   window.open("http://localhost:5000/auth/logout"),
  //   "_self"
  // };
  // const client_Id = "776628364639-ldnc8nnj8t0mfgrqldcijddfeaip3se8.apps.googleusercontent.com"
  return (
    <>
      <div
        onClick={() => setOpenModall(false)}
        className="bg-gray-700 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"
      >
        <div
          className={` md:h-[35vh] md:w-[50vw] h-[45vh] w-[80vw]  rounded-t-2xl bg-primary `}
          onClick={handleModalClick}
        >
          <MdClose
            onClick={() => setOpenModall(false)}
            size={30}
            color="white"
            className="m-4 cursor-pointer"
          />
          <div className="flex items-center justify-center flex-col ">
            <p className="text-white text-base text-center md:text-xl">
              برای ورود/ثبت نام شماره موبایل خود را وارد نمایید :
            </p>
            <input
              type="number"
              className="my-5 rounded-lg px-10 py-3 no-arrows"
              placeholder="09131432045"
              title="login"
            />
            <LoginBtn />
            {/* !GOOGLE BTN */}
            {/* <button onClick={googleAuth}>
              ورود به حساب کاربری google
            </button>
            <button onClick={logout}>
              خروج
            </button> */}
            <div className="">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log(credentialResponse, "res");
                }}
                onError={() => {
                  console.log("Login Failed");
                }}
                useOneTap
              />
              ;
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginModall;
