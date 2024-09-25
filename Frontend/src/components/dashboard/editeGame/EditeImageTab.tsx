import React, { useState } from "react";
// *
interface EditeImageTabProps {
  GameData: GameData;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
}
import { GameData } from "../../../types";
// *
import AddImageModall from "../AddImageModall";
// *
const EditeImageTab: React.FC<EditeImageTabProps> = ({
  GameData,
  setGameData,
}) => {
  const handleRemoveInfo = (indexToRemove: number) => {
    setGameData((prevData) => ({
      ...prevData,
      image: prevData.image.filter((_, index) => index !== indexToRemove),
    }));
  };
  const [OpenAddImageModall, setOpenAddImageModall] = useState(false);
  return (
    <div className="grid grid-cols-6 gap-5 mt-5">
      <button onClick={() => setOpenAddImageModall(true)}>add iamge</button>
      {OpenAddImageModall && (
        <AddImageModall
          setOpenAddImageModall={setOpenAddImageModall}
          setGameData={setGameData}
          GameData={GameData}
        />
      )}
      {GameData?.image.map((img, index) => (
        <img
          onClick={() => handleRemoveInfo(index)}
          key={img._id}
          src={`http://localhost:5000/${img.direction} `}
          alt=""
          className="w-full h-[20vh]"
        />
      ))}
    </div>
  );
};

export default EditeImageTab;
