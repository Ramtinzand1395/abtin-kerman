import React from "react";
import ps5 from "../../assets/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20-800x800.png";
const ThreeBoxes: React.FC = () => {
  const BoxData = [
    {
      id: 1,
      title: "هدفون ها",
      subtitle: "تا 15% تخفیف",
      image: ps5,
    },
    {
      id: 2,
      title: "کامپیوتر ها",
      subtitle: "تا 15% تخفیف",
      image: ps5,
    },
    {
      id: 3,
      title: "گجت ها ها",
      subtitle: "تا 15% تخفیف",
      image: ps5,
    },
  ];
  return (
    <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 my-10">
      {BoxData.map((data) => (
        <div
          key={data.id}
          className="w-full h-[25vh] bg-[#5cc1b8] rounded-lg p-5 flex items-center justify-between"
        >
          <div className="flex flex-col items-start justify-evenly h-full text-white">
            <h5 className="font-bold text-2xl">{data.title}</h5>
            <span>{data.subtitle}</span>
          </div>
          <div className="">
            <img className="w-40 h-40" src={data.image} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ThreeBoxes;
