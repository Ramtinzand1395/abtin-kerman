import React, { useEffect, useState } from "react";
import { MdClose } from "react-icons/md";
import { GameData } from "../../../../../types";
import EditeImageTab from "./EditeImageTab";
import BtnTow from "../../../../utils/BtnTow";
import { toast } from "react-toastify";
import { updateGameService } from "../../../../../services/ApiServices";
import EditeGameDataTab from "./EditeCapacityTab";
import AccountGameAdditionalExplanations from "../../../CkEditor/AccountGameAdditionalExplanations";
import EditeGameInfo from "./EditeGameInfo";
import EditGameTag from "./EditGameTag";
interface EditeGameModallProps {
  SelectedProduct: GameData;
  setOpenModall: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedProduct: React.Dispatch<React.SetStateAction<GameData>>;
  setLodaingGames: React.Dispatch<React.SetStateAction<boolean>>;
}
type TabKey =
  | "gameImage"
  | "gameInfo"
  | "capacity"
  | "aboutGame"
  | "createGames";

const EditeGameModall: React.FC<EditeGameModallProps> = ({
  SelectedProduct,
  setOpenModall,
  setSelectedProduct,
  setLodaingGames,
}) => {
  const [activeTab, setActiveTab] = useState<TabKey>("gameImage");
  const renderContent = () => tabContent[activeTab] || tabContent.gameImage;

  const tabs: { key: TabKey; label: string }[] = [
    { key: "gameImage", label: " عکس بازی " },
    { key: "gameInfo", label: "بازی اطلاعات فنی " },
    { key: "capacity", label: " ظرفیت های بازی " },
    { key: "aboutGame", label: " درباره بازی " },
    { key: "createGames", label: " دسته بندی و تگ  " },
  ];
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  const handleUpdateGame = async () => {
    setLodaingGames(true);
    try {
      const { data } = await updateGameService(SelectedProduct);
      console.log(SelectedProduct, "SelectedProduct");
      toast.success(data.message);
    } catch (err) {
      console.log(err);
    } finally {
      setLodaingGames(false);
    }
  };
  const closeModall = () => {
    setOpenModall(false);
  };

  // ? tabContent
  const tabContent = {
    gameImage: (
      <EditeImageTab
        GameData={SelectedProduct}
        setGameData={setSelectedProduct}
      />
    ),
    gameInfo: (
      <EditeGameInfo
        GameData={SelectedProduct}
        setGameData={setSelectedProduct}
      />
    ),
    capacity: (
      <EditeGameDataTab
        GameData={SelectedProduct}
        setGameData={setSelectedProduct}
      />
    ),
    aboutGame: (
      <AccountGameAdditionalExplanations
        GameData={SelectedProduct}
        setGameData={setSelectedProduct}
      />
    ),
    createGames: (
      <EditGameTag
        GameData={SelectedProduct}
        setGameData={setSelectedProduct}
      />
    ),
  };

  return (
    <div
      onClick={() => setOpenModall(false)}
      className="bg-gray-700 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <div
        className={`w-[90vw] h-[90vh] overflow-y-auto rounded-2xl bg-white px-10`}
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between sticky bg-white top-0">
          <p className="flex items-center"> ویرایش {SelectedProduct.title}</p>
          <MdClose
            onClick={() => setOpenModall(false)}
            size={30}
            className="m-4 cursor-pointer text-black"
          />
        </div>
        <ul className="flex flex-wrap w-full text-sm font-medium text-center border-b-2 border-gray-700 text-gray-400">
          {tabs.map(({ key, label }) => (
            <li key={key} className="me-2">
              <button
                className={`inline-block p-4 rounded-t-lg ${
                  activeTab === key
                    ? " bg-gray-800 text-blue-500"
                    : "hover:bg-gray-800 hover:text-gray-300"
                }`}
                onClick={() => setActiveTab(key)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>

        {/* Render content based on active tab */}
        <div className="mt-4">{renderContent()}</div>
        <div className="sticky bottom-0 bg-white p-2 border-t-2 border-black flex items-center justify-between mt-5">
          <BtnTow
            ButtonColor="bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400"
            ButtonText={"تغییر"}
            onClick={handleUpdateGame}
          />
          <BtnTow
            ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400"
            ButtonText={"انصراف"}
            onClick={closeModall}
          />
        </div>
      </div>
    </div>
  );
};

export default EditeGameModall;
