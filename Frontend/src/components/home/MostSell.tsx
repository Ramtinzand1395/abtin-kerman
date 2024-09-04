import React from "react";
import HoverCard from "../utils/HoverCard";
import hover1 from "../../assets/Hover/Fc-Hover.png";
import hover2 from "../../assets/Hover/FC_correct.jpg";
import hover3 from "../../assets/Hover/GodOfWar_Hover.png";
import hover4 from "../../assets/Hover/GodOfWar-Correct.jpg";
import hover5 from "../../assets/Hover/Spider-man_Hover.png";
import hover6 from "../../assets/Hover/Spider-man.jpg";
import hover7 from "../../assets/Hover/Wukong_hover.png";
import hover8 from "../../assets/Hover/Wukong_Correct.jpg";

import Animations from "../utils/Animations";
import LeftAnimation from "../utils/LeftAnimation";
interface MostSellProps {
  title: string;
}

const MostSell: React.FC<MostSellProps> = ({ title }) => {
  const hovercars = [
    {
      id: 1,
      title: "Fc",
      image1: hover2,
      image2: hover1,
    },
    {
      id: 2,
      title: " GodOfWar",
      image1: hover4,
      image2: hover3,
    },
    {
      id: 3,
      title: "Spider-man",
      image1: hover6,
      image2: hover5,
    },
    {
      id: 3,
      title: "Wukong",
      image1: hover8,
      image2: hover7,
    },
  ];
  return (
    <div>
      <Animations>
        <h2 className="font-bold text-lg lg:text-4xl my-10">{title}</h2>
      </Animations>
      {/* <div className="w-full h-[4px] my-10 bg-black"></div> */}
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
