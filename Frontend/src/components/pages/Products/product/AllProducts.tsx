import React, { useCallback, useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ShopingCard from "../../../utils/ShopingCard";
import usePaggination from "../../../hooks/usePaggination";
import Spiner from "../../../utils/Spiner";

const AllProducts: React.FC = () => {
  const [sortOrder, setSortOrder] = useState("");
  const { category } = useParams();
  const safeCategory = category || "";

  const [pageNumber, setpageNumber] = useState(1);
  const { FiltredProducts, hasMore, loading } =
    usePaggination(pageNumber, safeCategory, sortOrder);
  // const observer = useRef();
  // console.log(FiltredProducts)
  const observer = useRef<IntersectionObserver | null>(null);
  const lastProduct = useCallback(
    (node: HTMLElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entery) => {
        if (entery[0].isIntersecting && hasMore) {
          setpageNumber((prev) => prev + 1);
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  useEffect(() => {
    setpageNumber(1);
  }, [category, sortOrder]);

  const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const order = event.target.value;
    setSortOrder(order);
  };

  return (
    <div className="md:container md:mx-auto mx-2">
      {/* مرتب سازی */}
      <div className="">
        <select
          id="sortOrder"
          title="sortOrder"
          value={sortOrder}
          onChange={handleSortChange}
          className="p-2 border border-gray-300 rounded"
        >
          <option value="highToLow"> گرانترین </option>
          <option value="lowToHigh"> ارزان ترین </option>
        </select>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-10">
        {FiltredProducts &&
          FiltredProducts?.map((product, index) =>
            FiltredProducts.length === index + 1 ? (
              <div ref={lastProduct} className="">
                <ShopingCard
                  title={product.title}
                  price={product.price}
                  primaryImage={product.primaryImage}
                  additionalImages={product.additionalImages}
                  _id={product._id}
                  tags={product.tags}
                />
              </div>
            ) : (
              <div className="">
                <ShopingCard
                  title={product.title}
                  price={product.price}
                  primaryImage={product.primaryImage}
                  additionalImages={product.additionalImages}
                  _id={product._id}
                  tags={product.tags}
                />
              </div>
            )
          )}
      </div>
      <div className="flex w-full items-center justify-center">
        {loading && <Spiner />}
      </div>
    </div>
  );
};

export default AllProducts;
