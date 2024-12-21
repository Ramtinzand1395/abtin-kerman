import React, { useEffect, useRef, useState } from "react";
import ReactCrop, { centerCrop, Crop, makeAspectCrop } from "react-image-crop";
import { toast } from "react-toastify";

interface CropModallProps {
  setCropedImage: (file: File) => void;
  originalFile: File | null;
  ImgSrc: string;
  setOpenModall: (state: boolean) => void;
}

const CropModall: React.FC<CropModallProps> = ({ setCropedImage, originalFile, ImgSrc , setOpenModall }) => {
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<Crop | null>(null);
  const aspecthand = 1;
  const MinWidth = 300;
  const imgRef = useRef<HTMLImageElement | null>(null);
  const previewCanvasRef = useRef<HTMLCanvasElement | null>(null);
  const onImgLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const { width, height } = e.currentTarget;
    const crop = makeAspectCrop(
      { unit: "px", width: 500 },
      aspecthand,
      width,
      height
    );
    setCrop(centerCrop(crop, width, height));
  };

  const handleCropComplete = (crop: Crop) => {
    setCompletedCrop(crop);
  };

  const generateCroppedImage = () => {
    if (
      !completedCrop ||
      !imgRef.current ||
      !previewCanvasRef.current ||
      !originalFile
    )
      return;

    const canvas = previewCanvasRef.current;
    const image = imgRef.current;
    const scaleX = image.naturalWidth / image.width;
    const scaleY = image.naturalHeight / image.height;
    const ctx = canvas.getContext("2d");

    if (ctx) {
      canvas.width = completedCrop.width;
      canvas.height = completedCrop.height;

      ctx.drawImage(
        image,
        completedCrop.x * scaleX,
        completedCrop.y * scaleY,
        completedCrop.width * scaleX,
        completedCrop.height * scaleY,
        0,
        0,
        completedCrop.width,
        completedCrop.height
      );

      // Create the cropped image using the original file's name and type
      canvas.toBlob((blob) => {
        if (blob) {
          const fileName = originalFile.name; // Use original file's name
          const fileType = originalFile.type; // Use original file's type
          setCropedImage(new File([blob], fileName, { type: fileType }));
        }
      }, originalFile.type); // Use original file's type
    }
    toast.success("عکس بریده شد.")
    setOpenModall(false)
  };

  const handleModalClick = (event: React.MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
  };
  useEffect(() => {
    document.body.style.overflow = "hidden";

    // Re-enable body scroll when the modal is closed
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);
  return (
    <div
      onClick={() => setOpenModall(false)}
      className="bg-gray-700 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <div
        className={` w-[90vw] h-[90vh] overflow-y-auto rounded-2xl bg-white px-10`}
        onClick={handleModalClick}
      >
        <ReactCrop
          crop={crop}
          minWidth={MinWidth}
          aspect={aspecthand}
          onChange={(newCrop) => setCrop(newCrop)}
          onComplete={handleCropComplete}
        >
          <img src={ImgSrc} alt="upload" onLoad={onImgLoad} ref={imgRef}  width={"400px"}
              height={"400px"} />
        </ReactCrop>
        <button onClick={generateCroppedImage}>Crop Image</button>
        <canvas ref={previewCanvasRef} style={{ display: "none" }} />
      </div>
    </div>
  );
};

export default CropModall;
