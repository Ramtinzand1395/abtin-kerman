import React from "react";
import { Product } from "../../../types";
interface ProductSpecificationsProps {
  Product: Product;
}
const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({
  Product,
}) => {
  return (
    <div>
      <table className="min-w-full text-start text-sm font-light text-surface ">
        <tbody>
          {Product.Specifications.map((data) => (
            <tr className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100  ">
              <td className="whitespace-nowrap px-6 font-bold py-4">
                {data.key}
              </td>
              <td className="whitespace-nowrap px-6 py-4">{data.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecifications;
