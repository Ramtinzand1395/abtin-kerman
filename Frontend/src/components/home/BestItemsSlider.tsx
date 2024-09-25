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
import img from "../../assets/_24c0f808-1d10-4db6-85a5-ed48e14014cf.jpg";
import "./BestSlider.css";
import Card from "../utils/Card";
import ShopingCard from "../utils/ShopingCard";
import Animations from "../utils/Animations";
const BestItemsSlider: React.FC = () => {
  const CardIthem = [
    {
      id: 1,
      OpenTags: false,
      OpenDiscount: false,
      title: "بامپر فلزی نیلکین آیفون ",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
    {
      id: 2,
      OpenTags: true,
      OpenDiscount: true,
      discount: 50,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
    {
      id: 3,
      title: "بامپر فلزی نیلکین آیفون ",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
    {
      id: 4,
      OpenTags: true,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
    {
      id: 5,
      OpenTags: true,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
  ];
  return (
    <div className="mt-10">
        <Animations>
        <h2 className="font-bold text-lg lg:text-2xl mt-10 mb-2">جدید ترین محصولات</h2>{" "}
      </Animations>
      <div className="w-full h-[8px] rounded-3xl border-2 border-gray-500 mb-2"></div>{" "}
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        spaceBetween={10}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 1,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 3,
          },
          // when window width is >= 1440px
          1440: {
            slidesPerView: 5,
          },
        }}
        loop={true}
        //   centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        scrollbar={{ draggable: true }}
        className=" "
      >
       
        {CardIthem.map((card) => (
          <SwiperSlide key={card.id}>
            <ShopingCard
              title={card.title}
              price={card.price}
              btnText={card.btnText}
              OpenTag={card.OpenTags}
              OpenDiscount={card.OpenDiscount}
              discount={card.discount}
              image={card.image}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestItemsSlider;
