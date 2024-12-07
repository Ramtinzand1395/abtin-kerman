import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-image-crop/dist/ReactCrop.css";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  fetchImages,
  uploadImage,
} from "../../../../features/gallery/imageSlice";
import Spiner from "../../../utils/Spiner";
import CropModall from "./CropModall";
import { AppDispatch, RootState } from "../../../../app/store";
const Gallery: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { images, loading, error } = useSelector((state: RootState) => state.gallery);

  const [CropedImage, setCropedImage] = useState<File | null>(null);
  const [originalFile, setOriginalFile] = useState<File | null>(null);
  const [ImgSrc, setImgSrc] = useState("");
  const [errors, setErrors] = useState("");
  
  const [OpenModall, setOpenModall] = useState(false);
  const onSelectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target?.files?.[0] ?? null;
    if (!file) return;

    const reader = new FileReader();
    reader.addEventListener("load", () => {
      const imageUrl = reader.result?.toString() || "";
      setImgSrc(imageUrl);
      setErrors("");
      setOriginalFile(file); // Store the original file for name and type
      setOpenModall(true);
    });
    reader.readAsDataURL(file);
  };

  useEffect(() => {
    dispatch(fetchImages());
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleAddToGallery = () => {
    if (!CropedImage) {
      toast.error("اندازه عکس را انتخاب کنید.");
      return;
    }
    dispatch(uploadImage(CropedImage));
  };
  if (loading) return <Spiner />;
  return (
    <div className="w-full md:container md:mx-auto mx-2 my-10">
      <h2>اضافه کردن عکس جدید</h2>
      <input type="file" name="image" title="image" onChange={onSelectFile} />
      <button className="border-2" onClick={handleAddToGallery}>
        Add To Gallery
      </button>
      <div className="grid grid-cols-5 gap-5">
        {images?.map((url) => (
          <img key={url._id} src={`${url.direction}`} alt="" />
        ))}
      </div>
      {errors && <p>{errors}</p>}
      {ImgSrc && OpenModall && (
        <CropModall
          setCropedImage={setCropedImage}
          originalFile={originalFile}
          ImgSrc={ImgSrc}
          setOpenModall={setOpenModall}
        />
      )}
    </div>
  );
};

export default Gallery;
