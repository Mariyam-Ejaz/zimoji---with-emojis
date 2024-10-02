import { COMING_SOON, COMINGSOON_TABS } from "@/components/preloader/lib";
import clsx from "clsx";
import { useEffect, useState, useMemo } from "react";
import { useTheme } from "../theme/theme-context";

// Preload images and return the Image objects
const preloadImages = (images: { img: string }[]) => {
  return images.map(({ img }) => {
    const image = new Image();
    image.src = `/assets/preloader/coming-soon/${img}`;
    return image;
  });
};

function ComingSoon({ tab }: { tab: number }) {
  const [index, setIndex] = useState(0);
  const imageCount = COMING_SOON.length;
  const [isVisible, setIsVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>([]);
  const { theme } = useTheme();

  // Preload images only once when the component mounts
  useEffect(() => {
    const loadedImages = preloadImages(COMING_SOON);
    setPreloadedImages(loadedImages);
  }, []);

  useEffect(() => {
    if (tab >= COMINGSOON_TABS.comingsoon) {
      const cycleImages = setInterval(() => {
        setFadeOut(true); // Trigger fade-out animation
        setIsVisible(true); // Set visibility to true

        // Wait for the fade-out to complete
        setTimeout(() => {
          // Change the image right after fading out
          setIndex((prev) => (prev + 1) % imageCount); // Update image
          console.log(preloadedImages[index]?.src);

          // Reset fade-out (trigger fade-in)
          setFadeOut(false); // Trigger fade-in

        }, 1500); // Match the duration of the fade-out

        // Pause for 3.8 seconds after fade-in is completed
      }, 10000); // Change the image every 10 seconds (7.6s + 2.4s animations)

      return () => clearInterval(cycleImages); // Clean up on unmount
    }
  }, [tab, imageCount, preloadedImages, index]);

  // Memoize the current image for performance
  const currentImage = useMemo(() => {
    return preloadedImages[index]?.src;
  }, [index, preloadedImages]);

  return (
    <div className="h-[90px] flex justify-center items-start text-center text-[var(--text-color)]">
      {tab >= COMINGSOON_TABS.comingsoon && isVisible && currentImage && (
        <img
          className={clsx(COMING_SOON[index].img_css, {
            'fade-in': !fadeOut,
            'fade-out': fadeOut,
          })}
          src={currentImage} // Use the preloaded image source
          alt="coming soon"
          style={{
            filter: theme === "light" ? "invert(100%)" : "none",
            display: 'block', // Helps prevent layout shifts
            willChange: 'transform, opacity',
          }}
        />
      )}
    </div>
  );
}

export default ComingSoon;



// import { AnimatePresence, motion } from "framer-motion";
// import { COMING_SOON, COMINGSOON_TABS } from "./lib";
// import clsx from "clsx";
// import { useEffect, useState } from "react";

// function ComingSoon({ tab }: { tab: number }) {
//   const [index, setIndex] = useState<number>(0);

//   // change state, to render different translations
//   useEffect(() => {
//     if (tab >= COMINGSOON_TABS.comingsoon) {
//       const timer = setTimeout(() => {
//         setIndex((prev) => prev + 1);
//       }, 10000);

//       return () => {
//         clearTimeout(timer);
//       };
//     }
//   }, [index, tab]);

//   return (
//     <>
//       <div className="h-[90px] flex justify-center items-start text-center">
//         <AnimatePresence mode="wait">
//           {tab >= COMINGSOON_TABS.comingsoon && (
//             <motion.img
//               initial={{ y: 100, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               exit={{ y: 100, opacity: 0 }}
//               transition={{ duration: 1.2, ease: "linear" }}
//               key={index}
//               className={clsx(COMING_SOON[index % COMING_SOON.length].img_css)}
//               src={`/assets/preloader/coming-soon/${
//                 COMING_SOON[index % COMING_SOON.length].img
//               }`}
//               alt="coming soon"
//             />
//           )}
//         </AnimatePresence>
//       </div>
//     </>
//   );
// }
// export default ComingSoon;
