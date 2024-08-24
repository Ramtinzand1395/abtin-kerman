import React from "react";
import img from "../../assets/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20-800x800.png";
import BtnOne from "../utils/BtnOne";
import Tabs from "../utils/Tabs";
import ProductInformationTab from "./ProductInformationTab";
import ProductReturnTermsTab from "./ProductReturnTermsTab";
import ConnectedProducts from "./ConnectedProducts";
const SingleProductPage: React.FC = () => {
  return (
    <div className="md:container md:mx-auto mx-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 bg-slate-100 mt-10 p-5">
        {/* img */}
        <div className="flex flex-col items-center justify-center">
          <img
            src={img}
            className="w-7/12 hover:scale-110 transition-all ease-in-out duration-150 "
            alt=""
          />
          <div className="flex items-center justify-center">
            <img
              src={img}
              className="w-2/12 border-2 border-white p-2 mx-2"
              alt=""
            />
            <img
              src={img}
              className="w-2/12 border-2 border-white p-2 mx-2"
              alt=""
            />
          </div>
        </div>
        <div className=" flex flex-col justify-between items-start">
          <h3 className="font-bold font-tanha text-2xl">
            ساعت هوشمند اپل واچ 3 مدل 38mm Gold Aluminum Band
          </h3>
          <span className="text-red-500 font-bold ">۲,۰۸۰,۰۰۰ تومان</span>
          <p>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در
            ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و
            کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی
            در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را
            می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی
            الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این
            صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و
            شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد
            استفاده قرار گیرد.
          </p>
          <span>رنگ : رزگلد</span>
          <BtnOne />
        </div>
      </div>
      <div className="border-2 border-gray-500">
        <Tabs
          ProductInformationTab={ProductInformationTab}
          ProductReturnTermsTab={ProductReturnTermsTab}
        />
      </div>
      <div className="my-10">
        <ConnectedProducts />
      </div>
    </div>
  );
};

export default SingleProductPage;
