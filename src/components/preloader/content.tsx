"use client"
/* eslint-disable @next/next/no-img-element */
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

// import Countdown from "./countdown";
import { COMINGSOON_TABS } from "./lib";
import ComingSoon from "./coming-soon";
import EmojiDiagonal from "../emojis/emoji-diagonal";

function Content() {
  const [tab, setTab] = useState<number>(COMINGSOON_TABS.zimoji);
  // const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);

  // Preload the ZIMOJI B.svg image
  // useEffect(() => {
  //   const preloadImage = (src: string) => {
  //     const img = new Image();
  //     img.src = src;
  //     img.onload = () => setIsImageLoaded(true); // Mark as loaded when done
  //   };

  //   preloadImage("/assets/ZIMOJI B.svg"); // Preload the ZIMOJI B.svg image
  // }, []);

  // update tab every defined seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      if (tab !== COMINGSOON_TABS.comingsoon) {

        setTab((prev) => prev + 1);
        console.log(tab);
      }
    }, 6000);

    return () => {
      clearTimeout(timer);
    };
  }, [tab]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="flex flex-col w-max gap-12 3xl:gap-16 mx-auto z-50"
      contextMenu="return false;"
    >
      <motion.div
        initial={{ y: 100 }}
        animate={{ y: tab >= COMINGSOON_TABS.up ? 0 : 100 }}
        transition={{ duration: 0.8 }}
        className="flex justify-center items-center relative w-max mx-auto h-max my-auto "
      >
        {( // Only render the image when it's preloaded
          <div className="flex items-start">
            <img
              src="/assets/ZIMOJI B.svg"
              className="h-[65px] lg:h-[71px] 3xl:h-[100px]"
              alt="zimo"
            />
          </div>
        )}
        
      </motion.div>
      <AnimatePresence>
      { (<ComingSoon tab={tab} />
       )}
      </AnimatePresence>
      
    </motion.div>
  );
}
export default Content;
