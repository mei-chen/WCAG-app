"use client";
import { createContext, useContext, useState } from "react";

const Context = createContext();

export function AppStates({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Context.Provider
      value={{
        darkMode,
        setDarkMode,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export function useAppStatesContext() {
  return useContext(Context);
}
