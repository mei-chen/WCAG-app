"use client";
import { useRef } from "react";
import styles from "../styles/UploadFile.module.scss";
import { useAppStatesContext } from "@/contexts/States";

export default function UploadFile({
  setPreviewFile,
  SetIsAnalyzeDone,
  isAnalyzeDone,
  previewFile,
}) {
  const { darkMode } = useAppStatesContext();
  const inputFileRef = useRef(null);

  const onUpload = (event) => {
    SetIsAnalyzeDone(null);
    setPreviewFile(null);

    if (event.target.files && event.target.files.length > 0) {
      const file = new File(
        [event.target.files[0]],
        event.target.files[0].name,
        {
          type: event.target.files[0].type,
        }
      );

      setPreviewFile(file);

      setTimeout(() => {
        SetIsAnalyzeDone(true);
      }, 1000);
    } else {
      console.error("No file selected.");
    }
    if (inputFileRef.current) inputFileRef.current.value = "";
  };

  return (
    <div className="flex flex-col justify-center column w-full gap-2">
      <div className="text-lg">Upload a file to analyze</div>
      <label
        htmlFor="dropzone-file"
        className={`${styles.filePlaceholder} ${
          darkMode && styles.dark
        } flex flex-col items-center justify-center w-full h-64 cursor-pointer`}
      >
        {isAnalyzeDone !== null && isAnalyzeDone !== true ? (
          <div
            className="text-lg"
            style={{ color: darkMode ? "#FFFFFF" : "#484B6A" }}
          >
            Analyzing...
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6 gap-2">
            <div className={styles.iconWrapper}>
              {darkMode ? (
                <img src="/icons/uploadIconDark.svg" />
              ) : (
                <img src="/icons/uploadIconLight.svg" />
              )}
            </div>
            <p
              className="text-lg"
              style={{ color: darkMode ? "#FFFFFF" : "#484B6A" }}
            >
              Drag and drop your file here
            </p>
            <p
              className="text-lg"
              style={{ color: darkMode ? "#879195" : "#9394A5" }}
            >
              -or-
            </p>
            <p
              className="text-lg"
              style={{
                color: darkMode ? "#F080FF" : "#A220BC",
                textDecoration: "underline",
              }}
            >
              Browse files
            </p>
          </div>
        )}

        <input
          ref={inputFileRef}
          id="dropzone-file"
          type="file"
          className="hidden"
          accept="image/pdf"
          onChange={onUpload}
        />
      </label>
      <div
        className="flex justify-between text-sm"
        style={{ color: darkMode ? "#879195" : "#9394A5" }}
      >
        <span className="">Supported: PDF, DOC, DOCX, XLS</span>
        <span>Maximum size: 200MB</span>
      </div>
    </div>
  );
}
