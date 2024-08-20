import React, { useState } from "react";

import Register from "./register/Register";
import Login from "./login/Login";
import MonitorMenu from "../header/MonitorMenu";

const Login_register: React.FC = () => {
  const [signInClicked, setSignInClicked] = useState<boolean>(false);

  return (
    <div>
      <div className="Login_bg">
        <div>
          <div
            className={`${
              signInClicked ? "rightPanelActive" : "container2"
            } ${"container2"} w-[90vw] h-[70vh] md:w-[70vw] md:h-[90vh] rounded-3xl`}
            id="container"
          >
            <Login />
            <Register signInClicked={signInClicked} />
            <div className="overlayContainer">
              <div className="overlay">
                <div className="overlayLeft overlayPanel">
                  <h1 className="font-tanha text-base md:text-2xl text-white font-bold">
                    خوش آمدید
                  </h1>
                  <p className="font-tanha text-xs my-2">
                    برای شرکت در دوره ها و دریافت ایمیل از اینجا وارد شوید
                  </p>
                  <button
                    className="bg-transparent bg-white whitespace-nowrap text-black px-10 py-2 font-vazir mt-5 rounded-full"
                    onClick={() => setSignInClicked(false)}
                    id="signIn"
                  >
                    وارد شوید
                  </button>
                </div>
                <div className="overlayRight overlayPanel">
                  <h1 className="font-tanha text-base md:text-2xl text-white font-bold">
                    دوست من سلام
                  </h1>
                  <p className="font-tanha text-xs my-2">
                    اگه میخوای به آموزش ها دسترسی داشته باشی و به درآمد برسی از
                    اینجا ثبت نام کن
                  </p>
                  <button
                    className="bg-transparent bg-white whitespace-nowrap text-black px-10 py-2 font-vazir mt-5 rounded-full"
                    onClick={() => setSignInClicked(true)}
                    id="signUp"
                  >
                    ثبت نام
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_register;
