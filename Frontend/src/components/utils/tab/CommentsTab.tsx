import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { addCommentService } from "../../../services/ApiServices";
import { toast } from "react-toastify";
import { Comment, GameData, Product } from "../../../types";
import BtnTow from "../BtnTow";

interface CommentsTabProps {
  Product: Product | GameData;
}
const CommentsTab: React.FC<CommentsTabProps> = ({ Product }) => {
  const { gameId, productId } = useParams(); // Correctly calling useParams as a function
  const location = useLocation();
  const userId = localStorage.getItem("User");
  const [commentBody, setCommentBody] = useState(""); // Only storing the comment text

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { value } = e.target;
    setCommentBody(value); // Update the comment body directly
  };
  const handleAddComment = async () => {
    if (!userId) {
      toast.error("برای ثبت نظر اول وارد شوید"); // Validation
      return;
    }
    if (!commentBody) {
      toast.error("متن نظر نمیتواند خالی باشد."); // Validation
      return;
    }
    const relatedModel = location.pathname.includes("/product/")
      ? "Product"
      : "accountgame";
    const relatedId = productId || gameId;
    const commentData = {
      body: commentBody,
      user: userId ? JSON.parse(userId)._id : null, // Ensure user ID is retrieved correctly
      relatedId: relatedId,
      relatedModel: relatedModel, // Assuming you're adding this to a game
    };

    try {
      const { data } = await addCommentService(commentData);
      toast.success(data.message); // Corrected the spelling of 'message'
      setCommentBody(""); // Clear the textarea after successful submission
    } catch (err) {
      console.log(err);
      toast.error("Error adding comment."); // Optional error notification
    }
  };
  return (
    <div className="relative ">
      <h5>نظرات کاربران</h5>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 my-5">
        <div className="">
          {Product?.comments &&
            Product?.comments.map((comment: Comment) => (
              <div className="border-2 border-secondery p-2 rounded-lg mb-5 w-full">
                <div className="flex items-center my-5">
                  <img
                    className="w-10 h-10 rounded-full ml-5"
                    src={comment?.user?.profile}
                    alt=""
                  />
                  <p>{comment?.user?.email}</p>
                </div>
                <p>{comment?.createdAt}</p>
                <p>{comment?.body}</p>
              </div>
            ))}
        </div>
        <div className="flex flex-col sticky top-20 self-start shadowhand p-5 rounded-xl">
          {" "}
          {Product.comments?.length} نظر
          <textarea
            name="comment" // Use a consistent name
            value={commentBody} // Bind to commentBody state
            onChange={handleChange}
            className="px-5 py-1 rounded-lg border-primary border-2 my-5 "
            title="Comment"
            placeholder="نظر خود را در باره این محصول بنویسید..." // Optional placeholder for user guidance
          />
          {/* <button onClick={handleAddComment}>Add Comment</button> */}
          <BtnTow
            ButtonColor="bg-green-500 hover:from-green-500 hover:to-green-400 hover:ring-green-400"
            ButtonText={"ثبت نظر"}
            onClick={handleAddComment}
          />
        </div>
      </div>
    </div>
  );
};

export default CommentsTab;
