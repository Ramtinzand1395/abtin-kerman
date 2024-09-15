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

import test from "../../assets/abtin.png";
import test2 from "../../assets/abtin 2.png";
import test3 from "../../assets/abtin 3.png";

const Slider: React.FC = () => {
  const SliderImage = [
    {
      id: 1,
      img: test,
      btn: "مشاهده",
      topText: "انواع کنسول های ",
      bottomText: "بازی",
    },
    {
      id: 2,
      img: test2,
      btn: "مشاه333333ده",
      topText: "جدیدترین  ",
      bottomText: "بازی",
    },
    {
      id: 3,
      img: test3,
      btn: "مشاه333333ده",
      topText: "به روز ترین  ",
      bottomText: "خبر ها",
    },
  ];
  return (
    <Swiper
      navigation={true}
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      scrollbar={{ draggable: true }}
      className="mySwiper md:mx-auto md:container mx-2"
    >
      {SliderImage.map((img) => (
        <SwiperSlide>
          <SliderpageTest img={img.img}  topText={img.topText} bottomText={img.bottomText} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
