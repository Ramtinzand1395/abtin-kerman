import React, { useEffect, useState } from "react";
// *
interface AddImageModallProps {
  Product: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product>>;
  setOpenAddImageModall: (open: boolean) => void;
}
import { Product, ImageType } from "../../types";
// *
import { GetImageService } from "../../services/ApiServices";
import { MdClose } from "react-icons/md";
import { FaFire } from "react-icons/fa";

const AddImageModallProduct: React.FC<AddImageModallProps> = ({
  setOpenAddImageModall,
  setProduct,
  Product,
}) => {
  const [Images, setImages] = useState<ImageType[]>([]);
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
  const togglePrimaryImage = (image: ImageType) => {
    if (Product.primaryImage?._id === image._id) {
      // If the selected image is already the primary, deselect it
      setProduct((prev) => ({
        ...prev,
        primaryImage: null,
      }));
    } else {
      // Set selected image as primary image
      setProduct((prev) => ({
        ...prev,
        primaryImage: image,
      }));
    }
  };

  const toggleAdditionalImage = (image: ImageType) => {
    setProduct((prev) => {
      // Ensure additionalImages is always an array
      const currentAdditionalImages = prev.additionalImages || [];

      const isSelected = currentAdditionalImages.some(
        (img) => img._id === image._id
      );

      const updatedImages = isSelected
        ? currentAdditionalImages.filter((img) => img._id !== image._id) // Deselect if already selected
        : [...currentAdditionalImages, image]; // Select if not already selected

      // Return updated state
      return { ...prev, additionalImages: updatedImages };
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
        <div className="grid grid-cols-2 md:grid-cols-5 gap-5">
          {Images?.map((image) => (
            <div key={image.imageName} className="relative">
              <img
                onClick={() => toggleAdditionalImage(image)}
                className={`w-full h-[20vh] rounded-lg cursor-pointer p-1 ${
                  Product?.additionalImages?.some(
                    (img) => img._id === image._id
                  )
                    ? "border-4 border-primary"
                    : ""
                }`}
                //! change
                src={`${image.direction}`}
                // src={`http://localhost:5000/${image.direction}`}
                alt={image.imageName}
              />
              <button
                type="button"
                title="add Primary"
                onClick={() => togglePrimaryImage(image)}
                className={`absolute top-1 right-1  rounded-full `}
              >
                <FaFire
                  size={20}
                  className={`${
                    Product.primaryImage?._id === image._id
                      ? " text-red-700 "
                      : "text-gray-500"
                  }`}
                />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddImageModallProduct;
