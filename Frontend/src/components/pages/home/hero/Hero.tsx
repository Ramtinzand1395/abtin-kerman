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
import SliderpageTest from "../SliderpageTest";
import "./hero.css";

import test from "../../../../assets/Hero/ps5-Hero.jpg";
import test2 from "../../../../assets/Hero/redDead-Hero.jpg";
import test3 from "../../../../assets/Hero/gta-Hero.jpg";

const Hero: React.FC = () => {
  const SliderImage = [
    {
      id: 1,
      img: test,
      btn: "مشاهده",
      topText:  "انواع کنسول های بازی ",
      bottomText: "از جدیدترین کنسول های بازی روز دنیا تا کنسول های کلاسیک ",
    },
    {
      id: 2,
      img: test2,
      btn: "مشاه333333ده",
      topText: "جدیدترین بازی ها    ",
      bottomText: "جدیدترین بازی ها  هم به صورت دیسک هم به صورت اکانت های ظرفیتی ",
    },
    {
      id: 3,
      img: test3,
      btn: "مشاه333333ده",
      topText: " آخرین اخبار دنیای بازی",
      bottomText: " با مطالعه وبلاگ از آخرین آپدیت ها و اخبار روز دنیای بازی مطلع شوید.",
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
      className="mySwiper md:mx-auto md:container mx-2 rounded-lg"
    >
      {SliderImage.map((img) => (
        <SwiperSlide key={img.id}>
          <SliderpageTest img={img.img}  topText={img.topText} bottomText={img.bottomText} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
