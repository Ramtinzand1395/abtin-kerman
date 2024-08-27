import React, { useState } from "react";
import img from "../../assets/_0c922ee7-81b0-4b21-bca5-740b23554436.jpg";
import EditeProductModall from "./EditeProductModall";
interface SelectedProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  tags: string[];
}
const Products: React.FC = () => {
  const tableData = [
    {
      id: 1,
      image: img,
      title: "اسم محصول",
      price: 10000,
      category: "پلی استیشن 4",
      tags: ["تگ 1", "تگ 2 ", "تگ 3"],
    },
    {
      id: 2,
      image: img,
      title: "اسم محصول",
      price: 10000,
      category: "پلی استیشن 4",
      tags: ["تگ 1", "تگ 2 ", "تگ 3"],
    },
    {
      id: 3,
      image: img,
      title: "اسم محصول",
      price: 10000,
      category: "پلی استیشن 4",
      tags: ["تگ 1", "تگ 2 ", "تگ 3"],
    },
    {
      id: 4,
      image: img,
      title: "اسم محصول",
      price: 10000,
      category: "پلی استیشن 4",
      tags: ["تگ 1", "تگ 2 ", "تگ 3"],
    },
  ];
  //   !MODALL
  const [OpenModall, setOpenModall] = useState(false);
  const [SelectedProduct, setSelectedProduct] = useState<SelectedProduct | null>(null);
  const handleOpenModall = (product: SelectedProduct) => {
    setOpenModall(true);
    setSelectedProduct(product);
  };
  return (
    <div className=" w-full md:container md:mx-auto mx-2 my-10">
      <div className="flex flex-col border-2 border-black">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              <table className="min-w-full text-left text-sm font-light text-surface ">
                <thead className="border-b border-neutral-200 font-medium ">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-start">
                      محصول
                    </th>
                    <th scope="col" className="px-6 py-4">
                      اسم محصول
                    </th>
                    <th scope="col" className="px-6 py-4">
                      قیمت
                    </th>
                    <th scope="col" className="px-6 py-4">
                      دسته بندی
                    </th>
                    <th scope="col" className="px-6 py-4">
                      تگ ها
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((data) => (
                    <tr
                      onClick={() => handleOpenModall(data)}
                      className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100  "
                    >
                      <td
                        key={data.id}
                        className="whitespace-nowrap px-6 py-4 font-medium"
                      >
                        <img
                          src={data.image}
                          className="w-14 h-14 rounded-full"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.price}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.category}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.tags.map((tag) => tag)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <nav aria-label="Page navigation example">
        <ul className="list-style-none flex">
          <li>
            <a className="pointer-events-none relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface/50 transition duration-300 ">
              Previous
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 "
              href="#!"
            >
              1
            </a>
          </li>
          <li aria-current="page">
            <a
              className="relative block rounded bg-primary-100 px-3 py-1.5 text-sm font-medium text-primary-700 transition duration-300 focus:outline-none "
              href="#!"
            >
              2
              <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
                (current)
              </span>
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 "
              href="#!"
            >
              3
            </a>
          </li>
          <li>
            <a
              className="relative block rounded bg-transparent px-3 py-1.5 text-sm text-surface transition duration-300 hover:bg-neutral-100 focus:bg-neutral-100 focus:text-primary-700 focus:outline-none active:bg-neutral-100 active:text-primary-700 dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700 dark:focus:text-primary-500 dark:active:bg-neutral-700 dark:active:text-primary-500"
              href="#!"
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* EDITE MODALL */}
      {OpenModall && (
        <EditeProductModall
          setOpenModall={setOpenModall}
          SelectedProduct={SelectedProduct}
        />
      )}
    </div>
  );
};

export default Products;
