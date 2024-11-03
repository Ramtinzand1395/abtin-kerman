import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "./hero.css";  // Ensure this only includes necessary styles

import test from "../../../../assets/Hero/ps5-Hero.jpg";
import test2 from "../../../../assets/Hero/redDead-Hero.jpg";
import test3 from "../../../../assets/Hero/gta-Hero.jpg";
import SliderpageTest from "../SliderpageTest";

const Hero: React.FC = () => {
  const SliderImage = React.useMemo(() => [
    {
      id: 1,
      img: test,
      btn: "مشاهده",
      topText: "انواع کنسول های بازی ",
      bottomText: "از جدیدترین کنسول های بازی روز دنیا تا کنسول های کلاسیک ",
    },
    {
      id: 2,
      img: test2,
      btn: "مشاهده",
      topText: "جدیدترین بازی ها",
      bottomText: "جدیدترین بازی ها هم به صورت دیسک هم به صورت اکانت های ظرفیتی ",
    },
    {
      id: 3,
      img: test3,
      btn: "مشاهده",
      topText: "آخرین اخبار دنیای بازی",
      bottomText: "با مطالعه وبلاگ از آخرین آپدیت ها و اخبار روز دنیای بازی مطلع شوید.",
    },
  ], []);

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
      className="mySwiper md:mx-auto md:container mx-2 rounded-lg"
    >
      {SliderImage.map((img) => (
        <SwiperSlide key={img.id}>
          <SliderpageTest img={img.img} topText={img.topText} bottomText={img.bottomText} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
