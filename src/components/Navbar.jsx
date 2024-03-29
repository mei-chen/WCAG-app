"use client";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Navbar.module.scss";
import { useAppStatesContext } from "../contexts/States";

export default function Navbar() {
  const { darkMode, setDarkMode } = useAppStatesContext();

  return (
    <nav id={styles.navbar} className={`${darkMode && styles.dark}`}>
      <div className={styles.logoWrapper}>
        {darkMode ? (
          <img src="/logoDark.svg" alt="Vision AI" />
        ) : (
          <img src="/logoLight.svg" alt="Vision AI" />
        )}
        <div className={styles.logoText}>Vision AI</div>
      </div>
      <ThemeToggle />
    </nav>
  );
}
