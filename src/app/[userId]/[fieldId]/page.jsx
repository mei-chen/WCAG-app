"use client";
import Link from "next/link";
import styles from "../../../styles/AnalysisReport.module.scss";
import { useAppStatesContext } from "@/contexts/States";
import CategoriesContainer from "@/components/CategoriesContainer";

export default function AnalysisReport() {
  const { darkMode } = useAppStatesContext();

  return (
    <main id={styles.reportPage} className={darkMode && styles.dark}>
      <div className={`${styles.wrapper}`}>
        <div className={styles.titleAndPreview}>
          <div className={styles.titleWrapper}>
            <div className={styles.title}>Analysis Report</div>
            <Link href="/" className={styles.backButton}>
              <div className={styles.iconWrapper}>
                {darkMode ? (
                  <img src="/icons/arrowLeftDark.svg" alt="back" />
                ) : (
                  <img src="/icons/arrowLeftLight.svg" alt="back" />
                )}
              </div>
              <div className={styles.text}>Check another file</div>
            </Link>
          </div>
          <div className={styles.pdfPreview}>
            <iframe src="/pdf/sample.pdf" width="100%" height="100%"></iframe>
          </div>
        </div>
        <div className={styles.reportWrapper}>
          <div className={styles.actions}>
            <div className={styles.up}>Copy link to share analysis report</div>
            <div className={styles.down}>
              <div className={styles.inputWrapper}>
                <div className={styles.iconWrapper}>
                  {darkMode ? (
                    <img src="/icons/linkIconDark.svg" alt="link icon" />
                  ) : (
                    <img src="/icons/linkIconLight.svg" alt="link icon" />
                  )}
                </div>
                <input
                  type="text"
                  value="https://visn.tech/report/jkeq-0832-cdjs-3304"
                  readOnly
                />
              </div>
              <button className={styles.clipboard}>
                {darkMode ? (
                  <img
                    src="/icons/clipboardIconDark.svg"
                    alt="clipboard icon"
                  />
                ) : (
                  <img
                    src="/icons/clipboardIconLight.svg"
                    alt="clipboard icon"
                  />
                )}
              </button>
              <button className={styles.download}>
                <div className={styles.iconWrapper}>
                  {darkMode ? (
                    <img
                      src="/icons/downloadIconDark.svg"
                      alt="download icon"
                    />
                  ) : (
                    <img
                      src="/icons/downloadIconLight.svg"
                      alt="download icon"
                    />
                  )}
                </div>
                <div className={styles.text}>Download</div>
              </button>
            </div>
          </div>
          <CategoriesContainer
            categories={[
              {
                title: "Accessibility Rules",
                data: [
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
                ],
              },
              {
                title: "Accessibility Rules",
                data: [
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
                ],
              },
            ]}
          />
        </div>
      </div>
    </main>
  );
}
