import React, { useEffect, useState } from "react";
import { getProductService } from "../../services/ApiServices";
import { useParams } from "react-router-dom";
import { FaComment, FaShare } from "react-icons/fa";
import BtnIcon from "../utils/BtnIcon";
import { FaBagShopping } from "react-icons/fa6";
import { CiHeart, CiShare2 } from "react-icons/ci";
import ConnectedProducts from "../Products/ConnectedProducts";
import Tabs from "../utils/Tabs";
import ProductInformationTab from "../Products/ProductInformationTab";
import ProductReturnTermsTab from "../Products/ProductReturnTermsTab";
import { Product } from "../../types";

const ProductPage: React.FC = () => {
  const [Product, setProduct] = useState<Product>();
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      if (!productId) return;
      try {
        const { data } = await getProductService(productId);
        setProduct(data);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, []);
  const handleAddFeature = () => {
    console.log("first");
  };
  console.log(Product, "sasasa");
  return (
    <div className="md:container md:mx-auto mx-2">
      <div className="grid grid-cols-12 gap-5">
        {/* قسمت نمایش محصول */}
        <div className="col-span-12 md:col-span-8 border-2 rounded-lg p-5 mb-10  flex md:flex-row flex-col-reverse justify-around">
          <div
            className="
      flex justify-center flex-col
      order-1 md:order-2
      "
          >
            {/* آیکون ها */}
            <div className="flex items-center justify-around w-full">
              <button title="Icon" className="border-2 p-2 shadow-md">
                <CiShare2 />
              </button>
              <button title="Icon" className="border-2 p-2 shadow-md">
                <CiHeart />
              </button>

              <button title="Icon" className="border-2 p-2 shadow-md">
                <FaComment />
              </button>

              <button title="Icon" className="border-2 p-2 shadow-md">
                <FaShare />
              </button>
            </div>
            <img
              src={`http://localhost:5000/${Product?.primaryImage?.direction}`}
              alt=""
              className="w-full h-full object-contain max-w-[300px] max-h-[300px]"
            />
            <div className=" items-center hidden md:flex">
              {Product?.additionalImages?.map((img) => (
                <img
                  src={`http://localhost:5000/${img?.direction}`}
                  alt=""
                  className="w-full h-full object-contain max-w-[70px] max-h-[70px] border-2 border-primary p-2 "
                />
              ))}
            </div>
          </div>

          <div className="">
            <h3 className="my-2">{Product?.title}</h3>
            <p className="my-2">رنگ : سفید</p>
            <label>ویژگی ها</label>
            <div className="border-2 border-primary rounded-lg w-full md:w-[30vw] p-3">
              <ul>
                {Product?.features?.map((feature, index) => (
                  <li className="my-2" key={index}>
                    <strong>{feature.key}</strong>: {feature.value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* قسمت سبد خرید صفحه */}
        <div
          className=" 
        rounded-lg border-2 w-full bg-white z-10
        fixed bottom-0 mb-0  p-2 col-span-0
        md:relative md:mb-10 md:col-span-4 md:p-5 "
        >
          <div
            className="
           p-5 rounded-md
          hidden mb-2
          md:block
          "
          >
            <p className="font-bold">{Product?.title}</p>
          </div>
          <div
            className="
            bg-blue-200 p-5 rounded-md
          hidden mb-5
          md:block
          "
          >
            <p className="font-tanha mb-2">فروشنده : کرمان آتاری</p>
            <p className="font-tanha mb-2">ارزیابی عملکرد : عای</p>
            <p className="font-tanha mb-2">تحویل : 5 روز کاری</p>
          </div>
          <div className="flex flex-col">
            <p className="font-semibold  text-xl mb-2">
              {Product?.price} تومان
            </p>
            <BtnIcon
              ButtonColor="bg-purple-500 group-hover:bg-purple-600"
              ButtonText={"افزودن به سبد خرید"}
              onClick={() => handleAddFeature()}
              ButtonIcon={<FaBagShopping size={30} color="white" />}
            />
          </div>
        </div>
      </div>
      {Product && (
        <Tabs
          ProductInformationTab={ProductInformationTab}
          ProductReturnTermsTab={ProductReturnTermsTab}
          Product={Product}
        />
      )}
      <ConnectedProducts />
    </div>
  );
};

export default ProductPage;
