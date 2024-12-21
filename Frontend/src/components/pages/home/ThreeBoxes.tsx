import React from "react";
import Animations from "../../utils/Animations";
import box1 from "../../../assets/Box1.webp";
import box2 from "../../../assets/Box2.webp";
import box3 from "../../../assets/Box3.webp";
import box4 from "../../../assets/Box4.webp";

const ThreeBoxes: React.FC = () => {

  const BoxData = [
    {
      id: 1,
      image: box1,
    },
    {
      id: 2,
      image: box2,
    },
    {
      id: 3,
      image: box3,
    },
    {
      id: 4,
      image: box4,
    },
  ];

  return (
    <>
      <Animations>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 my-10">
          {BoxData?.map((data) => (
            <img
            width={"400px"}
            height={"400px"}
              key={data.id}
              className="w-full h-full rounded-lg"
              src={data.image}
              alt=""
            />
          ))}
        </div>
      </Animations>
    </>
  );
};

export default ThreeBoxes;
