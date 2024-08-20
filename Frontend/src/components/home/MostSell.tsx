import React from "react";
import HoverCard from "../utils/HoverCard";
import hover2 from "../../assets/_0c922ee7-81b0-4b21-bca5-740b23554436 copy.png";
import hover1 from "../../assets/_3f65a72d-d5d2-4a4c-882e-4a5a151b2405.jpg";
import Animations from "../utils/Animations";
import LeftAnimation from "../utils/LeftAnimation";
interface MostSellProps {
  title: string;
}

const MostSell: React.FC<MostSellProps> = ({ title }) => {
  const hovercars = [
    {
      id: 1,
      title: "god of war",
      image1: hover1,
      image2: hover2,
    },
    {
      id: 2,
      title: "مدل 2",
      image1: hover1,
      image2: hover2,
    },
    {
      id: 3,
      title: "مدل 3",
      image1: hover1,
      image2: hover2,
    },
    {
      id: 3,
      title: "مدل 3",
      image1: hover1,
      image2: hover2,
    },
  ];
  return (
    <div>
      <Animations>
        <h2 className="font-bold text-lg lg:text-4xl my-10">{title}</h2>
      </Animations>
      <div className="w-full h-[4px] my-10 bg-black"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 ">
        {hovercars.map((card) => (
          <LeftAnimation>
            <HoverCard card={card} />
          </LeftAnimation>
        ))}
      </div>
    </div>
  );
};

export default MostSell;
