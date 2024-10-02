// import { COMING_SOON, COMINGSOON_TABS } from "@/components/preloader/lib";
// import clsx from "clsx";
// import { useEffect, useState, useMemo } from "react";

// // Preload images
// // const preloadImages = (images: { img: any; }[]) => {
// //   images.forEach(({ img }) => {
// //     const image = new Image();
// //     image.src = `/assets/preloader/coming-soon/${img}`;
// //   });
// // };

// function ComingSoon({ tab }: { tab: number }) {
//   const [index, setIndex] = useState(0);
//   const imageCount = COMING_SOON.length;
//   const [isVisible, setIsVisible] = useState(false);
//   const [fadeOut, setFadeOut] = useState(false);

//   // Preload images only once when the component mounts
//   // useEffect(() => {
//   //   preloadImages(COMING_SOON);
//   // }, []);

//   useEffect(() => {
//     if (tab >= COMINGSOON_TABS.comingsoon) {
//       setIsVisible(true); // Set visibility to true
  
//       const cycleImages = setInterval(() => {
//         setFadeOut(true); // Trigger fade out
  
//         // Wait for the fade-out duration
//         setTimeout(() => {
//           // Change the image right after fading out
//           setIndex((prev) => (prev + 1) % imageCount); // Change the image
  
//           // Reset fade out after changing the image
//           setFadeOut(false); // Trigger fade in
  
//         }, 2500); // Match the duration of the fade-out
  
//       }, 10000); // Change image every 10 seconds
  
//       return () => clearInterval(cycleImages); // Clear interval on unmount
//     }
//   }, [tab, imageCount]);
  

//   // Memoize the current image for performance
//   const currentImage = useMemo(() => {
//     return COMING_SOON[index].img;
//   }, [index]);

//   return (
//     <div className="h-[90px] flex justify-center items-start text-center">
//       {tab >= COMINGSOON_TABS.comingsoon  && (
//         <img
//           className={clsx(COMING_SOON[index].img_css, {
//             'fade-in': !fadeOut,
//             'fade-out': fadeOut,
//           })}
//           src={`/assets/preloader/coming-soon/${currentImage}`}
//           alt="coming soon"
//           style={{
//             display: 'block', // Helps prevent layout shifts
//             willChange: 'transform, opacity',
//           }}
//         />
//       )}
//     </div>
//   );
// }

// export default ComingSoon;



// // import { AnimatePresence, motion } from "framer-motion";
// // import { COMING_SOON, COMINGSOON_TABS } from "./lib";
// // import clsx from "clsx";
// // import { useEffect, useState } from "react";

// // function ComingSoon({ tab }: { tab: number }) {
// //   const [index, setIndex] = useState<number>(0);

// //   // change state, to render different translations
// //   useEffect(() => {
// //     if (tab >= COMINGSOON_TABS.comingsoon) {
// //       const timer = setTimeout(() => {
// //         setIndex((prev) => prev + 1);
// //       }, 10000);

// //       return () => {
// //         clearTimeout(timer);
// //       };
// //     }
// //   }, [index, tab]);

// //   return (
// //     <>
// //       <div className="h-[90px] flex justify-center items-start text-center">
// //         <AnimatePresence mode="wait">
// //           {tab >= COMINGSOON_TABS.comingsoon && (
// //             <motion.img
// //               initial={{ y: 100, opacity: 0 }}
// //               animate={{ y: 0, opacity: 1 }}
// //               exit={{ y: 100, opacity: 0 }}
// //               transition={{ duration: 1.2, ease: "linear" }}
// //               key={index}
// //               className={clsx(COMING_SOON[index % COMING_SOON.length].img_css)}
// //               src={`/assets/preloader/coming-soon/${
// //                 COMING_SOON[index % COMING_SOON.length].img
// //               }`}
// //               alt="coming soon"
// //             />
// //           )}
// //         </AnimatePresence>
// //       </div>
// //     </>
// //   );
// // }
// // export default ComingSoon;




import { COMING_SOON, COMINGSOON_TABS } from "@/components/preloader/lib";
import clsx from "clsx";
import { useEffect, useState } from "react";

const preloadNextImage = (nextImage: string) => {
  const image = new Image();
  image.src = `/assets/preloader/coming-soon/${nextImage}`;
};

function ComingSoon({ tab }: { tab: number }) {
  const [index, setIndex] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const imageCount = COMING_SOON.length;

  useEffect(() => {
    if (tab >= COMINGSOON_TABS.comingsoon) {
      // Preload the next image initially
      preloadNextImage(COMING_SOON[(index + 1) % imageCount].img);

      const cycleImages = setInterval(() => {
        // Trigger fade-out animation
        setFadeOut(true);

        // After fade-out finishes, change image
        setTimeout(() => {
          setIndex((prevIndex) => {
            const nextIndex = (prevIndex + 1) % imageCount;
            preloadNextImage(COMING_SOON[(nextIndex + 1) % imageCount].img); // Preload the next image
            return nextIndex;
          });
          // Trigger fade-in animation
          setFadeOut(false);
        }, 1200); // Time for fade-out animation to complete (matches CSS)

      }, 10000); // Change image every 10 seconds

      return () => clearInterval(cycleImages); // Clear interval on unmount
    }
  }, [tab, index, imageCount]);

  return (
    <div className="h-[90px] flex justify-center items-start text-center">
      {tab >= COMINGSOON_TABS.comingsoon && (
        <img
          className={clsx(COMING_SOON[index].img_css, {
            'fade-in': !fadeOut,
            'fade-out': fadeOut,
          })}
          src={`/assets/preloader/coming-soon/${COMING_SOON[index].img}`}
          alt="coming soon"
          style={{
            display: 'block',
            willChange: 'transform, opacity',
          }}
        />
      )}
    </div>
  );
}

export default ComingSoon;
