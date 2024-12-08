import React, { useEffect } from "react";
import LeftAnimation from "../../utils/LeftAnimation";
import Animations from "../../utils/Animations";
import BlogCrad from "../../utils/BlogCrad";
import { Link } from "react-router-dom";
import { clearError, fetchBlogs } from "../../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import Spiner from "../../utils/Spiner";
import { AppDispatch, RootState } from "../../../app/store";
const Blog: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, blogs, error } = useSelector((state:RootState) => state.blog);

  useEffect(() => {
    dispatch(fetchBlogs({ pageNumber: 1, sortOrder: "newestFirst" }));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  if (loading) return <Spiner />;

  return (
    <div>
      <Animations>
        <div className="flex items-center mt-10 mb-2">
          <h2 className="font-bold text-lg lg:text-2xl whitespace-nowrap ml-5">
            مقالات
          </h2>{" "}
          <div className="w-full h-[8px] rounded-3xl bg-primary"></div>{" "}
        </div>
      </Animations>
      <LeftAnimation>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 my-10 ">
          {blogs &&
            blogs?.map((blog) => <BlogCrad key={blog._id} blog={blog} />)}
        </div>
      </LeftAnimation>
      <Link to={"/blogs"}>
      <button type="button" className="moreBtn mb-20">مشاهده بیشتر</button>
      </Link>
    </div>
  );
};

export default Blog;
