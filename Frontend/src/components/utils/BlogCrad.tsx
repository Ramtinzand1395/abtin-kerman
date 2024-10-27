import React from "react";
import { Link } from "react-router-dom";
import { Weblog } from "../../types";
interface BlogCradProps {
  blog: Weblog;
}
const BlogCrad: React.FC<BlogCradProps> = ({ blog }) => {
  const { _id, primaryImage, title, createdAt } = blog;
  return (
    <Link to={`/blog/${_id}`}>
      <div className="flex flex-col rounded-t-lg cursor-pointer shadowhand  ">
        <img
          // src={`http://localhost:5000/${primaryImage?.direction}`}
           //! change
           src={`${primaryImage?.direction}`}
          className="w-full h-[50vh] mb-5 rounded-t-lg primaryImage"
          alt="Primary Image"
        />

        <div className="  text-primary my-5 px-5">
          <h4 className="font-bold font-tanha my-5">{title}</h4>
          <span className="my-10">ساخته شده در :{createdAt}</span>
        </div>
      </div>
    </Link>
  );
};

export default BlogCrad;
