import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../../utils/Spiner";
import { useDispatch, useSelector } from "react-redux";
import { clearError, fetchBlog } from "../../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";

const Blog: React.FC = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const { loading, blogs, error } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchBlog(blogId));
  }, [dispatch]);

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearError());
    }
  }, [error, dispatch]);

  if (loading) return <Spiner />;
  return (
    <>
      <Helmet>
      <title>{blogs.title}</title>
      <meta name="description" content="explore the blog" />
      </Helmet>

      <div
        dangerouslySetInnerHTML={{
          __html: blogs?.body || "",
        }}
        className="p-5 rounded-xl bg-white"
      ></div>
    </>
  );
};

export default Blog;
