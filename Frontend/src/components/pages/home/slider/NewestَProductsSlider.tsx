import React, { useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper core and required modules
import { Navigation, Autoplay } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "./newestَProductsSlider.css";
import Animations from "../../../utils/Animations";
import ShopingCard from "../../../utils/ShopingCard";
import LeftAnimation from "../../../utils/LeftAnimation";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  fetchProducts,
} from "../../../../features/product/productSlice";
import Spiner from "../../../utils/Spiner";

const NewestProductsSlider: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, products, error } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProducts({ pageNumber: 1, orderDesc: "newestFirst" }));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  if (loading === true) return <Spiner />;

  return (
    <div className="my-10">
      <Animations>
        <div className="flex items-center mt-10 mb-2">
          <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap my-5">
            جدید ترین محصولات
          </h2>
          <div className="w-full h-[8px] rounded-3xl bg-primary"></div>
        </div>
      </Animations>
      <LeftAnimation>
        <Swiper
          navigation={true}
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          breakpoints={{
            320: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          loop={true}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          scrollbar={{ draggable: true }}
          className="p-5"
        >
          {products &&
            products?.map((product) => (
              <SwiperSlide key={product._id}>
                <ShopingCard
                  title={product.title}
                  price={product.price}
                  primaryImage={product.primaryImage}
                  additionalImages={product.additionalImages}
                  _id={product._id}
                  tags={product.tags}
                  averageRating={product.averageRating}
                />
              </SwiperSlide>
            ))}
        </Swiper>
      </LeftAnimation>
    </div>
  );
};

export default NewestProductsSlider;
