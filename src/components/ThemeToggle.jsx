"use client";
import { useAppStatesContext } from "@/contexts/States";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";

const TOGGLE_CLASSES =
  "text-sm font-medium flex items-center gap-2 px-3 md:pl-3 md:pr-3.5 py-3 md:py-1.5 transition-colors relative z-10";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useAppStatesContext();

  return (
    <div className="relative flex w-fit items-center rounded-full">
      <button
        className={`${TOGGLE_CLASSES} ${
          !darkMode ? "text-white" : "text-slate-300"
        }`}
        onClick={() => {
          setDarkMode(false);
        }}
      >
        <FiMoon className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Light</span>
      </button>
      <button
        className={`${TOGGLE_CLASSES} ${
          darkMode ? "text-white" : "text-slate-800"
        }`}
        onClick={() => {
          setDarkMode(true);
        }}
      >
        <FiSun className="relative z-10 text-lg md:text-sm" />
        <span className="relative z-10">Dark</span>
      </button>
      <div
        className={`absolute inset-0 z-0 flex ${
          darkMode ? "justify-end" : "justify-start"
        }`}
      >
        <motion.span
          layout
          transition={{ type: "spring", damping: 15, stiffness: 250 }}
          style={{ background: "linear-gradient(90deg, #f080ff, #00c3c0)" }}
          className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
        />
      </div>
    </div>
  );
}