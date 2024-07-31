import React from "react";
import Card from "../utils/Card";
interface CardItem {
  id: number;
  OpenTags?: boolean;
  OpenDiscount?: boolean;
  discount?: number;
  title: string;
  price: number;
  btnText: string;
  image: string;
}

interface MostSellProps {
  CardIthem: CardItem[];
  title: string;
}
const MostSell:React.FC<MostSellProps> = ({CardIthem , title}) => {

  return (
    <div className="">
      <h2 className="font-bold text-lg">{title}</h2>
      <div className="w-full h-[4px] my-10 bg-black"></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {CardIthem.map((card) => (
          <Card
            title={card.title}
            price={card.price}
            btnText={card.btnText}
            OpenTag={card.OpenTags}
            OpenDiscount={card.OpenDiscount}
            discount={card.discount}
            image={card.image}
          />
        ))}
      </div>
    </div>
  );
};

export default MostSell;
