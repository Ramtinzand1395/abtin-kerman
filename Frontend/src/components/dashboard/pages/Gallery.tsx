import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  GetImageService,
  UploadImageService,
} from "../../../services/Userservice";
import { Image } from "../../../types";

const Gallery: React.FC = () => {
  const [Image, setImage] = useState<File | null>(null);
  const [Images, setImages] = useState<Image[] | null>(null);
  const [LoadinImage, setLoadinImage] = useState(false);
  const handleAddToGallery = async () => {
    setLoadinImage(true);
    try {
      if (!Image) {
        console.log("No image selected.");
        return;
      }
      const formData = new FormData();
      formData.append("image", Image);
      const { data, status } = await UploadImageService(formData);
      if (status === 201) {
        toast.success("Image uploaded successfully!");
        console.log(data, "response");
      } else {
        toast.error("Failed to upload image.");
      }
    } catch (err) {
      console.error("Error uploading image:", err);
    } finally {
      setLoadinImage(false);
    }
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
  }, [LoadinImage]);
  return (
    <div className=" w-full md:container md:mx-auto mx-2 my-10">
      <h2>اضافه کردن عکس جدید</h2>
      <input
        type="file"
        name="image"
        title="image"
        onChange={(e) => {
          if (e.target.files && e.target.files.length > 0) {
            setImage(e.target.files[0]); // Safely access the file if it exists
          }
        }}
      />
      <button className="border-2" onClick={handleAddToGallery}>
        Add To Gallery
      </button>
      <div className="grid grid-cols-5 gap-5">
        {Images?.map((url) => (
          <img
            className=""
            src={`http://localhost:5000/${url.direction}`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
