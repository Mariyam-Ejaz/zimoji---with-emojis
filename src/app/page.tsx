"use client";
import usePreventContextMenu from "@/hooks/usePreventContextMenu";
import {store } from "@/store";
import { Provider} from "react-redux";
import Preloader from "@/components/preloader/preloader";
import GetVisitor from "@/components/globals/GetVisitor";
import EmojiDiagonal from "@/components/emojis/emoji-diagonal";
import { useEffect } from "react";
import RandomEmojis from "@/components/emojis/random-emojis";
import { ThemeProvider, useTheme } from "@/components/theme/theme-context";

export default function Home() {
  // Use the custom hook to prevent the context menu
  usePreventContextMenu();

  const { theme, setTheme } = useTheme(); // Destructure theme and setTheme from context

  useEffect(() => {
    // Check localStorage for the stored theme
    const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    
    // If a theme is stored, set it; otherwise, default to "dark"
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      setTheme("dark"); // Default to dark theme
    }

    // Toggle the theme on every visit
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    // Save the current theme to local storage whenever it changes
    localStorage.setItem("theme", newTheme);
  }, []); // Dependencies on setTheme and theme
  return (
    <>
    <Provider store={store}>
    
      <GetVisitor/>
      <RandomEmojis/>
      {/* <EmojiDiagonal/> */}
      <Preloader/>
    
    </Provider>
    </>
  );
}
