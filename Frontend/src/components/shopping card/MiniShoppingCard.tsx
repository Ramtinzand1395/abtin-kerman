import React from "react";
import { MdClose } from "react-icons/md";
import { useShopingcard } from "../context/ShopingCard";
import ShoppingCardData from "./ShoppingCardData";
interface MiniShoppingCardProps {
  setOpenMiniShoppingcard: React.Dispatch<React.SetStateAction<boolean>>;
}
const MiniShoppingCard: React.FC<MiniShoppingCardProps> = ({
  setOpenMiniShoppingcard,
}) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };

  const { CardItems , cardQty } = useShopingcard();
  return (
    <div
      onClick={handleModalClick}
      className="bg-white border-2 z-30 rounded-2xl absolute top-14 ml-2 shadowhand  left-0 px-2 h-auto overflow-y-auto max-h-[60vh] min-h-[20vh] w-[400px]  "
    >
      <div className="flex items-center justify-between sticky top-0 bg-white py-5">
        <span className=" text-left">
        {cardQty} کالا
        </span>
        <button onClick={() => setOpenMiniShoppingcard(false)} className="">
          {""}
          <MdClose size={20} className="bg-red-500 rounded-full text-white " />
        </button>
      </div>
      {/* Card info */}
      {CardItems.length > 0 ? <ShoppingCardData /> : "سبد خرید شما خالی است."}
    </div>
    // </div>
  );
};

export default MiniShoppingCard;
