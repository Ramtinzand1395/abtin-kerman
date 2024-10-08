import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./BestSlider.css";
import Animations from "../utils/Animations";
import { getProductsService } from "../../services/ApiServices";
import ShopingCard from "../utils/ShopingCard";
import { Product } from "../../types";
const BestItemsSlider: React.FC = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getProductsService();
        setProducts(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="my-10">
      <Animations>
        <h2 className="font-bold text-lg lg:text-2xl mt-10 mb-2">
          جدید ترین محصولات
        </h2>{" "}
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
            slidesPerView: 5,
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
      >
        {Products.map((product) => (
          <SwiperSlide key={product._id}>
            {product._id && (
              <ShopingCard
                title={product.title}
                price={product.price}
                primaryImage={product.primaryImage}
                additionalImages={product.additionalImages}
                _id={product._id}
              />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BestItemsSlider;
