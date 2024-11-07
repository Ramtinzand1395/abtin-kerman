import React from "react";
import Hero from "./hero/Hero";
import ThreeBoxes from "./ThreeBoxes";
import MostSell from "./MostSell";
import SpesialOffers from "./specialOffers/SpesialOffers";
import NewestَAccountGame from "./NewestَAccountGame";
import NewestَProductsSlider from "./slider/NewestَProductsSlider";
import Blog from "./Blog";

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <div className="md:container md:mx-auto mx-2">
        <ThreeBoxes />
        <MostSell />
        <SpesialOffers />
        <NewestَAccountGame />
        <NewestَProductsSlider />
        <Blog />
      </div>
    </>
  );
};

export default Home;
