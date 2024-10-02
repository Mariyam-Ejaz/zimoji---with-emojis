"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

// Define the types for the theme
type Theme = "light" | "dark";

// Define the interface for the Theme context
interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void; // Function to set the theme
}

// Create the ThemeContext
const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

// Create the ThemeProvider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("dark"); // Default to "dark"

  useEffect(() => {
    // Set the theme on the root element (html)
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Create a custom hook to use the Theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
