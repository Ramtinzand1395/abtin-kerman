import React, { useEffect, useState } from "react";
// *
interface AddImageModallProps {
  GameData: GameData;
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
  setOpenAddImageModall: (open: boolean) => void;
}
import { GameData, Image } from "../../types";
// *
import { GetImageService } from "../../services/Userservice";
import { MdClose } from "react-icons/md";

const AddImageModall: React.FC<AddImageModallProps> = ({
  setOpenAddImageModall,
  setGameData,
  GameData,
}) => {
  const [Images, setImages] = useState<Image[]>([]);
  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    // Stop event propagation to prevent closing the modal when clicked inside
    event.stopPropagation();
  };
  useEffect(() => {
    const getImage = async () => {
      try {
        const { data } = await GetImageService();
        setImages(data);
      } catch (err) {
        console.log(err);
      }
    };
    getImage();
    // Prevent body scroll when the modal is open
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when the modal is closed
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  const toggleImaes = (image: Image) => {
    setGameData((prev) => {
      const isSelected = prev.image.some((img) => img._id === image._id); // Use .some() for clarity
      const updatedImages = isSelected
        ? prev.image.filter((img) => img._id !== image._id) // Remove if already selected
        : [...prev.image, image]; // Add if not selected
      return { ...prev, image: updatedImages };
    });
  };
  return (
    <div
      onClick={() => setOpenAddImageModall(false)}
      className="fixed z-10 w-full bg-gray-700 top-0 left-0 flex items-center justify-center bg-opacity-30 min-h-screen  overflow-y-auto"
    >
      <div
        onClick={handleModalClick}
        className="bg-white my-10 rounded-lg p-4 max-h-[80vh] overflow-y-auto"
      >
        <button onClick={() => setOpenAddImageModall(false)} className="">
          {""}
          <MdClose size={30} className="bg-red-500 rounded-full text-white " />
        </button>
        <div className=" grid grid-cols-2 md:grid-cols-5 gap-5">
          {Images.map((image) => (
            <img
              key={image.imageName}
              onClick={() => toggleImaes(image)}
              className={`w-full h-[20vh] rounded-lg cursor-pointer p-1 ${
                GameData.image.includes(image) ? "border-4 border-primary" : ""
              }`}
              src={`http://localhost:5000/${image.direction}`}
              alt={image.imageName}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddImageModall;
