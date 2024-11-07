import takhfif from "../../../../assets/discountpng.parspng.com-6.png";
// import OffSwiperSlide_1 from "./OffSwiperSlide_1";
// swiper core styles
import "swiper/css";
// modules styles
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/bundle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { GameData } from "../../../../types";
import { getGameService } from "../../../../services/ApiServices";
import OffSwiperSlide_1 from "./OffSwiperSlide_1";
const SpesialOffers = () => {
  const [Games, setGames] = useState<GameData[]>([]);

  useEffect(() => {
    const getGames = async () => {
      const pageNumber = 1;
      const orderDesc = "newestFirst";
      try {
        const { data } = await getGameService(pageNumber, orderDesc);
        setGames(data.games);
      } catch (err) {
        console.log(err);
      }
    };
    getGames();
  }, []);
  return (
    <div className="w-full flex items-center h-[40vh] bg-primary p-5 rounded-2xl">
      <div className="flex items-center justify-center flex-col bg-primary w-40 h-auto p-5">
        <img src={takhfif} className="" alt="" />
        <button className="bg-[#f54952] font-tanha text-white rounded-lg py-1 px-4 text-sm whitespace-nowrap">
          مشاهده همه
        </button>
      </div>

      <Swiper
        style={
          {
            // "--swiper-navigation-color": "#f54952",
            // "--swiper-navigation-size": "30px",
          }
        }
        className="rounded-2xl"
        modules={[Navigation]}
        freeMode={true}
        slidesPerView={4}
        dir="rtl"
        navigation={true}
        autoplay={{
          delay: 2000,
          // pauseOnMouseEnter: "true",
          // waitForTransition: "false",
          // disableOnInteraction: "false",
        }}
        breakpoints={{
          "@0.00": {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          "@0.75": {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          "@1.00": {
            slidesPerView: 6,
            spaceBetween: 20,
          },
          "@1.50": {
            slidesPerView: 6,
            spaceBetween: 2,
          },
        }}
      >
        {Games.map((item, index) => (
          <SwiperSlide key={index}>
            <OffSwiperSlide_1 item={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SpesialOffers;

// import React from "react";
// import LeftAnimation from "../../utils/LeftAnimation";
// import Animations from "../../utils/Animations";
// const SpesialOffers: React.FC = () => {
//   return (
//     <div className="">
//         <Animations>
//         <div className="flex items-center mt-10 mb-2">
//           <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap ml-5">
//            تخفیف ها
//           </h2>{" "}
//           <div className="w-full h-[8px] rounded-3xl bg-primary"></div>{" "}
//         </div>
//       </Animations>
//       <div className="fixedImage relative  h-[60vh] bg-gray-200 rounded-lg p-5">
//         <LeftAnimation>
//           <h4 className="lg:font-extrabold font-light text-primary  mt-5 ">
//             پیشنهاد های ویژه کرمان آتاری
//           </h4>
//         </LeftAnimation>
//         <div className="absolute bottom-24 right-10">
//           <button className="relative inline-flex items-center px-3 py-2 lg:px-8 lg:py-3 overflow-hidden text-lg font-medium bg-red-500 text-black border-2 border-red-600 rounded-2xl hover:text-white group hover:bg-gray-50">
//             <span className="absolute left-0 block w-full h-0 transition-all bg-red-700 opacity-100 group-hover:h-full top-1/2 group-hover:top-0 duration-400 ease"></span>
//             <span className="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
//               <FaArrowRight />
//             </span>
//             <span className="relative text-white">مشاهده بیشتر </span>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SpesialOffers;