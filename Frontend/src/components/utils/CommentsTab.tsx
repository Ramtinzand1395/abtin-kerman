import React, { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { addCommentService } from "../../services/ApiServices";
import { toast } from "react-toastify";
import { Comment, GameData, Product } from "../../types";

interface CommentsTabProps {
  Product: Product | GameData;
}
const CommentsTab: React.FC<CommentsTabProps> = ({ Product }) => {
  const { gameId, productId } = useParams(); // Correctly calling useParams as a function
  const location = useLocation();
  const userId = localStorage.getItem("User");
  const [commentBody, setCommentBody] = useState(""); // Only storing the comment text

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { value } = e.target;
    setCommentBody(value); // Update the comment body directly
  };
  const handleAddComment = async () => {
    if (!commentBody) {
      toast.error("Comment cannot be empty."); // Validation
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
  console.log(Product, "ppp");
  return (
    <div>
      <div className="flex flex-col">
        <label>نظر خود را در خصوص این محصول بنویسید</label>
        <textarea
          name="comment" // Use a consistent name
          value={commentBody} // Bind to commentBody state
          onChange={handleChange}
          className="px-5 py-1 rounded-lg border-primary border-2 ml-5"
          title="Comment"
          placeholder="Write your comment here..." // Optional placeholder for user guidance
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
      <div className="">
        {Product?.comments &&
          Product?.comments.map((comment: Comment) => (
            <div className="border-2 border-secondery p-2 rounded-lg my-5 w-fit">
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
    </div>
  );
};

export default CommentsTab;
