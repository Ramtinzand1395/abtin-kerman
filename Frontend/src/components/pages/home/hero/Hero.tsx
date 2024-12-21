import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "./hero.css";  // Ensure this only includes necessary styles

import test3 from "../../../../assets/Hero/488598f9-6aca-4f29-8d85-1c6a3281a47c.webp";
import Stest3 from "../../../../assets/Hero/as-requested-the-individual-layers-to-the-gta-vi-key-art-v0-ig1e88inlh4c1-copy1.webp";
import test2 from "../../../../assets/Hero/Kerfin7_NEA_2337.webp";
import Stest2 from "../../../../assets/Hero/as-requested-the-individual-layers-to-the-gta-vi-key-art-v0-ig1e88inlh4c1New.webp";
import test from "../../../../assets/Hero/d65b8f21-ba9f-421a-9daf-c5c20446d502.webp";

import SliderpageTest from "../SliderpageTest";

const Hero: React.FC = () => {
  const SliderImage = React.useMemo(() => [
    {
      id: 1,
      img: test,
      // simg:Stest ,
      btn: "مشاهده",
      topText: "انواع کنسول های بازی ",
      bottomText: "از جدیدترین کنسول های بازی روز دنیا تا کنسول های کلاسیک ",
    },
    {
      id: 2,
      img: test2,
      simg:Stest2 ,
      btn: "مشاهده",
      topText: "جدیدترین بازی ها",
      bottomText: "جدیدترین بازی ها هم به صورت دیسک هم به صورت اکانت های ظرفیتی ",
    },
    {
      id: 3,
      img: test3,
      simg:Stest3 ,
      btn: "مشاهده",
      topText: "آخرین اخبار دنیای بازی",
      bottomText: "با مطالعه وبلاگ از آخرین آپدیت ها و اخبار روز دنیای بازی مطلع شوید.",
    },
  ], []);

  return (
    <Swiper
      // navigation={true}
      modules={[Navigation, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      className="mySwiper  rounded-lg h-[30vh] md:h-[40vh] my-5 lg:h-[70vh]"
    >
      {SliderImage.map((img) => (
        <SwiperSlide key={img.id}>
          <SliderpageTest simg={img.simg} img={img.img} topText={img.topText} bottomText={img.bottomText} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
