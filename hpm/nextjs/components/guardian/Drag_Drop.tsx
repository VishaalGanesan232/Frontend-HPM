import { FileUploadButton } from "@filament/react";
import React, { useReducer } from "react";

const Drag_Drop = (props) => {
  const { dispatch } = props;
  type FileInfo = {
    name: string;
    size: number;
    state: "pending" | "success" | "error";
  };
  const defaultState = {
    files: {},
  };
  type FileState = {
    files: {};
  };

  const handleFileChange = (files: FileList) => {
    Array.from(files).forEach((file) =>
      dispatch({ type: "ADD_FILE", payload: file })
    );
  };
  return (
    <FileUploadButton
      acceptedFileTypes={["text/XML"]}
      onChange={handleFileChange}
    >
      Upload XML
    </FileUploadButton>
  );
};

export default Drag_Drop;
