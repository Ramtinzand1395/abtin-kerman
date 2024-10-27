import React, { useEffect, useState } from "react";
import { Image, Weblog } from "../../../types";
import { GetImageService } from "../../../services/ApiServices";
import { MdClose } from "react-icons/md";
interface EditorImageModallrops {
  WeblogData: Weblog;
  setWeblogData: React.Dispatch<React.SetStateAction<Weblog>>;
  setOpenAddImageModall: (open: boolean) => void;
}
const EditorImageModall: React.FC<EditorImageModallrops> = ({
  WeblogData,
  setWeblogData,
  setOpenAddImageModall,
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
  const togglePrimaryImage = (image: Image) => {
    if (WeblogData.primaryImage?._id === image._id) {
      // If the selected image is already the primary, deselect it
      setWeblogData((prev) => ({
        ...prev,
        primaryImage: null,
      }));
    } else {
      // Set selected image as primary image
      setWeblogData((prev) => ({
        ...prev,
        primaryImage: image,
      }));
    }
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {Images.map((image) => (
            <div key={image.imageName} className="relative">
              <img
                onClick={() => togglePrimaryImage(image)}
                className={`w-full h-[20vh] rounded-lg cursor-pointer p-1 ${
                  WeblogData.primaryImage?._id === image._id
                    ? " text-red-700 "
                    : "text-gray-500"
                }`}
                // src={`http://localhost:5000/${image.direction}`}
                //! change
                src={`${image.direction}`}
                alt={image.imageName}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default EditorImageModall;
