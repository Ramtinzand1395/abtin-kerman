import React from "react";
import Slider from "./Slider";
import ThreeBoxes from "./ThreeBoxes";
import MostSell from "./MostSell";
import Discount from "./Discount";
import Newest from "./Newest";
import BestItemsSlider from "./BestItemsSlider";

const Home: React.FC = () => {
  return (
    <>
      <Slider />
      <div className="md:container md:mx-auto mx-2">
        <ThreeBoxes />
        <MostSell title={"بازی های پر فروش"} />
        <Discount />
        <Newest title={"جدید ترین بازی ها"} />
        <BestItemsSlider />
        {/* <InstaCallToAction /> */}
      </div>
    </>
  );
};

export default Home;
