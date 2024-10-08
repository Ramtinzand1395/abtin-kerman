import React, { useEffect, useState } from "react";
import { FaTrash } from "react-icons/fa";
import {
  addProductService,
  getCategoriesService,
  getTagService,
} from "../../../services/ApiServices";
import { MdAdd } from "react-icons/md";
import BtnTow from "../../utils/BtnTow";
import { toast } from "react-toastify";
import { Product } from "../../../types";
import AddImageModallProduct from "../AddImageModallProduct";
import SearchTagsProducts from "../searchTag/SearchTagsProducts";
import SearchCatsProducts from "../searchTag/SearchCatsProducts";

const CreateProduct: React.FC = () => {
  // *features
  const [newKey, setNewKey] = useState("");
  const [newValue, setNewValue] = useState("");
  // * Open MODALL
  const [OpenAddImageModall, setOpenAddImageModall] = useState(false);

  // * PRODUCT
  const [Product, setProduct] = useState<Product>({
    title: "",
    price: 0,
    features: [],
    description: "",
    primaryImage: null, // Set initial value
    additionalImages: [], // Set initial value
    tags: [],
    categories: [],
    sellOne: false,
    quantity: 1,
  });
  // * TAGS & CATS
  const [Tags, setTags] = useState([]);
  const [categories, setcategories] = useState([]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setProduct((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
console.log(Product)
  const handleAddFeature = () => {
    if (newKey && newValue) {
      setNewKey("");
      setNewValue("");
      setProduct((prev) => ({
        ...prev,
        features: [...prev.features, { key: newKey, value: newValue }],
      }));
    }
  };
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
  const handleCreateProduct = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await addProductService(Product);
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" w-full md:container md:mx-auto mx-2 my-10">
      <h1>ساخت محصول</h1>
      <div>
        <form onSubmit={handleCreateProduct}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            <div className="col-span-1 md:col-span-2 lg:col-span-4">
              <label className="font-bold text-2xl flex items-center mb-5">
                انتخاب عکس
                <span
                  onClick={() => setOpenAddImageModall(!OpenAddImageModall)}
                  className="border-2 p-2 mx-2 hover:bg-green-500 hover:text-white cursor-pointer transition-all duration-150 ease-in-out delay-150 rounded-xl"
                >
                  <MdAdd />
                </span>
              </label>

              {OpenAddImageModall && (
                <AddImageModallProduct
                  setProduct={setProduct}
                  Product={Product}
                  setOpenAddImageModall={setOpenAddImageModall}
                />
              )}
              <label className="font-bold">عکس اصلی</label>
              {Product.primaryImage?._id ? (
                <div className="">
                  <img
                    // onClick={() => togglePrimaryImage(Product.primaryImage)}
                    className="w-[20vh] h-[20vh] rounded-lg"
                    src={`http://localhost:5000/${Product.primaryImage.direction}`}
                    alt=""
                  />
                </div>
              ) : (
                <div>
                  <p>هنوز عکس اصلی انتخاب نشده</p>
                </div>
              )}
              <label className="font-bold">عکس های فرعی</label>
              {Product.additionalImages &&
              Product.additionalImages.length > 0 ? (
                <div className="mb-10">
                  <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-5">
                    {Product.additionalImages.map((img, index) => (
                      <div className="">
                        <img
                          key={index}
                          // onClick={() => toggleAdditionalImage(img)}
                          className="w-full h-[20vh] rounded-lg"
                          src={`http://localhost:5000/${img.direction}`}
                          alt=""
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div>
                  <p>هنوز عکس فرعی انتخاب نشده</p>
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={Product.title}
                onChange={handleChange}
                required
                className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
                title="title"
              />
            </div>
            <div className="flex flex-col">
              <label>Price</label>
              <input
                type="number"
                name="price"
                value={Product.price}
                onChange={handleChange}
                required
                className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
                title="price"
              />
            </div>

            <div className="flex flex-col">
              <label>Description</label>
              <textarea
                name="description"
                value={Product.description}
                onChange={handleChange}
                className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
                title="description"
              />
            </div>
            <div className="flex flex-col">
              <label>Quantity</label>
              <input
                type="number"
                name="quantity"
                value={Product.quantity}
                onChange={handleChange}
                required
                className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
                title="qty"
              />
            </div>
            <div className="">
              <label>دسته بندی</label>
              <SearchTagsProducts
                setProduct={setProduct}
                Tags={Tags}
                Product={Product}
              />
              {Product.tags &&
                Product.tags.map((tag, index) => (
                  <p className="flex">
                    {tag.tagName}{" "}
                    <FaTrash onClick={() => handleRemovetag(index)} />
                  </p>
                ))}
            </div>
            <div className="">
              <label>تگ</label>
              <SearchCatsProducts
                setProduct={setProduct}
                Product={Product}
                cats={categories}
              />

              {Product.categories &&
                Product.categories.map((tag, index) => (
                  <p className="flex">
                    {tag.categoryName}{" "}
                    <FaTrash onClick={() => handleRemovecats(index)} />
                  </p>
                ))}
            </div>

            <div className="">
              <div className="flex items-center">
                <div className="flex flex-col">
                  <label>Quantity</label>

                  <input
                    type="text"
                    placeholder="Key"
                    value={newKey}
                    onChange={(e) => setNewKey(e.target.value)}
                    className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
                  />
                </div>
                <div className="flex flex-col">
                  <label>Quantity</label>

                  <input
                    type="text"
                    placeholder="Value"
                    value={newValue}
                    onChange={(e) => setNewValue(e.target.value)}
                    className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
                  />
                </div>
                <BtnTow
                  ButtonColor="bg-green-500 hover:from-green-500 hover:to-green-400 hover:ring-green-400 flex items-center"
                  ButtonText={"+"}
                  onClick={() => handleAddFeature()}
                />
              </div>
              <ul>
                {Product.features?.map((feature, index) => (
                  <li key={index}>
                    <strong>{feature.key}</strong>: {feature.value}
                    <button
                    // You can add an onClick handler here to delete or update the feature
                    // onClick={() => updateFeature(feature.key, '')}
                    >
                      Delete
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-3">
              {/* <BtnTow
                ButtonColor="bg-green-500 hover:from-green-500 hover:to-green-400 hover:ring-green-400 flex items-center"
                ButtonText={"ساخت محصول"}
                onClick={(e) => handleCreateProduct(e)}
              /> */}
              <button type="submit">"ساخت محصول"</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProduct;
