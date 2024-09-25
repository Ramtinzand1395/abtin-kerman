import React, { useEffect, useState } from "react";
import EditeProductModall from "../editeGame/EditeProductModall";
import {
  deleteGameService,
  getGameService,
} from "../../../services/Userservice";
import { toast } from "react-toastify";
import { GameData } from "../../../types";
import BtnTow from "../../utils/BtnTow";
import { confirmAlert } from "react-confirm-alert";

const Products: React.FC = () => {
  const [Games, setGames] = useState<GameData[] | null>(null);
  const [LodaingGames, setLodaingGames] = useState(false);
  useEffect(() => {
    const getGames = async () => {
      try {
        const { data } = await getGameService();
        setGames(data);
      } catch (err) {
        console.log(err);
      }
    };
    getGames();
  }, [LodaingGames]);
  //   !MODALL
  const [OpenModall, setOpenModall] = useState(false);
  const [SelectedProduct, setSelectedProduct] = useState<GameData | null>(null);
  const handleOpenModall = (product: GameData) => {
    setOpenModall(true);
    setSelectedProduct(product);
  };
  const handleDeleteGame = async (id: string) => {
    setLodaingGames(true);
    try {
      const { data } = await deleteGameService(id);
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLodaingGames(false);
    }
  };
  //  ? DELETE
  const confirmAlertmodall = (game: GameData) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-primary border-2 rounded-2xl p-4 border-white w-[50vw] h-auto">
            <p className="text-white font-vazir my-5 ">
              از حذف
              <span className="text-red-400 font-bold text-xl">
                {" "}
                {game.title}{" "}
              </span>
              مطمعنی؟
            </p>
            <button
              onClick={() => {
                game._id && handleDeleteGame(game._id);
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
              انصراف
            </button>
          </div>
        );
      },
    });
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
                      عکس بازی
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      اسم بازی
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      ظرفیت ها
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      تگ ها
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      دسته بندی
                    </th>
                    <th scope="col" className="px-6 py-4 text-start">
                      حذف بازی
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {Games?.map((data) => (
                    <tr
                      key={data._id}
                      className="border-b text-start border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100  "
                    >
                      <td className="whitespace-nowrap px-6 py-4 font-medium">
                        <img
                          src={`http://localhost:5000/${data.image[0].direction}`}
                          className="w-14 h-14 rounded-full"
                          alt=""
                        />
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.title}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 flex flex-col">
                        {data.info.map((infodata, index) => (
                          <div
                            key={index}
                          >{`${infodata.platform}: ${infodata.price} `}</div>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.tags.map((tag) => (
                          <div key={tag._id} className="">
                            {tag.tagName}
                          </div>
                        ))}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        {data.categories.map((cat) => (
                          <div key={cat._id} className="">
                            {cat.categoryName}
                          </div>
                        ))}
                      </td>
                      <td className="flex items-center justify-around">
                        <BtnTow
                          ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400"
                          ButtonText={"حذف"}
                          onClick={() => confirmAlertmodall(data)}
                        />
                        <BtnTow
                          ButtonColor="bg-orange-500 hover:from-orange-500 hover:to-orange-400 hover:ring-orange-400"
                          ButtonText={"ویرایش"}
                          onClick={() => handleOpenModall(data)}
                        />
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
          setLodaingGames={setLodaingGames}
        />
      )}
    </div>
  );
};

export default Products;
