import React from "react";
import { SmsService } from "../../services/Userservice";
// import TrezSmsClient from "trez-sms-client"
// const client = new TrezSmsClient("ramtinzand", "Ramtin1995d");
const LoginBtn: React.FC = () => {
  const sendSms = async () => {
    try {
      console.log("first");
      const { data, status } = await SmsService();
      console.log(data);
      console.log(status);
      // client
      // .autoSendCode("09138433385", "کد ورود به برنامه کرمان آتاری")
      // .then((messageId) => {
      //   console.log("Sent Message ID: " + messageId);
      // })
      // .catch((error) => console.log(error));
    } catch (err) {
      console.log(err);
    }
  };

//   const TrezSmsClient = require("trez-sms-client");
// const client = new TrezSmsClient("ramtinzand", "Ramtin1995d");
// exports.sendSms = () => {
//     console.log("first")
//   client
//     .autoSendCode("09138433385", "کد ورود به برنامه کرمان آتاری")
//     .then((messageId) => {
//       console.log("Sent Message ID: " + messageId);
//     })
//     .catch((error) => console.log(error));
// };
  return (
    <div>
      <button className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
        <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
        <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
          <svg
            className="w-5 h-5 text-green-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M14 5l7 7m0 0l-7 7m7-7H3"
            ></path>
          </svg>
        </span>
        <span
          onClick={() => sendSms()}
          className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white"
        >
          ارسال پیامک
        </span>
      </button>
    </div>
  );
};

export default LoginBtn;
