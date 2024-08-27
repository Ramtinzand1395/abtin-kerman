import React from "react";
import { MdClose } from "react-icons/md";
import BtnTow from "../utils/BtnTow";
interface EditeProductModallProps {
  setOpenModall: (open: boolean) => void;
  SelectedProduct: SelectedProduct | null;
}
interface SelectedProduct {
  id: number;
  image: string;
  title: string;
  price: number;
  category: string;
  tags: string[];
}
const EditeProductModall: React.FC<EditeProductModallProps> = ({
  setOpenModall,
  SelectedProduct,
}) => {
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Stop event propagation to prevent closing the modal when clicked inside
    event.stopPropagation();
  };
  return (
    <>
      <div
        onClick={() => setOpenModall(false)}
        className="bg-gray-700 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"
      >
        <div
          className={`h-auto w-[80vw]  rounded-2xl bg-white p-5`}
          onClick={handleModalClick}
        >
          <MdClose
            onClick={() => setOpenModall(false)}
            size={30}
            color="black"
            className="mb-2 cursor-pointer"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="">
              <img src={SelectedProduct?.image} alt="" />
            </div>
            <div className="flex flex-col items-start justify-evenly">
              <input
                title="productName"
                className="block p-2 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
                type="text"
                value={SelectedProduct?.title}
                name=""
              />
              <input
                title="productName"
                className="block p-2 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
                type="text"
                value={SelectedProduct?.category}
                name=""
              />{" "}
              <input
                title="productName"
                className="block p-2 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500"
                type="text"
                value={SelectedProduct?.tags}
                name=""
              />{" "}
              <input
                title="productName"
                className="block p-2 w-full z-20 text-sm text-gray-900  rounded-2xl border-2 border-secondery focus:ring-blue-500 focus:border-blue-500 no-arrows"
                type="number"
                value={SelectedProduct?.price}
                name=""
              />
              <div className="flex items-center justify-around w-full my-5">
                <BtnTow
                  ButtonColor="bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400"
                  ButtonText={"تغییر"}
                />
                <BtnTow
                  ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400"
                  ButtonText={"انصراف"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditeProductModall;
