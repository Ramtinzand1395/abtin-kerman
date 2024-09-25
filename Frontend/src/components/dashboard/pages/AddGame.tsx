import React, { ChangeEvent, useEffect, useState } from "react";

import AddImageModall from "../AddImageModall";
import {
  addGameService,
  getCategoriesService,
  getTagService,
} from "../../../services/ApiServices";
import { toast } from "react-toastify";
import { MdAdd } from "react-icons/md";
import { FaTrash } from "react-icons/fa";
import SearchTags from "../searchTag/SearchTags";
import SearchCats from "../searchTag/SearchCats";
import { GameData } from "../../../types";
const AddGame: React.FC = () => {
  const [platform, setPlatform] = useState("");
  const [capacity, setCapacity] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [inStock, setInStock] = useState(false);

  const [GameData, setGameData] = useState<GameData>({
    info: [],
    title: "",
    image: [],
    company: "",
    region: "",
    multiplayer: false,
    categories: [],
    tags: [],
  });

  const [OpenAddImageModall, setOpenAddImageModall] = useState(false);
  const handleGameDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setGameData({
      ...GameData,
      [e.target.name]: e.target.value,
    });
  };

  // Handles the addition of a new entry to the info array
  const handleAddInfo = () => {
    const newInfo = {
      platform,
      capacity,
      price: Number(price), // Ensure price is a number
      qty: Number(quantity), // Ensure quantity is a number
      inStock,
    };

    // Update the GameData state by adding newInfo to the info array
    setGameData((prevData) => ({
      ...prevData,
      info: [...prevData.info, newInfo],
    }));

    // Optionally, reset the form fields after adding data
    setPlatform("");
    setCapacity("");
    setPrice(0);
    setQuantity(0);
    setInStock(false);
  };

  const handleAddGame = async () => {
    try {
      const { data } = await addGameService(GameData);
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    }
  };
  const removeImage = (url: string) => {
    setGameData((prevData) => ({
      ...prevData,
      image: prevData.image.filter((img) => img.direction !== url), // Filter out the clicked image
    }));
  };
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

  const handleRemovetag = (indexToRemove: number) => {
    setGameData((prevData) => ({
      ...prevData,
      tags: prevData.tags.filter((_, index) => index !== indexToRemove),
    }));
  };
  const handleRemovecats = (indexToRemove: number) => {
    setGameData((prevData) => ({
      ...prevData,
      categories: prevData.categories.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };
  return (
    <div className=" w-full md:container md:mx-auto mx-2 my-10">
      <h2 className="font-bold text-3xl">ساخت بازی اکانتی</h2>
      <div className="my-5">
        <label className="font-bold text-2xl flex items-center my-5">
          انتخاب عکس
          <span
            onClick={() => setOpenAddImageModall(!OpenAddImageModall)}
            className="border-2 p-2 mx-2 hover:bg-green-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 rounded-xl"
          >
            <MdAdd />
          </span>
        </label>
        {OpenAddImageModall && (
          <AddImageModall
            setGameData={setGameData}
            GameData={GameData}
            setOpenAddImageModall={setOpenAddImageModall}
          />
        )}
        {GameData.image.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-5">
            {GameData.image.map((img, index) => (
              <div className="">
                <img
                  key={index}
                  onClick={() => removeImage(img.direction)}
                  className="w-full h-[20vh] rounded-lg"
                  src={`http://localhost:5000/${img.direction}`}
                  alt=""
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="flex items-center">
        <div className="">
          <label className="font-bold text-2xl flex items-center my-5">
            انتخاب پلتفرم
          </label>
          <select
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
            title="یک کزینه را انتخاب "
          >
            <option value=""> یک کزینه را انتخاب کنید</option>
            <option value="ps5">ps5</option>
            <option value="ps4">ps4</option>
          </select>
        </div>
        <div className="">
          <label className="font-bold text-2xl flex items-center my-5">
            انتخاب ظرفیت
          </label>

          <select
            value={capacity}
            onChange={(e) => setCapacity(e.target.value)}
            className="px-16 py-2 rounded-lg border-primary border-2"
            title="یک کزینه را انتخاب "
          >
            <option value=""> یک کزینه را انتخاب کنید</option>
            <option value="ظرفیت یک">ظرفیت یک</option>
            <option value="ظرفیت دو">ظرفیت دو</option>
            <option value="ظرفیت سه">ظرفیت سه</option>
          </select>
        </div>
      </div>
      <div className="flex items-center my-10">
        <div className="">
          <label className="font-bold text-2xl flex items-center mb-2">
            انتخاب قیمت
          </label>

          <input
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            name="price"
            className="ml-5 px-10 py-2 rounded-lg border-primary border-2 no-arrows"
            type="number"
            title="price"
          />
        </div>

        <div className="">
          <label className="font-bold text-2xl flex items-center mb-2">
            انتخاب تعداد
          </label>

          <input
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            name="quantity"
            className="ml-5 px-10 py-2 rounded-lg border-primary border-2 no-arrows"
            type="number"
            title="quantity"
          />
        </div>
      </div>
      <div className="flex items-center my-10">
        <div className="">
          <label className="font-bold text-2xl flex items-center mb-2">
            انتخاب تعداد
          </label>
          <select
            value={inStock ? "true" : "false"}
            onChange={(e) => setInStock(e.target.value === "true")} // Convert the string to a boolean
            className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
            title="وضعیت موجودی"
          >
            <option value=""> یک کزینه را انتخاب کنید</option>
            <option value="true"> موجود</option>
            <option value="false"> نا موجود </option>
          </select>
          <button
            onClick={handleAddInfo}
            className="px-4 py-2 bg-primary text-white rounded-lg"
          >
            افزودن مقدار
          </button>
        </div>
      </div>

      <div className="my-5">
        {GameData.info.map((data, index) => (
          <div
            key={index}
            className="flex items-center justify-around border-2 py-2"
          >
            <p>{data.platform}</p>
            <p>{data.capacity}</p>
            <p>{data.price}</p>
            <p>{data.inStock ? "موجود" : "ناموجود"}</p>
            <p>{data.inStock ? "موجود" : "ناموجود"}</p>

            <p>{data.qty}</p>
          </div>
        ))}
      </div>
      <h2 className="font-bold text-2xl">توضیحات تکمیلی</h2>
      <div className=""></div>
      <div className="grid grid-cols-2 md:grid-cols-2 gap-5 ">
        <div className="">
          <label className="font-bold text-2xl flex items-center my-5">
            سازنده
          </label>
          <input
            onChange={handleGameDataChange}
            name="company"
            value={GameData.company}
            className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
            type="text"
            title="company"
          />
        </div>
        <div className="">
          <label className="font-bold text-2xl flex items-center my-5">
            حالت چند نفره
          </label>
          <select
            value={GameData.multiplayer ? "true" : "false"}
            onChange={handleGameDataChange}
            className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
            title=" multiplayer  "
            name="multiplayer"
          >
            <option value=""> یک کزینه را انتخاب کنید</option>
            <option value="true">دارد</option>
            <option value="false">ندارد</option>
          </select>
        </div>
        <div className="">
          <label className="font-bold text-2xl flex items-center my-5">
            ریجن
          </label>
          <input
            onChange={handleGameDataChange}
            name="region"
            value={GameData.region}
            className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
            title="region"
          />
        </div>
        <div className="">
          <label className="font-bold text-2xl flex items-center my-5">
            اسم بازی
          </label>
          <input
            onChange={handleGameDataChange}
            name="title"
            value={GameData.title}
            className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
            title="title"
          />
        </div>
        <SearchTags setGameData={setGameData} Tags={Tags} GameData={GameData} />
        <SearchCats
          setGameData={setGameData}
          GameData={GameData}
          cats={categories}
        />

        <div className="">
          {GameData.tags.map((tag, index) => (
            <p className="flex">
              {tag.tagName} <FaTrash onClick={() => handleRemovetag(index)} />
            </p>
          ))}
          {GameData.categories.map((tag, index) => (
            <p className="flex">
              {tag.categoryName}{" "}
              <FaTrash onClick={() => handleRemovecats(index)} />
            </p>
          ))}
        </div>
        <div className="">
          <button
            onClick={() => handleAddGame()}
            className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
          >
            ساخت بازی جدید
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddGame;
