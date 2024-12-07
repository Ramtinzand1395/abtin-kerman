import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Category, Tag } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../app/store";
import {
  addCategory,
  addTag,
  clearError,
  fetchCats,
  fetchTags,
  removeCategory,
  removeTags,
} from "../../../features/tag&cat/tag&cat";
import Spiner from "../../utils/Spiner";

const Tags: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { categories, tags, loading, error } = useSelector(
    (state) => state.cats_tags
  );

  const [Tag, setTag] = useState("");
  const [category, setcategory] = useState("");

  useEffect(() => {
    dispatch(fetchTags());
    dispatch(fetchCats());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleAddTag = () => {
    dispatch(addTag(Tag));
    setTag("");
  };
  const handleAddCategory = () => {
    dispatch(addCategory(category));
    setcategory("");
  };

  const handleDeleteTag = async (id: string) => {
    dispatch(removeTags(id));
  };
  const handleDeleteCategory = async (id: string) => {
    dispatch(removeCategory(id));
  };

  //  ? DELETE
  const confirmAlertmodall = (tag: Tag) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-secondery border-2 rounded-2xl p-4 border-white w-[40vw] h-auto">
            <p className="text-white font-vazir my-5 ">
              آیا مطمعنی میخواهی
              <span className="text-red-400 font-bold text-xl">
                {" "}
                {tag.tagName}{" "}
              </span>
              را حذف کنی؟
            </p>
            <button
              onClick={() => {
                handleDeleteTag(tag._id);
                onClose();
              }}
              className="bg-green-500 rounded-lg py-2 px-10 border-white border-2 text-black hover:bg-green-400 ml-5"
            >
              بله
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 rounded-lg py-2 px-10 border-white border-2 text-black hover:bg-red-400 ml-5"
            >
              کنسل
            </button>
          </div>
        );
      },
    });
  };

  //   !مثل هم هستند حذف بشن
  const confirmAlertmodallcat = (cat: Category) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-[#0007ff] border-2 rounded-2xl p-4 border-white w-[50vw] h-auto">
            <p className="text-white font-vazir my-5 ">
              are you sure you want to Delete
              <span className="text-red-400 font-bold text-xl">
                {" "}
                {cat.categoryName}
              </span>
            </p>
            <button
              onClick={() => {
                handleDeleteCategory(cat._id);
                onClose();
              }}
              className="bg-green-500 rounded-lg py-2 px-10 border-white border-2 text-black hover:bg-green-400 ml-5"
            >
              yes iam sure
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 rounded-lg py-2 px-10 border-white border-2 text-black hover:bg-red-400 ml-5"
            >
              exite
            </button>
          </div>
        );
      },
    });
  };

  if (loading === true) return <Spiner />;

  return (
    <div className=" w-full md:container md:mx-auto mx-2 my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div className="">
          <label className="font-bold text-2xl flex items-center mb-2">
            اضافه کردن تگ جدید
          </label>
          <div className="flex items-center">
            <input
              title="Tag"
              value={Tag}
              onChange={(e) => setTag(e.target.value)}
              name="price"
              className="ml-5 px-10 py-2 rounded-lg border-primary border-2 no-arrows"
              type="text"
            />
            <span
              onClick={() => handleAddTag()}
              className="border-2 p-2 mx-2 hover:bg-green-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 rounded-xl"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 6V18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
        </div>
        <div className="">
          <label className="font-bold text-2xl flex items-center mb-2">
            اضافه کردن دسته بندی جدید
          </label>
          <div className="flex items-center">
            <input
              value={category}
              onChange={(e) => setcategory(e.target.value)}
              name="price"
              className="ml-5 px-10 py-2 rounded-lg border-primary border-2 no-arrows"
              type="text"
              title="category"
            />
            <span
              onClick={() => handleAddCategory()}
              className="border-2 p-2 mx-2 hover:bg-green-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 rounded-xl"
            >
              <svg
                width="30px"
                height="30px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 12H18M12 6V18"
                  stroke="#000000"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </div>
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
              {tags?.map((tag) => (
                <tr
                  key={tag._id}
                  className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
                >
                  <td
                    onClick={() => confirmAlertmodall(tag)}
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
          <table className="min-w-full text-left text-sm font-light text-surface my-10">
            <thead className="border-b border-neutral-200 font-medium ">
              <tr>
                <th scope="col" className="px-6 py-4 text-start">
                  دسته بندی ها
                </th>
              </tr>
            </thead>
            <tbody>
              {categories?.map((cat) => (
                <tr
                  key={cat._id}
                  className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
                >
                  <td
                    onClick={() => confirmAlertmodallcat(cat)}
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
    </div>
  );
};

export default Tags;
