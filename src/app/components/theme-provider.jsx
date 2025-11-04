"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext({
  theme: "light",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "light",
  storageKey = "foco-biblia-theme",
}) {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const root = window.document.documentElement;
    const stored = localStorage.getItem(storageKey);

    if (stored) {
      setTheme(stored);
      root.classList.remove("light", "dark");
      root.classList.add(stored);
    } else {
      root.classList.add(defaultTheme);
    }
  }, [storageKey, defaultTheme]);

  const value = {
    theme,
    setTheme: (theme) => {
      localStorage.setItem(storageKey, theme);
      const root = window.document.documentElement;
      root.classList.remove("light", "dark");
      root.classList.add(theme);
      setTheme(theme);
    },
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
