import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spiner from "../../utils/Spiner";
import { useDispatch, useSelector } from "react-redux";
import { clearError, fetchBlog } from "../../../features/blog/blogSlice";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet";
import { AppDispatch, RootState } from "../../../app/store";

const Blog: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { loading, blog, error } = useSelector(
    (state: RootState) => state.blog
  );

  useEffect(() => {
    blogId && dispatch(fetchBlog(blogId));
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
        <title>{blog?.title}</title>
        <meta name="description" content="explore the blog" />
      </Helmet>

      <div
        dangerouslySetInnerHTML={{
          __html: blog?.body || "",
        }}
        className="p-5 rounded-xl bg-white"
      ></div>
    </>
  );
};

export default Blog;
