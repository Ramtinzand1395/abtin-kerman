import React, { useEffect, useState } from "react";
import { getProductService } from "../../../../services/ApiServices";
import { useParams } from "react-router-dom";
import { FaComment, FaShare } from "react-icons/fa";
import BtnIcon from "../../../utils/BtnIcon";
import { FaBagShopping } from "react-icons/fa6";
import { CiHeart, CiShare2 } from "react-icons/ci";
import ConnectedProducts from "../../../utils/ConnectedProducts";
import { Product } from "../../../../types";
import Tabs from "../../../utils/tab/Tabs";

const ProductPage: React.FC = () => {
  const [Product, setProduct] = useState<Product>();
  const { productId } = useParams();
  const [currentImage, setCurrentImage] = useState<string>("");
  useEffect(() => {
    const getProduct = async () => {
      if (!productId) return;
      try {
        const { data } = await getProductService(productId);
        setProduct(data);
        setCurrentImage(data?.primaryImage?.direction);
      } catch (err) {
        console.log(err);
      }
    };
    getProduct();
  }, [productId]);
  const handleAddFeature = () => {
    console.log("first");
  };
  const handleImageClick = (imageDirection: string) => {
    setCurrentImage(imageDirection);
  };
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
                <CiHeart className="text-red-500" />
              </button>

              <button title="Icon" className="border-2 p-2 shadow-md">
                <FaComment className="text-blue-600" />
              </button>

              <button title="Icon" className="border-2 p-2 shadow-md">
                <FaShare />
              </button>
            </div>
            <img
              src={`http://localhost:5000/${currentImage}`}
              alt=""
              className="w-full h-full object-contain max-w-[300px] max-h-[300px] my-5"
            />
            <div className=" items-center hidden md:flex">
              {Product?.additionalImages?.map((img) => (
                <img
                  key={img._id}
                  src={`http://localhost:5000/${img?.direction}`}
                  alt=""
                  className="w-full h-full object-contain max-w-[70px] max-h-[70px] border-2 border-primary p-2 cursor-pointer"
                  onClick={() => handleImageClick(img?.direction)}
                />
              ))}
              <img
                src={`http://localhost:5000/${Product?.primaryImage?.direction}`}
                alt=""
                className="w-full h-full object-contain max-w-[70px] max-h-[70px] border-2 border-primary p-2 mx-2 cursor-pointer"
                onClick={() =>
                  Product?.primaryImage?.direction &&
                  handleImageClick(Product?.primaryImage?.direction)
                }
              />
            </div>
          </div>

          <div className="">
            <div className="flex flex-col">
              <h3 className="my-2 text-primary">{Product?.title}</h3>
              <label className="text-secondery mb-10">
                نظرات کاربران :
                <span className="mr-2">{Product?.comments?.length}</span>
                نظر
              </label>
            </div>
            <label className="text-secondery border-t-2 pt-2">
              {" "}
              مشخصات اصلی
            </label>
            <div className="border-2 border-secondery rounded-lg w-full md:w-[30vw] p-3 mt-4">
              <ul>
                {Product?.features?.map((feature, index) => (
                  <li className="my-4 border-b-2 p-1" key={index}>
                    <span className="text-gray-600">{feature.key}:</span>{" "}
                    {feature.value}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex items-center">
              {Product?.tags?.map((tag) => (
                <p key={tag._id} className="m-2 text-secondery mt-5">
                  {tag.tagName}#
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* قسمت سبد خرید صفحه */}
        <div
          className=" 
        rounded-lg border-2 w-full bg-white z-20 lg:z-0
        fixed bottom-0 mb-0  p-2 col-span-0
        md:relative md:mb-10 md:col-span-4 md:p-5 flex flex-col items-start justify-between"
        >
          <div
            className="
           p-5 rounded-md
          hidden mb-2
          md:block
          "
          >
            <p className="font-bold">{Product?.title}</p>
            <p className="text-sm text-gray-400 mt-5">{Product?.description}</p>
          </div>
          <div
            className="
             h-full p-5 rounded-md w-full
          hidden mb-5
          md:block
          "
          >
            <p className="font-tanha mb-2 bg-blue-50   p-5 rounded-xl">
              فروشنده : کرمان آتاری
            </p>
            <p className="font-tanha mb-2 bg-blue-50   p-5 rounded-xl">
              ارزیابی عملکرد : عای
            </p>
            <p className="font-tanha mb-2 bg-blue-50   p-5 rounded-xl">
              تحویل : 5 روز کاری
            </p>
            <p
              className={`font-tanha mb-2 bg-blue-50  p-5 rounded-xl ${
                Product?.inStock ? "text-green-700" : "text-red-700"
              }`}
            >
              انبار : {Product?.inStock ? "موجود در انبار" : "موجود نیست"}
            </p>
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
          Product={Product}
        />
      )}
      <ConnectedProducts />
    </div>
  );
};

export default ProductPage;