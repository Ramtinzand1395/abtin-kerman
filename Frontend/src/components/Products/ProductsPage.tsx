import React from "react";
import { useParams } from "react-router-dom";
import img from "../../assets/_24c0f808-1d10-4db6-85a5-ed48e14014cf.jpg";
import Card from "../utils/Card";
import FilterProducts from "./FilterProducts";

const ProductsPage: React.FC = () => {
  const { product } = useParams();
  const CardIthem = [
    {
      id: 1,
      OpenTags: false,
      OpenDiscount: false,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      category: "playstation-4",
    },
    {
      id: 2,
      OpenTags: true,
      OpenDiscount: true,
      discount: 50,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      category: "playstation-4",
    },
    {
      id: 3,
      title: "بامپر فلزی نیلکین آیفون ",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      category: "playstation-5",
    },
    {
      id: 4,
      OpenTags: true,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      category: "playstation-5",
    },
    {
      id: 5,
      OpenTags: true,
      title: "بامپر فلزی نیلکین آیفون Nillkin Barde Metal Case iPhone 7 Plus",
      price: 120000,
      btnText: "افزودن به سبد خرید",
      image: img,
      category: "playstation-5",
      discount: 10,
      OpenDiscount: true,
    },
  ];
  const filteredItems = CardIthem.filter((card) => card.category === product);
  return (
    <div className="my-5 md:container md:mx-auto mx-2">
      <FilterProducts />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5  my-5">
        {filteredItems.map((card) => (
          <Card
            OpenTag={card.OpenTags}
            title={card.title}
            price={card.price}
            btnText={card.btnText}
            image={card.image}
            discount={card.discount}
            OpenDiscount={card.OpenDiscount}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
