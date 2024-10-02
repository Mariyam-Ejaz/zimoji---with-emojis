"use client";
import ContentMapping from "@/components/preloader/content-mapping";
import Footer from "@/components/preloader/footer";
import Header from "@/components/preloader/header";
import usePreventContextMenu from "@/hooks/usePreventContextMenu";
import { motion } from "framer-motion";
import { useState } from "react";
import EmojiDiagonal from "../emojis/emoji-diagonal";

export default function Preloader() {
  // Prevent right-click context menu
  usePreventContextMenu();

  // State to track when header and footer are loaded
  const [headerLoaded, setHeaderLoaded] = useState(false);
  const [footerLoaded, setFooterLoaded] = useState(false);

  // Check if both header and footer are loaded
  const isLoaded = headerLoaded && footerLoaded;

  return (
    <div className="flex flex-col justify-between min-h-dvh bg-black text-white">
      {/* Header with a callback to mark it as loaded */}
      <Header onLoaded={() => setHeaderLoaded(true)} />
      

      {/* Render ContentMapping only after both Header and Footer are loaded */}
      {isLoaded ? (
        <ContentMapping />
      ) : (
        <motion.div
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="overflow-hidden fixed inset-0 flex justify-center items-center z-20"
    >
      <motion.svg
        id="Layer_1"
        data-name="Layer 1"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 173.27 40.86"
        className="w-[92px]"
        initial={{ scale: 1 }}
        animate={{ scale: 1000 }}
        transition={{ duration: 12, ease: "easeInOut", delay: 2 }}
      >
        <defs>
          <style>
            {`
            .cls-1 {
        fill: #fff;
        stroke-width: 0px;
      }
          `}
          </style>
        </defs>
        <motion.path className="cls-1" d="M113.86,5.26c-1.58-1.68-3.46-2.98-5.66-3.89-2.2-.91-4.63-1.37-7.3-1.37s-5.05.46-7.25,1.38c-1.69.71-3.18,1.64-4.5,2.79v3.71c.27-.37.55-.73.85-1.06,1.34-1.45,2.93-2.56,4.78-3.33,1.85-.77,3.89-1.15,6.12-1.15s4.33.38,6.19,1.15c1.86.77,3.45,1.88,4.77,3.33,1.32,1.45,2.34,3.22,3.07,5.31.73,2.09,1.09,4.44,1.09,7.06s-.36,5-1.09,7.08c-.73,2.08-1.75,3.85-3.07,5.3-1.32,1.45-2.91,2.56-4.77,3.32-1.86.76-3.92,1.14-6.19,1.14s-4.27-.38-6.12-1.14c-1.85-.76-3.44-1.87-4.78-3.32-.3-.33-.58-.69-.85-1.06v3.74c1.32,1.15,2.82,2.08,4.5,2.78,2.19.91,4.61,1.37,7.25,1.37s5.11-.46,7.3-1.37c2.19-.91,4.08-2.2,5.66-3.88,1.58-1.67,2.8-3.69,3.66-6.05.87-2.36,1.3-5,1.3-7.9s-.43-5.51-1.3-7.87c-.87-2.36-2.09-4.39-3.66-6.07Z" />
        <motion.path className="cls-1" d="M78.19.08c-.15.05-.3.2-.44.43l-15.16,26.13c-.27.5-.5,1.03-.69,1.59-.11-.28-.22-.56-.33-.84-.11-.27-.24-.54-.39-.78L46.42.5s-.02-.02-.02-.03v4.61l14.23,25.27c.25.46.6.69,1.06.69h.42c.44,0,.8-.23,1.06-.69l15.19-26.29c-.05.51-.08,1.01-.08,1.49v32.02h2.36V0h-1.86c-.25,0-.45.03-.6.08Z" />
        <motion.rect className="cls-1" x="35.16" width="2.73" height="37.57" />
        <motion.path className="cls-1" d="M.69,2.26h23.53L.32,35.63c-.21.3-.32.62-.32.96v.98h27.62v-2.26H3.61L27.46,2.02c.25-.35.37-.72.37-1.09v-.93H.69v2.26Z" />
        <motion.rect className="cls-1" x="151.15" width="2.73" height="37.57" />
        <motion.path className="cls-1" d="M139.94,24.81c0,1.79-.2,3.34-.59,4.66-.39,1.32-.97,2.42-1.72,3.28-.75.87-1.66,1.51-2.73,1.93-1.07.42-2.27.63-3.6.63-.52,0-.98-.03-1.38-.09-.39-.06-.74-.13-1.05-.2-.31-.07-.57-.14-.79-.2-.22-.06-.41-.09-.56-.09-.07,0-.13.02-.19.03v2.23c.62.16,1.23.3,1.81.39.81.12,1.6.18,2.39.18,1.72,0,3.26-.28,4.63-.83,1.37-.55,2.54-1.37,3.49-2.45.95-1.09,1.69-2.42,2.21-4.02.52-1.59.77-3.43.77-5.51V0h-2.7v24.81Z" />


      </motion.svg>
    </motion.div>
      )}

      {/* Footer with a callback to mark it as loaded */}
      <Footer onLoaded={() => setFooterLoaded(true)} />
    </div>
  );
}
