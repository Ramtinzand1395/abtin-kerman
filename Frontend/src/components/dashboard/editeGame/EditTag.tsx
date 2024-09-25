import React, { useEffect, useState } from "react";
import {
  getCategoriesService,
  getTagService,
} from "../../../services/Userservice";
import { Category, GameData, Tag } from "../../../types";
interface EditTagProps {
  GameData: GameData;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
}
const EditTag: React.FC<EditTagProps> = ({ GameData, setGameData }) => {
  const handleRemovetag = (indexToRemove: number) => {
    setGameData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((_, index) => index !== indexToRemove),
    }));
  };
  const handleRemovecat = (indexToRemove: number) => {
    setGameData((prevData) => ({
      ...prevData,
      categories: prevData.categories.filter(
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
  const handleAddTag = (tag: Tag) => {
    setGameData((prevData) => ({
      ...prevData,
      tags: [...prevData.tags, tag],
    }));
  };
  const handleAddCat = (cat: Category) => {
    setGameData((prevData) => ({
      ...prevData,
      categories: [...prevData.categories, cat],
    }));
  };
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
      <div className="">
        <div className="">
          {Tags?.map((tag) => (
            <button
              key={tag._id}
              onClick={() => handleAddTag(tag)}
              className=""
            >
              {tag.tagName}
            </button>
          ))}
        </div>
        <table className="min-w-full  text-sm font-light text-surface my-10">
          <thead className="border-b border-neutral-200 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4 text-start">
                تگ ها
              </th>
            </tr>
          </thead>
          <tbody>
            {GameData.tags.map((tag, index) => (
              <tr
                key={tag._id}
                className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
              >
                <td
                  onClick={() => handleRemovetag(index)}
                  className="whitespace-nowrap px-6 py-4 font-medium"
                >
                  {tag.tagName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="">
        {categories.map((cat) => (
          <button key={cat._id} onClick={() => handleAddCat(cat)} className="">
            {cat.categoryName}
          </button>
        ))}
        <table className="min-w-full text-left text-sm font-light text-surface my-10">
          <thead className="border-b border-neutral-200 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4 text-start">
                دسته بندی ها
              </th>
            </tr>
          </thead>
          <tbody>
            {GameData.categories.map((cat, index) => (
              <tr
                key={cat._id}
                className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
              >
                <td
                  onClick={() => handleRemovecat(index)}
                  className="whitespace-nowrap px-6 py-4 font-medium"
                >
                  {cat.categoryName}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EditTag;