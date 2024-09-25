import React, { ChangeEvent } from "react";
import { GameData } from "../../../types";
interface InputTabsProps {
  GameData: GameData;
  handleGameDataChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => void; // Correct type for the function
}
const InputTabs: React.FC<InputTabsProps> = ({
  GameData,
  handleGameDataChange,
}) => {
  return (
    <div>
      <input
        title="productName"
        className="block p-2 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
        type="text"
        value={GameData?.title}
        onChange={handleGameDataChange}
        name="title"
      />
      <input
        title="company"
        className="block p-2 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
        type="text"
        value={GameData?.company}
        onChange={handleGameDataChange}
        name="company"
      />
      <input
        title="region"
        className="block p-2 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
        type="text"
        value={GameData?.region}
        onChange={handleGameDataChange}
        name="region"
      />
      <select
        value={GameData.multiplayer ? "true" : "false"}
        onChange={handleGameDataChange}
        className="px-16 py-2 rounded-lg border-primary border-2 ml-5"
        title=" multiplayer"
        name="multiplayer"
      >
        <option value=""> یک کزینه را انتخاب کنید</option>
        <option value={"true"}> دارد</option>
        <option value={"false"}> ندارد </option>
      </select>
    </div>
  );
};

export default InputTabs;
