import React from "react";
import Slider from "./Slider";
import ThreeBoxes from "./ThreeBoxes";
import MostSell from "./MostSell";
import Discount from "./Discount";
import BestItemsSlider from "./BestItemsSlider";
import img from "../../assets/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20-800x800.png";
import InstaCallToAction from "./InstaCallToAction";
import Newest from "./Newest";

const Home: React.FC = () => {

  const CardNewestIthem = [
    {
      id: 1,
      OpenTags: false,
      OpenDiscount: false,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
    {
      id: 2,
      OpenTags: true,
      OpenDiscount: true,
      discount: 50,
      title:
        "بامdfgdfgdfgfdgپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
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
      price: 160000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
    {
      id: 5,
      OpenTags: true,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 1000,
      btnText: "افزودن به سبد خرید",
      image: img,
    },
  ];

  return (
    <>
      <Slider />
      <div className="md:container md:mx-auto mx-2">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 my-10 ">
          <ThreeBoxes />
        </div>
        <MostSell  title={"محصولات پر فروش"} />
        <Discount />
        <BestItemsSlider />
        <Newest CardIthem={CardNewestIthem} title={"جدید ترین محصولات"} />
        <InstaCallToAction />
      </div>
    </>
  );
};

export default Home;
