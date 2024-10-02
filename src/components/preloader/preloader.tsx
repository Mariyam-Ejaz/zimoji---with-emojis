"use client";

import ContentMapping from "@/components/preloader/content-mapping";
import Footer from "@/components/preloader/footer";
import Header from "@/components/preloader/header";
import { useTheme } from "@/components/theme/theme-context"; // Import your custom theme context

export default function Preloader() {
  const { theme } = useTheme(); // Get the current theme from the context

  return (
    <div
      className={`flex flex-col justify-between min-h-dvh transition-colors duration-300 
      `}
      style={{
        backgroundColor: theme === 'dark' ? 'var(--bg-color)' : 'var(--bg-color)',
        color: theme === 'dark' ? 'var(--text-color)' : 'var(--text-color)',
      }}
    >
      <Header />
      {/* <RandomEmojis /> */}
      {/* <EmojiSlightMovement /> */}
      <ContentMapping />
      <Footer />
    </div>
  );
}
