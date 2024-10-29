import React, { useState } from "react";
import { GameData } from "../../../../../types";
import BtnTow from "../../../../utils/BtnTow";
import { FaTrash } from "react-icons/fa";
interface AddGameSepicificationsProps {
  GameData: GameData;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
}
const AddGameSepicifications: React.FC<AddGameSepicificationsProps> = ({
  GameData,
  setGameData,
}) => {
  const [newKeySpecifications, setnewKeySpecifications] = useState("");
  const [newValueSpecifications, setnewValueSpecifications] = useState("");
  // ? Add Spesofics
  const handleAddSpecifications = () => {
    if (newKeySpecifications && newValueSpecifications) {
      setnewKeySpecifications("");
      setnewValueSpecifications("");
      setGameData((prev) => ({
        ...prev,
        features: [
          ...prev.features,
          { key: newKeySpecifications, value: newValueSpecifications },
        ],
      }));
    }
  };
  // * REMOVE
  const handleRemovefeuture = (indexToRemove: number) => {
    setGameData((prevData) => ({
      ...prevData,
      features: prevData?.features?.filter(
        (_, index) => index !== indexToRemove
      ),
    }));
  };

  return (
    <div className="">
      <label>مشخصات اصلی</label>
      <div className="flex items-center ">
        <div className="flex flex-col">
          <label>کلید</label>
          <input
            type="text"
            placeholder="Key"
            value={newKeySpecifications}
            onChange={(e) => setnewKeySpecifications(e.target.value)}
            className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
          />
        </div>
        <div className="flex flex-col">
          <label>مقدار</label>
          <input
            type="text"
            placeholder="Value"
            value={newValueSpecifications}
            onChange={(e) => setnewValueSpecifications(e.target.value)}
            className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
          />
        </div>
        <button
          onClick={() => handleAddSpecifications()}
          className="bg-green-500 hover:bg-green-600 px-3.5 py-2 rounded-md text-white"
          type="button"
        >
          +
        </button>
      </div>
      <div className="">
        <table className="min-w-full  text-sm font-light text-surface my-10">
          <thead className="border-b border-neutral-200 font-medium ">
            <tr>
              <th scope="col" className="px-6 py-4 text-start">
                کلید ها
              </th>
              <th scope="col" className="px-6 py-4 text-start">
                مقدار ها
              </th>
            </tr>
          </thead>
          <tbody>
            {GameData.features &&
              GameData.features.map((feature, index) => (
                <tr
                  key={index}
                  className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
                >
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    <strong>{feature.key}</strong>
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">
                    {feature.value}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium text-end">
                    <BtnTow
                      ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400 "
                      ButtonText={<FaTrash />}
                      onClick={() => handleRemovefeuture(index)}
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

export default AddGameSepicifications;
