"use client";

import React, { useState } from "react";
import styles from "../styles/Category.module.scss";
import { MdExpandMore } from "react-icons/md";
import { useAppStatesContext } from "@/contexts/States";

export default function Category({ title, data = [] }) {
  const [selected, setSelected] = useState([]);
  const [expanded, setExpanded] = useState(false);

  const { darkMode } = useAppStatesContext();

  const select = (index, condition) => {
    if (condition) {
      const newSelected = [...selected];
      newSelected[index] = !newSelected[index];
      setSelected(newSelected);
    }
  };
  return (
    <div
      className={`${styles.category} ${expanded && styles.expanded} ${
        darkMode && styles.dark
      }`}
    >
      <div className={styles.header}>
        <div>{title}</div>
        <div className={styles.expand} onClick={() => setExpanded(!expanded)}>
          <MdExpandMore />
        </div>
      </div>
      <div className={styles.body}>
        <table className="text-left text-sm font-light ">
          <thead className="border-b font-medium border-none">
            <tr className={styles.tableHeader}>
              <th scope="col" className="px-6 py-4"></th>
              <th scope="col" className="px-6 py-4">
                Rule Name
              </th>
              <th scope="col" className="px-6 py-4">
                Status
              </th>
              <th scope="col" className="px-6 py-4">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((each, index) => {
              return (
                <tr
                  key={index}
                  className={`border-b transition duration-300 ease-in-out`}
                >
                  <td className="px-6 py-4 font-medium">
                    <div
                      onClick={() => select(index, each["Status"] == "Failed")}
                      className={`${styles.selectBox} ${
                        each["Status"] != "Failed"
                          ? styles.cantSelect
                          : selected[index]
                          ? styles.selected
                          : ""
                      }`}
                    ></div>
                  </td>
                  <td className={`px-6 py-4 ${styles.medium} w-44`}>
                    {each["Rule Name"]}
                  </td>
                  <td className="px-6 py-4">
                    <div
                      className={`${styles.status} ${
                        each["Status"] == "Success"
                          ? styles.success
                          : each["Status"] == "Failed"
                          ? styles.failed
                          : styles.manual
                      }`}
                    >
                      {each["Status"]}
                    </div>
                  </td>
                  <td className={`px-6 py-4 ${styles.small}`}>
                    {each["Description"]}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
