import React from "react";
import Animations from "../utils/Animations";
import LeftAnimation from "../utils/LeftAnimation";
import ShopingCard from "../utils/ShopingCard";
interface CardItem {
  id: number;
  OpenTags?: boolean;
  OpenDiscount?: boolean;
  discount?: number;
  title: string;
  price: number;
  btnText: string;
  image: string;
  description:string;
}

interface Newestprops {
  CardIthem: CardItem[];
  title: string;
}
const Newest: React.FC<Newestprops> = ({ CardIthem, title }) => {
  return (
    <div>
      <Animations>
        <h2 className="font-bold text-lg lg:text-4xl my-10">{title}</h2>
      </Animations>
      <div className="w-full h-[4px] my-10 bg-black"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-10 ">
        {CardIthem.map((card) => (
          <LeftAnimation key={card.id}>
            <ShopingCard
              title={card.title}
              price={card.price}
              btnText={card.btnText}
              OpenTag={card.OpenTags}
              OpenDiscount={card.OpenDiscount}
              discount={card.discount}
              image={card.image}
              description={card.description}
            />
          </LeftAnimation>
        ))}
      </div>
    </div>
  );
};

export default Newest;
