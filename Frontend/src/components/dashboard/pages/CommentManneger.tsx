import React, { useEffect } from "react";

import BtnTow from "../../utils/BtnTow";
import { toast } from "react-toastify";
import { confirmAlert } from "react-confirm-alert";
import { Comment } from "../../../types";
import { useDispatch, useSelector } from "react-redux";
import {
  clearError,
  confirmComment,
  deleteComment,
  fetchComments,
} from "../../../features/comments/commentsSlice";
import Spiner from "../../utils/Spiner";
import { Helmet } from "react-helmet";
import { AppDispatch, RootState } from "../../../app/store";

const CommentManneger: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { comments, loading, error } = useSelector((state:RootState) => state.comment);

  useEffect(() => {
    dispatch(fetchComments());
  }, [dispatch]);
  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  const handleDeleteGame = async (commentId: string) => {
    dispatch(deleteComment(commentId));
  };
  //  ? DELETE
  const confirmAlertmodall = (comment: Comment) => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return (
          <div className="bg-primary border-2 rounded-2xl p-4 border-white w-[50vw] h-auto">
            <p className="text-white font-vazir my-5 ">
              از حذف کامنت را مطمعنی؟
            </p>
            <button
              onClick={() => {
                comment._id && handleDeleteGame(comment._id);
                onClose();
              }}
              className="bg-green-500 rounded-lg py-2 px-10 border-white border-2 text-black hover:bg-green-400 ml-5"
            >
              بله
            </button>
            <button
              onClick={onClose}
              className="bg-red-500 rounded-lg py-2 px-10 border-white border-2 text-black hover:bg-red-400 ml-5"
            >
              انصراف
            </button>
          </div>
        );
      },
    });
  };
  const handleConfirmComment = (commentId: string) => {
    dispatch(confirmComment(commentId));
  };

  if (loading === true) return <Spiner />;

  return (
    <div className=" w-full md:container md:mx-auto mx-2 my-10">
      <Helmet>
        <title>comments Manneger</title>
        <meta name="description" content="mannege user Comments" />
      </Helmet>
      <table className="min-w-full  text-sm font-light text-surface my-10">
        <thead className="border-b border-neutral-200 font-medium ">
          <tr>
            <th scope="col" className="px-6 py-4 text-start">
              اسم محصول
            </th>
            <th scope="col" className="px-6 py-4 text-start">
              کاربر
            </th>
            <th scope="col" className="px-6 py-4 text-start">
              متن نظر
            </th>
            <th scope="col" className="px-6 py-4 text-start">
              امتیاز
            </th>
            <th scope="col" className="px-6 py-4 text-start">
              وضعیت تایید
            </th>
            <th scope="col" className="px-6 py-4 text-start">
              ویرایش
            </th>
          </tr>
        </thead>
        <tbody>
          {comments?.map((comment) => (
            <tr
              key={comment._id}
              className="border-b border-neutral-200 transition duration-300 ease-in-out hover:bg-neutral-100 text-start "
            >
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {comment?.relatedData?.title}
              </td>{" "}
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {comment.user.email}
              </td>{" "}
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {comment.body}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {comment.rating}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium">
                {comment.isValidated === false ? "تایید نشده" : "تایید شده"}
              </td>
              <td className="whitespace-nowrap px-6 py-4 font-medium ">
                <BtnTow
                  ButtonColor="bg-red-500 hover:from-red-500 hover:to-red-400 hover:ring-red-400"
                  ButtonText={"حذف"}
                  onClick={() => confirmAlertmodall(comment)}
                />
                <BtnTow
                  ButtonColor="bg-green-500 hover:from-green-500 hover:to-green-400 hover:ring-green-400"
                  ButtonText={"تایید"}
                  onClick={() =>
                    comment._id && handleConfirmComment(comment._id)
                  }
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CommentManneger;
