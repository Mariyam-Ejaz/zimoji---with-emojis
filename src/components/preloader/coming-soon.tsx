import { COMING_SOON, COMINGSOON_TABS } from "@/components/preloader/lib";
import clsx from "clsx";
import { useEffect, useState, useMemo } from "react";

// Preload images
const preloadImages = (images: { img: any; }[]) => {
  images.forEach(({ img }) => {
    const image = new Image();
    image.src = `/assets/preloader/coming-soon/${img}`;
  });
};

function ComingSoon({ tab }: { tab: number }) {
  const [index, setIndex] = useState(0);
  const imageCount = COMING_SOON.length;
  const [isVisible, setIsVisible] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);

  // // Preload images only once when the component mounts
  // useEffect(() => {
  //   preloadImages(COMING_SOON);
  // }, []);

  useEffect(() => {
    if (tab >= COMINGSOON_TABS.comingsoon) {
      setIsVisible(true); // Set visibility to true
  
      const cycleImages = setInterval(() => {
        setFadeOut(true); // Trigger fade-out animation
  
        // Wait for the fade-out to complete
        setTimeout(() => {
          // Change the image right after fading out
          setIndex((prev) => (prev + 1) % imageCount); // Update image
          console.log(COMING_SOON[index].img)
          // Reset fade-out (trigger fade-in)
          setFadeOut(false); // Trigger fade-in
  
        }, 1500); // Match the duration of the fade-out
  
        // Pause for 3.8 seconds after fade-in is completed
      }, 10000); // Change the image every 10 seconds (7.6s + 2.4s animations)
  
      return () => clearInterval(cycleImages); // Clean up on unmount
    }
  }, [tab, imageCount]);
  

  // Memoize the current image for performance
  const currentImage = useMemo(() => {
    return COMING_SOON[index].img;
  }, [index]);

  return (
    <div className="h-[90px] flex justify-center items-start text-center">
      {tab >= COMINGSOON_TABS.comingsoon && isVisible && (
        <img
          className={clsx(COMING_SOON[index].img_css, {
            'fade-in': !fadeOut,
            'fade-out': fadeOut,
          })}
          src={`/assets/preloader/coming-soon/${currentImage}`}
          alt="coming soon"
          style={{
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
