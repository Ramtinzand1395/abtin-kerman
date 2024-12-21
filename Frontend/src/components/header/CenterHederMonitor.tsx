import React from "react";
import logo from "../../assets/atari-seeklogo.svg";
import SearchProducts from "./SearchProducts";

const CenterHederMonitor: React.FC = () => {
  return (
    <div className="mx-2 flex items-center justify-between gap-5 my-2">
      {/* Logo */}
      <div className="flex items-center text-2xl">
        <img  width={"400px"}
              height={"400px"} src={logo} className="w-14 h-14" alt="Logo" />
        <h2 className="mx-2 whitespace-nowrap text-primary">کرمان آتاری</h2>
        {/* Search */}
        <div className="">
          <div className="flex">
           <SearchProducts />
          </div>
        </div>
      </div>
      {/* Free */}
      <div className="flex">
        <div className="flex flex-col gap-1 ml-5 whitespace-nowrap text-sm">
          <p>سرویس ارسال اکسپرس</p>
          <p>ارسال رایگان در شهر کرمان</p>
        </div>
        <div className="">
          <svg
            width="50px"
            height="50px"
            viewBox="0 0 64 64"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M62 50.8c0-1-.8-1.9-1.9-1.9H3.9c-1 0-1.9.8-1.9 1.9v1.9c0 1 .8 1.9 1.9 1.9h56.2c1 0 1.9-.8 1.9-1.9v-1.9"
              fill="#b2c1c0"
            ></path>

            <ellipse
              cx="12.3"
              cy="55.5"
              rx="6.6"
              ry="6.5"
              fill="#3e4347"
            ></ellipse>

            <ellipse
              cx="12.3"
              cy="55.5"
              rx="3.8"
              ry="3.7"
              fill="#b2c1c0"
            ></ellipse>

            <ellipse
              cx="50.8"
              cy="55.5"
              rx="6.6"
              ry="6.5"
              fill="#3e4347"
            ></ellipse>

            <ellipse
              cx="50.8"
              cy="55.5"
              rx="3.8"
              ry="3.7"
              fill="#b2c1c0"
            ></ellipse>

            <path
              d="M54.5 19H28.2c-3.1 0-5.6 2.5-5.6 5.6v24.3h37.5V24.6c0-3.1-2.5-5.6-5.6-5.6"
              fill="#62727a"
            ></path>

            <path
              d="M15.1 26.5c-4.5 0-5.6 0-5.6 7.5c0 5.6-5.6 5.6-5.6 11.2v3.7h18.8V26.5h-7.6"
              fill="#f15744"
            ></path>

            <path fill="#ffce31" d="M5.8 43.3h1.9V47H5.8z"></path>

            <path
              d="M12.8 39.6c-1.1 0-1.7.8-1.3 1.8l1.6 4c.4 1 1.6 1.7 2.7 1.7h3c1.1 0 2-.8 2-1.9v-3.7c0-1-.9-1.9-2-1.9h-6"
              fill="#d33b23"
            ></path>

            <g fill="#3e4347">
              <path d="M20.8 28.3h-7.5s-1.9.2-1.9 2.8v4.5s0 2.1 1.9 2.1h7.5v-9.4"></path>

              <circle cx="12.3" cy="51.7" r=".9"></circle>

              <circle cx="9.1" cy="53.6" r=".9"></circle>

              <path d="M8.6 56.5c.4-.3 1-.1 1.3.3c.3.4.1 1-.3 1.3c-.4.3-1 .1-1.3-.3c-.3-.5-.2-1 .3-1.3"></path>

              <circle cx="12.3" cy="59.2" r=".9"></circle>

              <circle cx="15.6" cy="57.3" r=".9"></circle>

              <circle cx="15.6" cy="53.6" r=".9"></circle>
            </g>

            <circle cx="12.3" cy="55.5" fill="#62727a" r="1.9"></circle>

            <g fill="#3e4347">
              <circle cx="50.8" cy="51.7" r=".9"></circle>

              <circle cx="47.5" cy="53.6" r=".9"></circle>

              <path d="M47 56.5c.4-.3 1-.1 1.3.3c.3.4.1 1-.3 1.3c-.4.3-1 .1-1.3-.3c-.3-.5-.1-1 .3-1.3"></path>

              <circle cx="50.8" cy="59.2" r=".9"></circle>

              <circle cx="54" cy="57.3" r=".9"></circle>

              <circle cx="54" cy="53.6" r=".9"></circle>
            </g>

            <circle cx="50.8" cy="55.5" fill="#62727a" r="1.9"></circle>

            <g fill="#ffffff">
              <path d="M28.4 32.7c-.5-.4-1.2-.6-2.2-.6c-.6 0-1.2 0-1.6.1v5.4c.3 0 .8.1 1.4.1c1.1 0 1.9-.3 2.5-.8c.5-.5.9-1.2.9-2.2c-.2-.9-.5-1.5-1-2m-2.3 4.2h-.6V33c.1 0 .4-.1.7-.1c1.3 0 2 .7 2 1.9c0 1.4-.8 2.1-2.1 2.1"></path>

              <path d="M33.2 35.2h-2.1v1.6h2.3v.8h-3.3v-5.5h3.2v.9h-2.2v1.4h2.1v.8"></path>

              <path d="M35.3 36.8v-4.7h-1v5.5h3.3v-.8z"></path>

              <path d="M38.3 32.1h1v5.5h-1z"></path>

              <path d="M43.7 32.1l-.8 2.5c-.2.7-.4 1.3-.6 2c-.1-.7-.3-1.3-.5-2l-.8-2.5h-1l1.8 5.5H43l1.9-5.5h-1.2"></path>

              <path d="M46.4 36.8v-1.6h2.1v-.8h-2.1V33h2.2v-.9h-3.2v5.5h3.3v-.8z"></path>

              <path d="M53.1 36.1c-.1-.5-.4-.9-.8-1.1c.5-.2 1-.7 1-1.4c0-.5-.2-.8-.5-1.1c-.4-.3-.9-.4-1.7-.4c-.6 0-1.1 0-1.5.1v5.4h1v-2.3h.5c.6 0 .8.2 1 1c.2.7.3 1.1.4 1.3h1c-.1-.2-.2-.8-.4-1.5m-1.9-1.5h-.6v-1.7h.6c.7 0 1.1.3 1.1.9c0 .5-.4.8-1.1.8"></path>

              <path d="M57.1 32.1l-.7 1.4c-.2.4-.3.7-.5 1.1c-.1-.4-.3-.7-.5-1.1l-.7-1.4h-1.1l1.7 3.2v2.3h1v-2.3l1.8-3.2h-1"></path>
            </g>

            <g fill="#3e4347">
              <path d="M27.3 30.2v-5.6c0-.5.4-.9.9-.9h26.2c.5 0 .9.4.9.9v5.6h1.9v-5.6c0-1.5-1.3-2.8-2.8-2.8H28.2c-1.6 0-2.8 1.3-2.8 2.8v5.6h1.9"></path>

              <path d="M55.4 39.6v3.7c0 .5-.4.9-.9.9H28.2c-.5 0-.9-.4-.9-.9v-3.7h-1.9v3.7c0 1.5 1.3 2.8 2.8 2.8h26.2c1.6 0 2.8-1.3 2.8-2.8v-3.7h-1.8"></path>
            </g>

            <g fill="#b2c1c0">
              <circle cx="29.2" cy="25.5" r=".9"></circle>

              <circle cx="53.6" cy="25.5" r=".9"></circle>

              <circle cx="29.2" cy="42.4" r=".9"></circle>

              <circle cx="53.6" cy="42.4" r=".9"></circle>
            </g>

            <path
              d="M37.6 55.5c0 1-.8 1.9-1.9 1.9h-7.5c-1 0-1.9-.8-1.9-1.9v-1.9c0-1 .8-1.9 1.9-1.9h7.5c1 0 1.9.8 1.9 1.9v1.9"
              fill="#62727a"
            ></path>

            <path
              d="M28.5 52.7c-.6 0-1.2.4-1.2.9s.5.9 1.2.9h7c.6 0 1.2-.4 1.2-.9s-.5-.9-1.2-.9h-7"
              fill="#b2c1c0"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CenterHederMonitor;
