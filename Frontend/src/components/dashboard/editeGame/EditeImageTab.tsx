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
      additionalImages: prevData.additionalImages.filter((_, index) => index !== indexToRemove),
    }));
  };

  const [OpenAddImageModall, setOpenAddImageModall] = useState(false);
  return (
    <div className="">
      <img
        src={`http://localhost:5000/${GameData.primaryImage?.direction} `}
        alt=""
        className="w-[30vh] h-[30vh]"
      />
      <div className="grid grid-cols-6 gap-5 mt-5">
        {OpenAddImageModall && (
          <AddImageModall
            setOpenAddImageModall={setOpenAddImageModall}
            setGameData={setGameData}
            GameData={GameData}
          />
        )}

        {GameData?.additionalImages.map((img, index) => (
          <img
            onClick={() => handleRemoveInfo(index)}
            key={img._id}
            src={`http://localhost:5000/${img.direction} `}
            alt=""
            className="w-full h-[20vh]"
          />
        ))}
        <button onClick={() => setOpenAddImageModall(true)}>add iamge</button>
      </div>
    </div>
  );
};

export default EditeImageTab;
