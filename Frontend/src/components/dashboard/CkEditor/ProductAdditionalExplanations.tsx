import React, { useState } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";

import "ckeditor5/ckeditor5.css";

const ProductAdditionalExplanations = ({setProduct}) => {
  // const [WeblogData, setWeblogData] = useState("");

  const handleCkeditorState = (e, editor) => {
    const data = editor.getData();
    setProduct((prev) => ({
      ...prev,
      additionalExplanations: data,
    }));
  };
  return (
    <div className="">
      <CKEditor
        editor={ClassicEditor}
        onReady={(editor) => {
          console.log("Editor 2 is ready to use!", editor);
        }}
        onError={(error) => {
          alert("Error uploading image: " + error);
          console.log(error);
        }}
        config={{
          ckfinder: {
            uploadUrl: "http://localhost:5000/api/upload", // Your API endpoint for handling image uploads
          },
        }}
        onChange={handleCkeditorState}
      />
    </div>
  );
};

export default ProductAdditionalExplanations;
