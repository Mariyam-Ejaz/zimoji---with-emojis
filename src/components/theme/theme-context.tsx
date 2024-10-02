"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextProps {
  theme: Theme;
  toggleTheme: () => void; // Add a toggle function to the context
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize the theme state to null
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    // Check localStorage for the stored theme
    const storedTheme = localStorage.getItem("theme") as Theme | null;
    
    // If a theme is stored, set it to the opposite; otherwise, default to "dark"
    console.log(storedTheme);
    if (storedTheme) {
      setTheme(storedTheme === "light" ? "dark" : "light");
    } else {
      setTheme("dark"); // Default to dark theme if nothing is stored
      localStorage.setItem("theme", "dark"); // Initialize localStorage with "dark"
    }
  }, []); // Run this effect just once on mount

  useEffect(() => {
    if (theme) {
      // Set the theme on the root element (html)
      document.documentElement.setAttribute("data-theme", theme);
      // Save the current theme to local storage whenever it changes
      localStorage.setItem("theme", theme);
    }
  }, [theme]); // Run this effect whenever the theme state changes

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === "light" ? "dark" : "light"));
  };

  // Ensure toggleTheme is available in the context
  return (
    <ThemeContext.Provider value={{ theme: theme ?? "dark", toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the ThemeContext
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
