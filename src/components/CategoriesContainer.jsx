import { useState } from "react";
import styles from "../styles/CategoriesContainer.module.scss";
import Category from "./Category";
import { useAppStatesContext } from "@/contexts/States";

export default function CategoriesContainer({ categories }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { darkMode } = useAppStatesContext();

  return (
    <div className={`${styles.categoriesContainer} ${darkMode && styles.dark}`}>
      <div className={styles.header}>
        {categories.map((category, index) => {
          return (
            <div
              onClick={() => {
                setSelectedIndex(index);
              }}
              key={index}
              className={`${styles.title} ${
                index == selectedIndex && styles.selected
              }`}
            >
              {category.title}
            </div>
          );
        })}
      </div>
      <div className={styles.categories}>
        {categories.map((category, idx) => {
          if (idx == selectedIndex) {
            return (
              <Category key={idx} title={category.title} data={category.data} />
            );
          }
        })}
      </div>
    </div>
  );
}
