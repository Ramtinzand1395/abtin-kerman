import React, { useEffect, useState } from "react";
import SearchTagsProducts from "../../../searchTag/SearchTagsProducts";
import SearchCatsProducts from "../../../searchTag/SearchCatsProducts";
import { FaTrash } from "react-icons/fa";
import {
  getCategoriesService,
  getTagService,
} from "../../../../../services/ApiServices";
import { Product } from "../../../../../types";
import BtnTow from "../../../../utils/BtnTow";
interface AddCatsandTagsProps {
  Product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
}
const AddCatsandTags: React.FC<AddCatsandTagsProps> = ({
  Product,
  setProduct,
}) => {
  const handleRemovetag = (indexToRemove: number) => {
    setProduct((prevData) => ({
      ...prevData,
      tags: prevData?.tags?.filter((_, index) => index !== indexToRemove),
    }));
  };
  const handleRemovecats = (indexToRemove: number) => {
    setProduct((prevData) => ({
      ...prevData,
      categories: prevData?.categories?.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };
  // * TAGS & CATS
  const [Tags, setTags] = useState([]);
  const [categories, setcategories] = useState([]);
  useEffect(() => {
    const getdata = async () => {
      try {
        const { data } = await getTagService();
        const { data: cats } = await getCategoriesService();
        setcategories(cats);
        setTags(data);
      } catch (err) {
        console.log(err);
      }
    };
    getdata();
  }, []);
  return (
    <div>
      {/* sdadsa */}
      <div className="grid grid-cols-2 gap-5">
        <div className="">
          <label className="mb-3">جستجو تگ ها</label>
          <SearchTagsProducts
            setProduct={setProduct}
            Tags={Tags}
            Product={Product}
          />
        </div>
        <div className="">
          <label className="mb-3"> جستجو دسته بندی ها</label>
          <SearchCatsProducts
            setProduct={setProduct}
            Product={Product}
            cats={categories}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <table className="min-w-full  text-sm font-light text-surface my-10">
            <thead className="border-b border-neutral-200 font-medium ">
              <tr>
                <th scope="col" className="px-6 py-4 text-start">
                  تگ ها
                </th>
              </tr>
            </thead>
            <tbody>
              {Product.tags &&
                Product.tags.map((tag, index) => (
                  <tr
                    key={tag._id}
                    className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {tag.tagName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-end">
                      <BtnTow
                        ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400 "
                        ButtonText={<FaTrash />}
                        onClick={() => handleRemovetag(index)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        <div className="">
          <table className="min-w-full text-left text-sm font-light text-surface my-10">
            <thead className="border-b border-neutral-200 font-medium ">
              <tr>
                <th scope="col" className="px-6 py-4 text-start">
                  دسته بندی ها
                </th>
              </tr>
            </thead>
            <tbody>
              {Product.tags &&
                Product.categories?.map((cat, index) => (
                  <tr
                    key={cat._id}
                    className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
                  >
                    <td className="whitespace-nowrap px-6 py-4 font-medium">
                      {cat.categoryName}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 font-medium text-end">
                      <BtnTow
                        ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400 "
                        ButtonText={<FaTrash />}
                        onClick={() => handleRemovecats(index)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AddCatsandTags;
