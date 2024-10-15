import React from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import { Editor } from "@ckeditor/ckeditor5-core";
import { EventInfo } from "ckeditor5";
import "ckeditor5/ckeditor5.css";
import { GameData } from "../../../types";
interface AccountGameAdditionalExplanationsProps {
  setGameData: React.Dispatch<React.SetStateAction<GameData>>;
}
const AccountGameAdditionalExplanations: React.FC<
  AccountGameAdditionalExplanationsProps
> = ({ setGameData }) => {
  const handleCkeditorState = (
    e: EventInfo<string, unknown>,
    editor: Editor
  ) => {
    const data = editor.getData();
    console.log(e);
    setGameData((prev) => ({
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

export default AccountGameAdditionalExplanations;
