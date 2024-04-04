"use client";

import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/Home.module.scss";
import UploadFile from "@/components/UploadFile";
import { useAppStatesContext } from "@/contexts/States";
import FilePreview from "@/components/FilePreview";
import AnalysisReport from "@/components/AnalysisReport";
import axios from "axios";

export default function Home() {
  const [previewFile, setPreviewFile] = useState(null);
  const [isAnalyzeDone, setIsAnalyzeDone] = useState(null);
  const [isUploadingDone, setIsUploadingDone] = useState(null);
  const [extractedData, setExtractedData] = useState(null);
  // TODO: replace with actual report
  const [report, setReport] = useState(true);

  const analysisReportWrapperRef = useRef(null);

  const { darkMode } = useAppStatesContext();

  useEffect(() => {
    if (isUploadingDone) {
      retrieveData(previewFile);
    }
  }, [isUploadingDone]);

  const retrieveData = async (file) => {
    const formData = new FormData();
    formData.append("file", file);

    axios
      .post("/api/analyze", formData)
      .then((res) => {
        setExtractedData(res.data);
        console.log(res.data);
        // scroll to the analysis report
        setTimeout(() => {
          const targetPosition =
            analysisReportWrapperRef.current.getBoundingClientRect().top - 100;
          window.scrollTo({
            top: window.scrollY + targetPosition,
            behavior: "smooth",
          });
        }, 100);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <main id={styles.home} className={`${darkMode && styles.dark}`}>
      <div className={styles.headerWrapper}>
        <div className={styles.titleWrapper}>
          <h1 className={styles.title}>WCAG Scan</h1>
        </div>
        <div className={styles.uploadAndPreview}>
          <div className={styles.uploadWrapper}>
            <UploadFile
              setPreviewFile={setPreviewFile}
              setIsUploadingDone={setIsUploadingDone}
              isUploadingDone={isUploadingDone}
              previewFile={previewFile}
            />
          </div>

          {previewFile && (
            <FilePreview
              isUploadingDone={isUploadingDone}
              file={previewFile}
              progress={82}
              timeToFinish={19}
              setPreviewFile={setPreviewFile}
              setIsUploadingDone={setIsUploadingDone}
            />
          )}
        </div>
      </div>

      <div ref={analysisReportWrapperRef}>
        {extractedData && report && <AnalysisReport />}
      </div>
    </main>
  );
}
