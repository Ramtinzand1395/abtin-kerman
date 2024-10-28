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
import "./newestَProductsSlider.css";
import Animations from "../../../utils/Animations";
import { getProductsService } from "../../../../services/ApiServices";
import ShopingCard from "../../../utils/ShopingCard";
import { Product } from "../../../../types";
import LeftAnimation from "../../../utils/LeftAnimation";
const NewestَProductsSlider: React.FC = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  const [orderDesc, setOrderDesc] = useState("newestFirst");
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await getProductsService(pageNumber, orderDesc);
        setProducts(data.products);
      } catch (err) {
        console.log(err);
      }
    };
    getProducts();
  }, []);
  return (
    <div className="my-10">
      <Animations>
        <div className="flex items-center mt-10 mb-2">
          <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap ml-5">
            جدید ترین محصولات
          </h2>{" "}
          <div className="w-full h-[8px] rounded-3xl bg-primary"></div>{" "}
        </div>
      </Animations>
      <LeftAnimation>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 320px
            320: {
              slidesPerView: 2,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 3,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 4,
            },
            // when window width is >= 1440px
            1440: {
              slidesPerView: 4,
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
          {Products &&
            Products.map((product) => (
              <SwiperSlide key={product._id}>
                {product._id && (
                  <ShopingCard
                    title={product.title}
                    price={product.price}
                    primaryImage={product.primaryImage}
                    additionalImages={product.additionalImages}
                    _id={product._id}
                    tags={product.tags}
                  />
                )}
              </SwiperSlide>
            ))}
        </Swiper>
      </LeftAnimation>
    </div>
  );
};

export default NewestَProductsSlider;
