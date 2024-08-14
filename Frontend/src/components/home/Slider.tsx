import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SliderpageTest from "./SliderpageTest";
import "./SliderCss.css";

import test from "../../assets/Top-Slider1.jpg";
import test2 from "../../assets/5902176975248802860.jpg";
const Slider: React.FC = () => {
  const SliderImage = [
    {
      id: 1,
      img: test,
      btn:"مشاهده"
    },
    {
      id: 2,
      img: test2,
      btn:"مشاه333333ده"

    },

  ];
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      // autoplay={{
      //   delay: 3500,
      //   disableOnInteraction: false,
      // }}
      scrollbar={{ draggable: true }}
      className="w-full h-[50vh] bg-white"
    >
      {SliderImage.map((img) => (
        <SwiperSlide>
          <SliderpageTest img={img.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
