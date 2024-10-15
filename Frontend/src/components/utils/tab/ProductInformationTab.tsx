import React from "react";
import { GameData, Product } from "../../../types";
interface ProductInformationTabProps {
  Product: Product | GameData;
}
const ProductInformationTab: React.FC<ProductInformationTabProps> = ({
  Product,
}) => {
  console.log(Product);
  return (
    <div
      dangerouslySetInnerHTML={{ __html: Product.additionalExplanations|| "" }}
      className="p-5 rounded-xl bg-white"
    ></div>
  );
};

export default ProductInformationTab;
