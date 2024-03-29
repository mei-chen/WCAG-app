import { useAppStatesContext } from "@/contexts/States";
import styles from "../styles/FilePreview.module.scss";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";

export default function FilePreview({
  isAnalyzeDone,
  file,
  progress,
  timeToFinish,
  setPreviewFile,
  setIsAnalyzeDone,
}) {
  const { darkMode } = useAppStatesContext();

  const cancelAnalysis = () => {
    setPreviewFile(null);
    setIsAnalyzeDone(null);
  };

  const deleteFile = () => {
    setPreviewFile(null);
    setIsAnalyzeDone(null);
  };

  const viewFile = () => {
    console.log("View file");
  };

  const fileSizeText = (size) => {
    if (size < 1000) {
      return `${size} B`;
    } else if (size < 1000000) {
      return `${size / 1000} KB`;
    } else if (size < 1000000000) {
      return `${size / 1000000} MB`;
    } else {
      return `${size / 1000000000} GB`;
    }
  };

  return (
    <div className={`${styles.preview} ${darkMode && styles.dark}`}>
      <div className={styles.detailsWrapper}>
        <div className={styles.details}>
          <div className={styles.iconWrapper}>
            {darkMode ? (
              <img src="/icons/docIconDark.svg" alt="pdf icon" />
            ) : (
              <img src="/icons/docIconLight.svg" alt="pdf icon" />
            )}
          </div>
          <div className={styles.fileDetails}>
            <div className={styles.fileName}>{file.name}</div>
            <div className={styles.fileSize}>
              {fileSizeText(file.size)} - {timeToFinish} secs left - {progress}%
              completed
            </div>
          </div>
        </div>
        <div className={styles.actions}>
          {!isAnalyzeDone ? (
            <button className={styles.cancel} onClick={cancelAnalysis}>
              <IoMdClose />
            </button>
          ) : (
            <>
              <Link href="/1/1" className={styles.view} onClick={viewFile}>
                View
              </Link>
              <button className={styles.delete} onClick={deleteFile}>
                {darkMode ? (
                  <img src="/icons/deleteIconDark.svg" alt="delete icon" />
                ) : (
                  <img src="/icons/deleteIconLight.svg" alt="delete icon" />
                )}
              </button>
            </>
          )}
        </div>
      </div>
      {!isAnalyzeDone && (
        <div className={styles.progressBar}>
          <div className={styles.whole}></div>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}
