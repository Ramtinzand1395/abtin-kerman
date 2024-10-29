import React, { useEffect, useState } from "react";
import AddressInfoModall from "./AddressInfoModall";
import GetGoogleAddressModall from "./GetGoogleAddressModall";
import { MdClose } from "react-icons/md";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import { User } from "../../../types";
import GetUserInformation from "./GetUserInformation";
interface AddressModallProps {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean >>;
  setLoadingdata: React.Dispatch<React.SetStateAction<boolean >>;
  UserInfo: User;
}
const AddressModall: React.FC<AddressModallProps> = ({
  setOpenModal,
  UserInfo,
  setLoadingdata,
}) => {
  const [OpenChange, setOpenChange] = useState(false);
  const [OpenInfo, setOpenInfo] = useState(false);
  const [address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Provider, setProvider] = useState("");
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
      onClick={() => setOpenModal(false)}
      className="bg-gray-700 bg-opacity-60 z-10 w-full h-full fixed top-0 left-0 flex items-center justify-center"
    >
      <div
        className={` w-[80vw] h-[90vh] overflow-y-auto rounded-2xl bg-white px-10`}
        onClick={handleModalClick}
      >
        <div className="flex items-center justify-between static top-0">
          <p className="flex items-center ">
            <FaArrowAltCircleLeft
              onClick={() => setOpenChange(false)}
              className="ml-5"
            />
            انتخاب آدرس
          </p>
          <MdClose
            onClick={() => setOpenModal(false)}
            size={30}
            className="m-4 cursor-pointer text-black"
          />
        </div>
        {OpenChange ? (
          <GetGoogleAddressModall
            setOpenInfo={setOpenInfo}
            setOpenChange={setOpenChange}
            address={address}
            setAddress={setAddress}
            setCity={setCity}
            setProvider={setProvider}
          />
        ) : OpenInfo ? (
          <GetUserInformation
            address={address}
            City={City}
            Provider={Provider}
            UserInfo={UserInfo}
            setLoadingdata={setLoadingdata}
          />
        ) : (
          <AddressInfoModall
            setOpenChange={setOpenChange}
            UserInfo={UserInfo}
          />
        )}
      </div>
    </div>
  );
};

export default AddressModall;
