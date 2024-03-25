"use client";
import ThemeToggle from "./ThemeToggle";
import styles from "../styles/Navbar.module.scss";
import { useAppStatesContext } from "../contexts/States";

export default function Navbar() {
  const { darkMode, setDarkMode } = useAppStatesContext();

  return (
    <nav id={styles.navbar} className={`${darkMode && styles.dark}`}>
      <h1 className="text-xl font-bold">Vision AI</h1>
      <ThemeToggle />
    </nav>
  );
}
