"use client";

import React, { useEffect, useRef, useState } from "react";
import Category from "@/components/Category";
import styles from "../styles/Home.module.scss";
import UploadFile from "@/components/UploadFile";
import { LuLoader2 } from "react-icons/lu";
import { useAppStatesContext } from "@/contexts/States";
import FilePreview from "@/components/FilePreview";

export default function Home() {
  const [previewFile, setPreviewFile] = useState(null);
  const [isAnalyzeDone, SetIsAnalyzeDone] = useState(null);

  const { darkMode } = useAppStatesContext();

  // useEffect(() => {
  //   if (isAnalyzeDone === true) {
  //     categoriesRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [isAnalyzeDone]);

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
              SetIsAnalyzeDone={SetIsAnalyzeDone}
              isAnalyzeDone={isAnalyzeDone}
              previewFile={previewFile}
            />
          </div>

          {previewFile && (
            <FilePreview
              isAnalyzeDone={isAnalyzeDone}
              file={previewFile}
              progress={82}
              timeToFinish={19}
              setPreviewFile={setPreviewFile}
              setIsAnalyzeDone={SetIsAnalyzeDone}
            />
          )}
        </div>
      </div>
      {/* {previewFile && (
        <div className={styles.categoriesWrapper} ref={categoriesRef}>
          <Category
            title={"Accessibility Rules"}
            data={[
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Success",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Failed",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Manual Check",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
            ]}
          />
          <Category
            title={"Accessibility Rules"}
            data={[
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Success",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Failed",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Manual Check",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
            ]}
          />
          <Category
            title={"Accessibility Rules"}
            data={[
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Success",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Failed",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
              {
                "Rule Name": "Accessibility permission flag",
                Status: "Manual Check",
                Description:
                  "Accessibility permission flag must be set. Accessibility permission flag must be set.",
              },
            ]}
          />
        </div>
      )}
      {previewFile && (
        <div className={styles.actionButtons}>
          <button className={`${styles.selectAllButton} ${styles.button}`}>
            Select All
          </button>
          <button
            disabled={items.length == 0}
            className={`${styles.fixitButton} ${styles.button}`}
          >
            Fix {items.length} items
          </button>
        </div>
      )} */}
    </main>
  );
}
