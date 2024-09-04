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
      title: "Nillkin Barde Metal Case iPhone",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، د.",
    },
    {
      id: 2,
      OpenTags: true,
      OpenDiscount: true,
      discount: 50,
      title:
        "Nillkin Barde Metal Case iPhone",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، د.",
    },
    {
      id: 3,
      title: "بامپر فلزی نیلکین آیفون ",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، د.",
    },
    {
      id: 4,
      OpenTags: true,
      title: "Nillkin Barde Metal Case iPhone",
      price: 160000,
      btnText: "افزودن به سبد خرید",
      image: img,
      description:
        "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، د.",
    },
  ];

  return (
    <>
      <Slider />
      <div className="md:container md:mx-auto mx-2">
        <ThreeBoxes />
        <MostSell title={"محصولات پر فروش"} />
        <Discount />
        <BestItemsSlider />
        <Newest CardIthem={CardNewestIthem} title={"جدید ترین محصولات"} />
        <InstaCallToAction />
      </div>
    </>
  );
};

export default Home;
