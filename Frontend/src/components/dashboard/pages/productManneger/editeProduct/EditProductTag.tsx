import React, { useEffect, useState } from "react";
import {
  getCategoriesService,
  getTagService,
} from "../../../../../services/ApiServices";
import { Category, Product, Tag } from "../../../../../types";
import SearchTags from "../../../searchTag/SearchTags";
import SearchCats from "../../../searchTag/SearchCats";
import BtnTow from "../../../../utils/BtnTow";
import { FaTrash } from "react-icons/fa";
interface EditProductTagProps {
  setSelectedProduct: React.Dispatch<React.SetStateAction<Product>>;
  SelectedProduct: Product;
}
const EditProductTag: React.FC<EditProductTagProps> = ({
  setSelectedProduct,
  SelectedProduct,
}) => {
  const handleRemovetag = (indexToRemove: number) => {
    setSelectedProduct((prevData) => ({
      ...prevData,
      tags: prevData?.tags?.filter((_, index) => index !== indexToRemove),
    }));
  };
  const handleRemovecat = (indexToRemove: number) => {
    setSelectedProduct((prevData) => ({
      ...prevData,
      categories: prevData?.categories?.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };
  const [Tags, setTags] = useState<Tag[]>([]);
  const [categories, setcategories] = useState<Category[]>([]);

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="">
        <div className="">
          <SearchTags<Product>
            setGameData={setSelectedProduct}
            Tags={Tags}
            GameData={SelectedProduct}
          />
        </div>
        <table className="min-w-full  text-sm font-light text-surface my-10">
          <thead className="border-b border-neutral-200 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4 text-start">
                تگ ها
              </th>
              <th scope="col" className="px-6 py-4 text-start">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {SelectedProduct?.tags?.map((tag, index) => (
              <tr
                key={tag._id}
                className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {tag.tagName}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <BtnTow
                    ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400"
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
        <SearchCats<Product>
          setGameData={setSelectedProduct}
          GameData={SelectedProduct}
          cats={categories}
        />
        <table className="min-w-full text-left text-sm font-light text-surface my-10">
          <thead className="border-b border-neutral-200 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4 text-start">
                دسته بندی ها
              </th>
              <th scope="col" className="px-6 py-4 text-start">
                حذف
              </th>
            </tr>
          </thead>
          <tbody>
            {SelectedProduct?.categories?.map((cat, index) => (
              <tr
                key={cat._id}
                className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
              >
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  {cat.categoryName}
                </td>
                <td className="whitespace-nowrap px-6 py-4 font-medium">
                  <BtnTow
                    ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400"
                    ButtonText={<FaTrash />}
                    onClick={() => handleRemovecat(index)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditProductTag;
