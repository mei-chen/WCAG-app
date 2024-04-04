import styles from "../styles/ThemeToggle.module.scss";

export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <button
      className={`${styles.container} ${darkMode ? styles.dark : ""}`}
      aria-label="Toggle color mode"
      title="Toggle color mode"
      onClick={() => setDarkMode((prev) => !prev)}
    >
      <div className={`${styles.sun} ${!darkMode ? styles.visible : ""}`}>
        <img src="/icons/sunIcon.svg" alt="Sun icon" />
      </div>
      <div className={`${styles.moon} ${darkMode ? styles.visible : ""}`}>
        <img src="/icons/moonIcon.svg" alt="Moon icon" />
      </div>
    </button>
  );
}
