import React, { useEffect, useState } from "react";
import { getUserInfoService } from "../../../../services/ApiServices";
import { useNavigate, useParams } from "react-router-dom";
import { User } from "../../../../types";
import { FaUser } from "react-icons/fa";
import { MdEditNote } from "react-icons/md";
import BtnTow from "../../../utils/BtnTow";

const Pishkhan: React.FC = () => {
  const { userId } = useParams();
  const [User, setUser] = useState<User | null>(null);
  useEffect(() => {
    const getUser = async () => {
      try {
        if (userId) {
          const { data } = await getUserInfoService(userId);
          setUser(data.user);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  const IconData = [
    {
      id: 1,
      icon: <FaUser />,
      text1: "پشتیبانی فنی",
      text2: "تماس با ما",
    },
    {
      id: 2,
      icon: <FaUser />,
      text1: "پشتیبانی فنی",
      text2: "تماس با ما",
    },
    {
      id: 3,
      icon: <FaUser />,
      text1: "پشتیبانی فنی",
      text2: "تماس با ما",
    },
    {
      id: 4,
      icon: <FaUser />,
      text1: "پشتیبانی فنی",
      text2: "تماس با ما",
    },
  ];
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/dashboard/editeUserInfo/${userId}`);
  };
  return (
    <div className="w-full md:container md:mx-auto mx-2 my-10">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-5 ">
        <div className="col-span-2 shadowhand p-5 rounded-b-3xl">
          {/* TOP */}
          <div className="flex items-center">
            <img
              className="rounded-full w-20 h-20"
              src={User?.profile}
              alt=""
            />
            <div className="flex flex-col mr-5">
              <p>{User?.email}</p>
              <p>{User?.firstName}</p>
            </div>
          </div>
          {/* BOTTOM*/}
          <div className="flex items-center justify-between mt-10 border-t-2 pt-5">
            {IconData.map((data) => (
              <div className="flex flex-col items-center">
                {data.icon}
                <p>{data.text1}</p>
                <p>{data.text2}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 shadowhand rounded-b-3xl p-5">
          <div className="flex items-center justify-between">
            <h5 className="font-tanha font-bold">ویرایش اطلاعات </h5>
            <MdEditNote />
          </div>
          <div className="">
            <ul>
              <li className="border-b-2 py-3">ایمیل:{User?.firstName}</li>
              <li className="border-b-2 py-3">نام:{User?.email}</li>
              <li className=" py-3">نام خانوادگی:{User?.lastName}</li>
              <li>
                <BtnTow
                  ButtonColor="bg-blue-500 hover:from-blue-500 hover:to-blue-400 hover:ring-blue-400"
                  ButtonText={"خروج از حساب"}
                  onClick={() => handleNavigate()}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pishkhan;
