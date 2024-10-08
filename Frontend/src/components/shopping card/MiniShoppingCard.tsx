import React from "react";
import { MdClose } from "react-icons/md";
import { useShopingcard } from "../context/ShopingCard";
import { FaTrash } from "react-icons/fa";
import BtnTow from "../utils/BtnTow";
import { Link } from "react-router-dom";
interface MiniShoppingCardProps {
  setOpenMiniShoppingcard: React.Dispatch<React.SetStateAction<boolean>>;
}
const MiniShoppingCard: React.FC<MiniShoppingCardProps> = ({ setOpenMiniShoppingcard }) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Stop event propagation to prevent closing the modal when clicked inside
    event.stopPropagation();
  };
  //   const { getItemqty } = useShopingcard();
  //   console.log(getItemqty()));
  const { CardItems, removeFromCard } = useShopingcard();
  console.log(CardItems, "CardItems");
  return (
    // <div
    //   onClick={() => setOpenMiniShoppingcard(false)}
    //   className="fixed z-30 w-full bg-gray-700 top-0 left-0  bg-opacity-30 min-h-screen  overflow-y-auto"
    // >
    <div
      onClick={handleModalClick}
      className="bg-white border-2 border-black z-30 rounded-2xl fixed top-52 right-0 p-2 min-h-[50vh] w-[20vw] "
    >
      <div className="flex items-center justify-between my-4">
        <h3 className="font-bold text-lg text-black text-left">سبد خرید</h3>
        <button onClick={() => setOpenMiniShoppingcard(false)} className="">
          {""}
          <MdClose size={30} className="bg-red-500 rounded-full text-white " />
        </button>
      </div>
      {/* Card info */}
      <div className="flex flex-col ">
        {CardItems.map((item) => (
          <div
            key={item._id}
            className="bg-secondery p-2 text-white font-semibold font-tanha flex items-center justify-around rounded-lg my-2"
          >
            <FaTrash onClick={() => removeFromCard(item._id)} />
            <p>{item.title}</p>
            <p>{item.price} تومان</p>
            <img
              src={`http://localhost:5000/${item.cardmg}`}
              className="w-10 h-10"
              alt=""
            />
          </div>
        ))}
        <Link to={"/checkout/cart/"}>
          <BtnTow
            ButtonColor="bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400"
            ButtonText="تکمیل خرید"
            onClick={() => setOpenMiniShoppingcard(false)}
          />
        </Link>
      </div>
    </div>
    // </div>
  );
};

export default MiniShoppingCard;
