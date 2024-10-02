"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize the theme based on localStorage
    const storedTheme = localStorage.getItem("theme") as Theme | "dark";
    // If a theme is stored, return the opposite of it; otherwise, default to "light"
    return storedTheme === "dark" ? "light" : "dark";
  });

  useEffect(() => {
    // Set the theme on the root element (html)
    document.documentElement.setAttribute("data-theme", theme);
    // Save the current theme to local storage
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
