import React, { ChangeEvent, useState } from "react";
import { MdClose } from "react-icons/md";
import BtnTow from "../../utils/BtnTow";
import EditeGameDataTab from "./EditeGameDataTab";
import InputTabs from "./InputTabs";
import EditeImageTab from "./EditeImageTab";
import { updateGameService } from "../../../services/ApiServices";
import { toast } from "react-toastify";
import EditTag from "./EditTag";
import { GameData } from "../../../types";
interface EditeProductModallProps {
  setOpenModall: (open: boolean) => void;
  SelectedProduct: GameData | null;
  setLodaingGames: (open: boolean) => void;
}

const EditeProductModall: React.FC<EditeProductModallProps> = ({
  setOpenModall,
  SelectedProduct,
  setLodaingGames,
}) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Stop event propagation to prevent closing the modal when clicked inside
    event.stopPropagation();
  };
  const [GameData, setGameData] = useState<GameData>({
    info: SelectedProduct?.info || [], // Default to an empty array
    title: SelectedProduct?.title || "", // Default to an empty string
    primaryImage: SelectedProduct?.primaryImage || null, // Default to an empty array
    additionalImages: SelectedProduct?.additionalImages || [], // Default to an empty array
    company: SelectedProduct?.company || "", // Default to an empty string
    region: SelectedProduct?.region || "", // Default to an empty string
    multiplayer: SelectedProduct?.multiplayer || false, // Default to false
    categories: SelectedProduct?.categories || [], // Default to an empty array
    tags: SelectedProduct?.tags || [], // Default to an empty array
    Specifications: SelectedProduct?.Specifications || [],
    additionalExplanations: SelectedProduct?.additionalExplanations || "",
  });
  const handleGameDataChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setGameData({
      ...GameData,
      [e.target.name]: e.target.value,
    });
  };

  const [OpenInfo, setOpenInfo] = useState(false);
  const [OpenInput, setOpenInput] = useState(false);
  const [OpenImage, setOpenImage] = useState(false);
  const [Opentag, setOpentag] = useState(false);

  const handleUpdateGame = async () => {
    setLodaingGames(true);
    try {
      const { data } = await updateGameService(GameData);
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
  return (
    <>
      <div
        onClick={() => setOpenModall(false)}
        className="bg-gray-700 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"
      >
        <div
          className={`h-auto w-[90vw]  rounded-2xl bg-white p-5`}
          onClick={handleModalClick}
        >
          <MdClose
            onClick={() => setOpenModall(false)}
            size={30}
            color="black"
            className="mb-2 cursor-pointer"
          />
          <div className="flex items-center justify-around">
            <button onClick={() => setOpenImage(!OpenImage)}>OpenImage</button>
            <button onClick={() => setOpenInput(!OpenInput)}>openinput</button>
            <button onClick={() => setOpenInfo(!OpenInfo)}>open</button>
            <button onClick={() => setOpentag(!Opentag)}>opentags</button>
          </div>
          {OpenImage && (
            <EditeImageTab GameData={GameData} setGameData={setGameData} />
          )}
          {OpenInput && (
            <InputTabs
              GameData={GameData}
              handleGameDataChange={handleGameDataChange}
            />
          )}
          {OpenInfo && (
            <EditeGameDataTab GameData={GameData} setGameData={setGameData} />
          )}
          {Opentag && <EditTag GameData={GameData} setGameData={setGameData} />}
          <div className="flex items-center justify-around w-full my-5">
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
    </>
  );
};

export default EditeProductModall;
