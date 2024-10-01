"use client";
import ContentMapping from "@/components/preloader/content-mapping";
import Footer from "@/components/preloader/footer";
import Header from "@/components/preloader/header";
import usePreventContextMenu from "@/hooks/usePreventContextMenu";
import { RootState, store } from "@/store";
import { Provider, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { HOLDING_TABS } from "./lib";
import RandomEmojis from "../emojis/random-emojis";
import EmojiSlightMovement from "../emojis/emoji-slight-movement";
import EmojiDiagonal from "../emojis/emoji-diagonal";

export default function Preloader() {
  // Use the custom hook to prevent the context menu
  usePreventContextMenu();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const { tab } = useSelector((state: RootState) => state.holding);


  // Effect to play video 
  useEffect(() => {
    console.log(tab);
    if (tab === HOLDING_TABS.zimojilogo) {
      const timer = setTimeout(() => {
        setIsVideoVisible(true); 
      }, 5000); // 

      // Clean up the timer on component unmount or tab change
      return () => clearTimeout(timer);
    }
  }, [tab]);


  return (
<>
      <div className="flex flex-col justify-between min-h-dvh bg-black text-white ">
        {/* {isVideoVisible && (
          <video
            ref={videoRef}
            src="/assets/ZIMOJI Temp Video.mp4" 
            className="absolute z-0 top-0 left-0 w-full h-full object-cover pointer-events-none opacity-50"
            autoPlay={true}
            loop
            muted
            playsInline
          />
        )} */}
      
        <Header />
        {/* <RandomEmojis/> */}
        {/* <EmojiSlightMovement/> */}
        
        <ContentMapping  />
        <Footer />
        <EmojiDiagonal/>
      </div>
      </>
 
  );
}
