// import { useEffect, useState, memo, useRef } from 'react';
// import { extractEmojiUrls } from '@/utils/emoji-extractor';
// import { RootState } from '@/store';
// import { useSelector } from 'react-redux';
// import { HOLDING_TABS } from '../preloader/lib';
// import { debounce } from '@/lib/helpers';
// import { motion } from 'framer-motion';

// // Constants
// const MAX_EMOJIS = 500;
// const APPEAR_DELAY = 50;
// const ANIMATION_DURATION = 3;

// interface EmojiProps {
//   src: string;
//   top: number;
//   left: number;
// }

// const RandomEmoji = memo(() => {
//   const [emojis, setEmojis] = useState<EmojiProps[]>([]);
//   const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
//   const { tab } = useSelector((state: RootState) => state.holding);
//   const [emojiSize, setEmojiSize] = useState(40);
//   const [minDistance, setMinDistance] = useState(60);
//   const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
//   const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);
//   const emojiRefs = useRef<(HTMLImageElement | null)[]>([]);

//   // Update the sampling area on resize
//   useEffect(() => {
//     const handleResize = debounce(() => {
//       if (window.innerWidth >= 2036) {
//         setMinDistance(280);
//         setEmojiSize(95);
//       } else if (window.innerWidth >= 1000) {
//         setMinDistance(150);
//         setEmojiSize(50);
//       } else {
//         setMinDistance(100);
//         setEmojiSize(40);
//       }
//     }, 200);

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Generate emoji positions and set up sampling area
//   useEffect(() => {
//     const emojiUrls = extractEmojiUrls();
//     const [areaWidth, areaHeight] = [window.innerWidth , window.innerHeight ];

//     const newEmojis: EmojiProps[] = emojiUrls.slice(0, MAX_EMOJIS).map((src, index) => ({
//       src,
//       left: point[0] + EDGE_MARGIN / 3,
//       top: point[1] + EDGE_MARGIN / 3,
//     }));

//     setEmojis(newEmojis);
//     setVisibleEmojiCount(0);
//   }, [emojiSize, minDistance]);

//   // Lazy load emojis using IntersectionObserver
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const index = Number(entry.target.getAttribute('data-index'));
//             setVisibleEmojiCount((prevCount) => Math.max(prevCount, index + 1));
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       {
//         rootMargin: '200px',
//         threshold: 0.1,
//       }
//     );

//     emojiRefs.current.forEach((emoji, index) => {
//       if (emoji) observer.observe(emoji);
//     });

//     return () => {
//       emojiRefs.current.forEach((emoji) => {
//         if (emoji) observer.unobserve(emoji);
//       });
//     };
//   }, [emojis]);

//   // Handle emoji appearance based on tab state
//   useEffect(() => {
//     if (tab >= HOLDING_TABS.zimojilogo) {
//       const addEmojiWithDelay = (index: number) => {
//         if (index < emojis.length) {
//           setVisibleEmojiCount((prevCount) => prevCount + 1);
//           setTimeout(() => addEmojiWithDelay(index + 1), APPEAR_DELAY);
//         }
//       };

//       addEmojiWithDelay(0);

//       const animationInterval = setInterval(() => {
//         const randomIndex = Math.floor(Math.random() * emojis.length);
//         setSelectedEmojiIndex(randomIndex);
//         setTimeout(() => {
//           setSelectedEmojiIndex(null);
//         }, ANIMATION_DURATION * 1000);
//       }, 5000);

//       return () => {
//         clearInterval(animationInterval);
//       };
//     }
//   }, [tab, emojis]);

//   return (
//     <div className="emoji-container">
//       {emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
//         <motion.img
//           key={index}
//           src={emoji.src}
//           alt={`emoji-${index}`}
//           className="absolute"
//           style={{
//             top: `${emoji.top}px`,
//             left: `${emoji.left}px`,
//             width: `${emojiSize}px`,
//             height: 'auto',
//             zIndex: selectedEmojiIndex === index ? 18 : 0,
//           }}
//           initial={{ scale: 1, rotate: 0 }}
//           animate={{
//             scale: selectedEmojiIndex === index ? 6 : 1,
//             rotate: selectedEmojiIndex === index ? 360 : 0,
//           }}
//           transition={{ type: 'spring', stiffness: 100, damping: 10 }}
//         />
//       ))}
//     </div>
//   );
// });

// export default memo(RandomEmoji);





















































































// // // import { useEffect, useState, memo } from 'react';
// // // import { extractEmojiUrls } from '@/utils/emoji-extractor';
// // // import { motion } from 'framer-motion';
// // // import { RootState } from '@/store';
// // // import { useSelector } from 'react-redux';
// // // import { HOLDING_TABS } from '../preloader/lib';
// // // import PoissonDiskSampling from 'poisson-disk-sampling';
// // // import { getSamplingArea } from '@/utils/emoji-utils';
// // // import { debounce } from '@/lib/helpers';

// // // // Constants
// // // const EDGE_MARGIN = 6;
// // // const MAX_EMOJIS = 500;
// // // const ANIMATION_DURATION = 15;

// // // interface EmojiProps {
// // //   src: string;
// // //   top: number;
// // //   left: number;
// // // }

// // // const RandomEmojis = memo(() => {
// // //   const [emojis, setEmojis] = useState<EmojiProps[]>([]);
// // //   const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
// // //   const { tab } = useSelector((state: RootState) => state.holding);

// // //   // State to manage sizes based on screen width
// // //   const [emojiSize, setEmojiSize] = useState(40);
// // //   const [minDistance, setMinDistance] = useState(60);
// // //   const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
// // //   const [refreshKey, setRefreshKey] = useState(0);
// // //   const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);
// // //   const [usedIndexes, setUsedIndexes] = useState(new Set<number>());

// // //   useEffect(() => {
// // //     if (typeof window !== 'undefined') {
// // //       const handleResize = debounce(() => {
// // //         if (window.innerWidth >= 2036) {
// // //           setMinDistance(230);
// // //           setEmojiSize(70);
// // //         } else if (window.innerWidth >= 1000) {
// // //           setMinDistance(130);
// // //           setEmojiSize(40);
// // //         } else {
// // //           setMinDistance(80);
// // //           setEmojiSize(40);
// // //         }

// // //         setRefreshKey((prevKey) => prevKey + 1);
// // //       }, 200);

// // //       handleResize();
// // //       window.addEventListener('resize', handleResize);
// // //       return () => window.removeEventListener('resize', handleResize);
// // //     }
// // //   }, []);

// // //   useEffect(() => {
// // //     if (typeof window !== 'undefined') {
// // //       const emojiUrls = extractEmojiUrls();

// // //       // Shuffle the emojiUrls array to randomize the order
// // //       const shuffledEmojiUrls = emojiUrls.sort(() => Math.random() - 0.5);

// // //       const [areaWidth, areaHeight] = getSamplingArea(
// // //         window.innerWidth,
// // //         window.innerHeight,
// // //         EDGE_MARGIN,
// // //         emojiSize
// // //       );
// // //       setSamplingArea([areaWidth, areaHeight]);

// // //       const p = new PoissonDiskSampling({
// // //         shape: [areaWidth, areaHeight],
// // //         minDistance,
// // //         maxDistance: minDistance + (window.innerWidth < 1000 ? 10 : 20),
// // //         tries: 18,
// // //       });

// // //       const points = p.fill().slice(0, MAX_EMOJIS);

// // //       const newEmojis: EmojiProps[] = points.map((point, index) => ({
// // //         src: shuffledEmojiUrls[index % shuffledEmojiUrls.length],
// // //         left: point[0] + EDGE_MARGIN / 3,
// // //         top: point[1] + EDGE_MARGIN / 3,
// // //       }));

// // //       setEmojis(newEmojis);
// // //       setVisibleEmojiCount(0);
// // //       setUsedIndexes(new Set()); // Reset used indexes when emojis are updated
// // //     }
// // //   }, [emojiSize, minDistance, refreshKey]);

// // //   useEffect(() => {
// // //     if (tab === HOLDING_TABS.zimologo) {
// // //       const startDelay = setTimeout(() => {
// // //         let index = 0;

// // //         // Function to continuously add emojis
// // //         const addEmojiInterval = setInterval(() => {
// // //           if (index < emojis.length) {
// // //             setVisibleEmojiCount((prevCount) => Math.min(prevCount + 1, MAX_EMOJIS));
// // //             index++;
// // //           } else {
// // //             clearInterval(addEmojiInterval);
// // //           }
// // //         }, 300); // Adjust the interval time to control the rate of adding emojis

// // //         // Randomly select an emoji for animation every 6 seconds
// // //         const animationInterval = setInterval(() => {
// // //           // Generate a random index that hasn't been used recently
// // //           let randomIndex;
// // //           do {
// // //             randomIndex = Math.floor(Math.random() * emojis.length);
// // //           } while (usedIndexes.has(randomIndex) && usedIndexes.size < emojis.length);

// // //           // Add the random index to the used set and trim if necessary
// // //           setUsedIndexes((prev) => {
// // //             const newSet = new Set(prev);
// // //             newSet.add(randomIndex);
// // //             if (newSet.size > 50) newSet.delete(newSet.values().next().value); // Limit to 50 recent
// // //             return newSet;
// // //           });

// // //           setSelectedEmojiIndex(randomIndex);
// // //         }, 6000);

// // //         return () => {
// // //           clearTimeout(startDelay);
// // //           clearInterval(addEmojiInterval);
// // //           clearInterval(animationInterval);
// // //         };
// // //       }, 5000);

// // //       return () => clearTimeout(startDelay);
// // //     }
// // //   }, [tab, emojis, usedIndexes]);

// // //   return (
// // //     <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
// // //       <div
// // //         style={{
// // //           position: 'absolute',
// // //           top: `${EDGE_MARGIN}px`,
// // //           left: `${EDGE_MARGIN}px`,
// // //           width: '200vw', // Wide sampling area
// // //           height: '200vh', // Tall sampling area
// // //           zIndex: 0,
// // //         }}
// // //       />

// // //       {tab === HOLDING_TABS.zimologo &&
// // //         emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
// // //           <motion.img
// // //             key={index}
// // //             src={emoji.src}
// // //             alt={`emoji-${index}`}
// // //             className="absolute z-0"
// // //             style={{
// // //               top: `${emoji.top}px`,
// // //               left: `${emoji.left}px`,
// // //               width: `${emojiSize}px`,
// // //               height: `${emojiSize}px`,
// // //               transform: 'translate(-50%, -50%)',
// // //             }}
// // //             animate={{
// // //               x: ['0%', '100vw'], // Move from left to right
// // //               y: ['0%', '100vh'], // Move from top to bottom
// // //               opacity: [1, 0], // Fade out
// // //             }}
// // //             transition={{
// // //               duration: ANIMATION_DURATION,
// // //               ease: 'linear',
// // //               repeat: Infinity, // Continuous loop
// // //               repeatType: 'loop',
// // //             }}
// // //           />
// // //         ))}
// // //     </div>
// // //   );
// // // });






































// ORIGINAL WITH FRAMER
import { useEffect, useState, useRef, memo } from 'react';  
import { extractEmojiUrls } from '@/utils/emoji-extractor';
import { AnimatePresence, motion } from 'framer-motion';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { HOLDING_TABS } from '../preloader/lib';
import PoissonDiskSampling from 'poisson-disk-sampling';
import { getSamplingArea } from '@/utils/emoji-utils';
import { debounce } from '@/lib/helpers';

// Constants
const EDGE_MARGIN = 6;
const MAX_EMOJIS = 500;
const ANIMATION_DURATION = 3;

interface EmojiProps {
  src: string;
  top: number;
  left: number;
}

const RandomEmojis = memo(() => {
  const [emojis, setEmojis] = useState<EmojiProps[]>([]);
  const [preloadedEmojis, setPreloadedEmojis] = useState<string[]>([]); // Track preloaded emojis
  const [preloaded, setPreloaded] = useState(false); // Track preloading state
  const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
  const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
  const { tab } = useSelector((state: RootState) => state.holding);
  const [emojiSize, setEmojiSize] = useState(40);
  const [minDistance, setMinDistance] = useState(60);
  const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
  const [refreshKey, setRefreshKey] = useState(0);
  const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);
  const [animateContainer, setAnimateContainer] = useState(false);
  const animationFrameRef = useRef<number | null>(null); 

  // Preload emoji images
  // useEffect(() => {
  //   const preloadEmojis = async (emojiUrls: string[]) => {
  //     const promises = emojiUrls.map((src) => {
  //       return new Promise<void>((resolve, reject) => {
  //         const img = new Image();
  //         img.src = src;
  //         img.onload = () => resolve();
  //         img.onerror = () => reject();
  //       });
  //     });

  //     try {
  //       await Promise.all(promises);
  //       setPreloaded(true); // All images are preloaded
  //     } catch (error) {
  //       console.error("Failed to preload some emojis", error);
  //     }
  //   };

  //   const emojiUrls = extractEmojiUrls();
  //   preloadEmojis(emojiUrls).then(() => setPreloadedEmojis(emojiUrls)); // Store preloaded emojis
  // }, []);

  // Update the sampling area on resize
  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= 1536) {
        setMinDistance(280);
        setEmojiSize(95);
      } else if (window.innerWidth >= 1000) {
        setMinDistance(210);
        setEmojiSize(60);
      } else {
        setMinDistance(90);
        setEmojiSize(40);
      }
      setRefreshKey((prevKey) => prevKey + 1);
    }, 200);

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Generate emoji positions and set up sampling area
  useEffect(() => {
    // if (!preloaded) return; // Don't proceed until preloading is done

    const [areaWidth, areaHeight] = getSamplingArea(window.innerWidth, window.innerHeight, EDGE_MARGIN, emojiSize);
    setSamplingArea([areaWidth, areaHeight]);

    const p = new PoissonDiskSampling({
      shape: [areaWidth, areaHeight],
      minDistance,
      maxDistance: minDistance + (window.innerWidth < 1000 ? 10 : 20),
      tries: 18,
    });

    const points = p.fill().slice(0, MAX_EMOJIS);

    const newEmojis: EmojiProps[] = points.map((point, index) => ({
      src: preloadedEmojis[index % preloadedEmojis.length], // Use preloaded emojis
      left: point[0] + EDGE_MARGIN / 3,
      top: point[1] + EDGE_MARGIN / 3,
    }));

    setEmojis(newEmojis);
    setVisibleEmojiCount(0);
  }, [emojiSize, minDistance, refreshKey, preloaded, preloadedEmojis]);

  // Handle emoji appearance based on tab state
  useEffect(() => {
    if (tab === HOLDING_TABS.zimojilogo) {
      const startDelay = setTimeout(() => {
        const addEmojiWithDelay = (index: number) => {
          if (index < emojis.length) {
            setVisibleEmojiCount((prevCount) => prevCount + 1);
            setTimeout(() => addEmojiWithDelay(index + 1), 50);
          } else {
            setAnimateContainer(true); // Start animation after all emojis appear
          }
        };

        addEmojiWithDelay(0);

        const animationInterval = setInterval(() => {
          const randomIndex = Math.floor(Math.random() * emojis.length);
          setSelectedEmojiIndex(randomIndex);
          setActiveAnimation(randomIndex);

          setTimeout(() => {
            setSelectedEmojiIndex(null);
          }, ANIMATION_DURATION * 1000);
        }, 8000);

        return () => {
          clearTimeout(startDelay);
          clearInterval(animationInterval);
        };
      }, 1000);

      return () => clearTimeout(startDelay);
    }
  }, [tab, emojis]);

  // Optimize rendering with requestAnimationFrame
  useEffect(() => {
    const animate = () => {
      setActiveAnimation((prev) => (prev !== null ? prev : activeAnimation));
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [activeAnimation]);

  // Render the emoji containers
  const renderEmojiContainers = () => {
    const offsets = [
      { x: '0%', y: '0%' },
      { x: '-100%', y: '100%' },
      { x: '100%', y: '-100%' },
    ];

    return offsets.map((offset, idx) => (
      <motion.div
        key={idx}
        className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ transform: `translate(${offset.x}, ${offset.y})` }}
      >
        {emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
          <motion.img
            key={index}
            src={emoji.src}
            alt={`emoji-${index}`}
            className="absolute z-[-1]"
            style={{
              top: `${emoji.top}px`,
              left: `${emoji.left}px`,
              width: `${emojiSize}px`,
              height: 'auto',
              transform: 'translate(-50%, -50%)',
              zIndex: activeAnimation === index ? 18 : 0,
              willChange: 'transform, opacity',
            }}
            animate={{
              scale: selectedEmojiIndex === index ? 6 : 1,
              rotate: selectedEmojiIndex === index ? 360 : 0,
              opacity: visibleEmojiCount > 0 ? 1 : 0,
            }}
            transition={{
              type: 'spring',
              stiffness: 100,
              damping: 10,
              duration: 0.5,
            }}
            onAnimationComplete={() => {
              if (activeAnimation === index) {
                setActiveAnimation(null);
              }
            }}
          />
        ))}
      </motion.div>
    ));
  };

  return (
    <>
      {renderEmojiContainers()}
    </>
  );
});

export default memo(RandomEmojis);




















// // // CSS EMOJI ANIMATION
// import { useEffect, useState, useRef, memo } from 'react';  
// import { extractEmojiUrls } from '@/utils/emoji-extractor';
// import { AnimatePresence, motion } from 'framer-motion';
// import { RootState } from '@/store';
// import { useSelector } from 'react-redux';
// import { HOLDING_TABS } from '../preloader/lib';
// import PoissonDiskSampling from 'poisson-disk-sampling';
// import { getSamplingArea } from '@/utils/emoji-utils';
// import { debounce } from '@/lib/helpers';

// // Constants
// const EDGE_MARGIN = 6;
// const MAX_EMOJIS = 500;
// const ANIMATION_DURATION = 3;

// interface EmojiProps {
//   src: string;
//   top: number;
//   left: number;
// }

// const RandomEmojis = memo(() => {
//   const [emojis, setEmojis] = useState<EmojiProps[]>([]);
//   const [preloaded, setPreloaded] = useState(false); // Track preloading state
//   const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
//   const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
//   const { tab } = useSelector((state: RootState) => state.holding);
//   const [emojiSize, setEmojiSize] = useState(40);
//   const [minDistance, setMinDistance] = useState(60);
//   const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);
//   const [animateContainer, setAnimateContainer] = useState(false);
//   const animationFrameRef = useRef<number | null>(null); 

//   // Preload emoji images
//   useEffect(() => {
//     const preloadEmojis = async (emojiUrls: string[]) => {
//       const promises = emojiUrls.map((src) => {
//         return new Promise<void>((resolve, reject) => {
//           const img = new Image();
//           img.src = src;
//           img.onload = () => resolve();
//           img.onerror = () => reject();
//         });
//       });

//       try {
//         await Promise.all(promises);
//         setPreloaded(true); // All images are preloaded
//       } catch (error) {
//         console.error("Failed to preload some emojis", error);
//       }
//     };

//     const emojiUrls = extractEmojiUrls();
//     preloadEmojis(emojiUrls);
//   }, []);

//   // Update the sampling area on resize
//   useEffect(() => {
//     const handleResize = debounce(() => {
//       if (window.innerWidth >= 2036) {
//         setMinDistance(280);
//         setEmojiSize(95);
//       } else if (window.innerWidth >= 1000) {
//         setMinDistance(150);
//         setEmojiSize(50);
//       } else {
//         setMinDistance(80);
//         setEmojiSize(40);
//       }
//       setRefreshKey((prevKey) => prevKey + 1);
//     }, 200);

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Generate emoji positions and set up sampling area
//   useEffect(() => {
//     if (!preloaded) return; // Don't proceed until preloading is done

//     const emojiUrls = extractEmojiUrls();
//     const [areaWidth, areaHeight] = getSamplingArea(window.innerWidth, window.innerHeight, EDGE_MARGIN, emojiSize);
//     setSamplingArea([areaWidth, areaHeight]);

//     const p = new PoissonDiskSampling({
//       shape: [areaWidth, areaHeight],
//       minDistance,
//       maxDistance: minDistance + (window.innerWidth < 1000 ? 10 : 20),
//       tries: 18,
//     });

//     const points = p.fill().slice(0, MAX_EMOJIS);

//     const newEmojis: EmojiProps[] = points.map((point, index) => ({
//       src: emojiUrls[index % emojiUrls.length],
//       left: point[0] + EDGE_MARGIN / 3,
//       top: point[1] + EDGE_MARGIN / 3,
//     }));

//     setEmojis(newEmojis);
//     setVisibleEmojiCount(0);
//   }, [emojiSize, minDistance, refreshKey, preloaded]);

//   // Handle emoji appearance based on tab state
//   useEffect(() => {
//     if (tab === HOLDING_TABS.zimojilogo) {
//       const startDelay = setTimeout(() => {
//         const addEmojiWithDelay = (index: number) => {
//           if (index < emojis.length) {
//             setVisibleEmojiCount((prevCount) => prevCount + 1);
//             setTimeout(() => addEmojiWithDelay(index + 1), 50);
//           } else {
//             setAnimateContainer(true); // Start animation after all emojis appear
//           }
//         };

//         addEmojiWithDelay(0);

//         const animationInterval = setInterval(() => {
//           const randomIndex = Math.floor(Math.random() * emojis.length);
//           setSelectedEmojiIndex(randomIndex);
//           setActiveAnimation(randomIndex);

//           setTimeout(() => {
//             setSelectedEmojiIndex(null);
//           }, ANIMATION_DURATION * 1000);
//         }, 5000);

//         return () => {
//           clearTimeout(startDelay);
//           clearInterval(animationInterval);
//         };
//       }, 5000);

//       return () => clearTimeout(startDelay);
//     }
//   }, [tab, emojis]);

//   // Optimize rendering with requestAnimationFrame
//   useEffect(() => {
//     const animate = () => {
//       setActiveAnimation((prev) => (prev !== null ? prev : activeAnimation));
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };

//     animationFrameRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [activeAnimation]);

//   // Render the emoji containers
//   const renderEmojiContainers = () => {
//     const offsets = [
//       { x: '0%', y: '0%' },
//       { x: '-100%', y: '100%' },
//       { x: '100%', y: '-100%' },
//     ];

//     return offsets.map((offset, idx) => (
//       <div
//         key={idx}
//         className="emoji-container pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden"
//         style={{ transform: `translate(${offset.x}, ${offset.y})` }}
//       >
//         {emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
//           <img
//             key={index}
//             src={emoji.src}
//             alt={`emoji-${index}`}
//             className={`emoji absolute ${selectedEmojiIndex === index ? 'active' : ''}`}
//             style={{
//               top: `${emoji.top}px`,
//               left: `${emoji.left}px`,
//               width: `${emojiSize}px`,
//               height: 'auto',
//               zIndex: activeAnimation === index ? 18 : 0,
//             }}
//           />
//         ))}
//       </div>
//     ));
    
//   };

//   return (
//     <>
//       {renderEmojiContainers()}
//     </>
//   );
// });

// export default memo(RandomEmojis);







































// import { useEffect, useState, useRef, memo } from 'react';  
// import { extractEmojiUrls } from '@/utils/emoji-extractor';
// import { AnimatePresence, motion } from 'framer-motion';
// import { RootState } from '@/store';
// import { useSelector } from 'react-redux';
// import { HOLDING_TABS } from '../preloader/lib';
// import PoissonDiskSampling from 'poisson-disk-sampling';
// import { getSamplingArea } from '@/utils/emoji-utils';
// import { debounce } from '@/lib/helpers';

// // Constants
// const EDGE_MARGIN = 6;
// const MAX_EMOJIS = 500;
// const ANIMATION_DURATION = 3;

// interface EmojiProps {
//   src: string;
//   top: number;
//   left: number;
// }

// const EmojiSlightMovement = memo(() => {
//   const [emojis, setEmojis] = useState<EmojiProps[]>([]);
//   const [preloaded, setPreloaded] = useState(false);
//   const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
//   const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
//   const { tab } = useSelector((state: RootState) => state.holding);
//   const [emojiSize, setEmojiSize] = useState(40);
//   const [minDistance, setMinDistance] = useState(60);
//   const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);
//   const [animateContainer, setAnimateContainer] = useState(false);
//   const animationFrameRef = useRef<number | null>(null); 
//   const [hasMoved, setHasMoved] = useState(false); // Track movement state

//   // Preload emoji images
//   useEffect(() => {
//     const preloadEmojis = async (emojiUrls: string[]) => {
//       const promises = emojiUrls.map((src) => {
//         return new Promise<void>((resolve, reject) => {
//           const img = new Image();
//           img.src = src;
//           img.onload = () => resolve();
//           img.onerror = () => reject();
//         });
//       });

//       try {
//         await Promise.all(promises);
//         setPreloaded(true);
//       } catch (error) {
//         console.error("Failed to preload some emojis", error);
//       }
//     };

//     const emojiUrls = extractEmojiUrls();
//     preloadEmojis(emojiUrls);
//   }, []);

//   // Update the sampling area on resize
//   useEffect(() => {
//     const handleResize = debounce(() => {
//       if (window.innerWidth >= 2036) {
//         setMinDistance(280);
//         setEmojiSize(95);
//       } else if (window.innerWidth >= 1000) {
//         setMinDistance(150);
//         setEmojiSize(50);
//       } else {
//         setMinDistance(80);
//         setEmojiSize(40);
//       }
//       setRefreshKey((prevKey) => prevKey + 1);
//     }, 200);

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   // Generate emoji positions and set up sampling area
//   useEffect(() => {
//     if (!preloaded) return;

//     const emojiUrls = extractEmojiUrls();
//     const [areaWidth, areaHeight] = getSamplingArea(window.innerWidth * 3, window.innerHeight * 3, EDGE_MARGIN, emojiSize);
//     setSamplingArea([areaWidth, areaHeight]);

//     const p = new PoissonDiskSampling({
//       shape: [areaWidth, areaHeight],
//       minDistance,
//       maxDistance: minDistance + (window.innerWidth < 1000 ? 15 : 20),
//       tries: 18,
//     });

//     const points = p.fill().slice(0, MAX_EMOJIS);

//     const newEmojis: EmojiProps[] = points.map((point, index) => ({
//       src: emojiUrls[index % emojiUrls.length],
//       left: point[0] - EDGE_MARGIN / 3,
//       top: point[1] - EDGE_MARGIN / 3,
//     }));

//     setEmojis(newEmojis);
//     setVisibleEmojiCount(0);
//   }, [emojiSize, minDistance, refreshKey, preloaded]);

//   // Handle emoji appearance based on tab state
//   useEffect(() => {
//     if (tab === HOLDING_TABS.zimojilogo) {
//       const startDelay = setTimeout(() => {
//         const addEmojiWithDelay = (index: number) => {
//           if (index < emojis.length) {
//             setVisibleEmojiCount((prevCount) => prevCount + 1);
//             setTimeout(() => addEmojiWithDelay(index + 1), 50);
//           } else {
//             setAnimateContainer(true);
//             setHasMoved(true); // Start moving emojis
//           }
//         };

//         addEmojiWithDelay(0);

//         const animationInterval = setInterval(() => {
//           const randomIndex = Math.floor(Math.random() * emojis.length);
//           setSelectedEmojiIndex(randomIndex);
//           setActiveAnimation(randomIndex);

//           setTimeout(() => {
//             setSelectedEmojiIndex(null);
//           }, ANIMATION_DURATION * 1000);
//         }, 5000);

//         return () => {
//           clearTimeout(startDelay);
//           clearInterval(animationInterval);
//         };
//       }, 5000);

//       return () => clearTimeout(startDelay);
//     }
//   }, [tab, emojis]);

//   // Optimize rendering with requestAnimationFrame
//   useEffect(() => {
//     const animate = () => {
//       setActiveAnimation((prev) => (prev !== null ? prev : activeAnimation));
//       animationFrameRef.current = requestAnimationFrame(animate);
//     };

//     animationFrameRef.current = requestAnimationFrame(animate);

//     return () => {
//       if (animationFrameRef.current) {
//         cancelAnimationFrame(animationFrameRef.current);
//       }
//     };
//   }, [activeAnimation]);

//   // Render the emoji containers
//   const renderEmojiContainers = () => {
//     return (
//       <div
//         className="emoji-container pointer-events-none absolute overflow-hidden"
//         style={{
//           top: '50%',           
//           left: '50%',         
//           transform: 'translate(-50%, -50%)', 
//           width: `${samplingArea[0]}px`,  
//           height: `${samplingArea[1]}px`, 
//           overflow: 'hidden', 
//           position: 'absolute', 
//         }}
//       >
//         {emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
//           <img
//             key={index}
//             src={emoji.src}
//             alt={`emoji-${index}`}
//             className={`emoji absolute ${selectedEmojiIndex === index ? 'active' : ''} ${hasMoved ? 'moving' : ''}`}
//             style={{
//               top: `${emoji.top}px`,
//               left: `${emoji.left}px`,
//               width: `${emojiSize}px`,
//               height: 'auto',
//               zIndex: activeAnimation === index ? 18 : 0,
//               overflow: 'hidden'
//             }}
//           />
//         ))}
//       </div>
      
//     );
//   };
  
//   return (
//     <>
//       {renderEmojiContainers()}
//     </>
//   );
// });

// export default memo(EmojiSlightMovement);





























































































































































// import { useEffect, useState, memo } from 'react';
// import { motion } from 'framer-motion';
// import { RootState } from '@/store';
// import { useSelector } from 'react-redux';
// import { HOLDING_TABS } from '../preloader/lib';
// import PoissonDiskSampling from 'poisson-disk-sampling';
// import { getSamplingArea } from '@/utils/emoji-utils';
// import { debounce } from '@/lib/helpers';

// // Constants
// const EDGE_MARGIN = 6;
// const MAX_EMOJIS = 500;
// const ANIMATION_DURATION = 3;

// interface EmojiProps {
//   src: string;
//   top: number;
//   left: number;
// }

// const RandomEmojis = memo(() => {
//   const [emojis, setEmojis] = useState<EmojiProps[]>([]);
//   const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
//   const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
//   const { tab } = useSelector((state: RootState) => state.holding);

//   // State to manage sizes based on screen width
//   const [emojiSize, setEmojiSize] = useState(40);
//   const [minDistance, setMinDistance] = useState(60);
//   const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);

//   // Fetch emoji URLs from service worker
//   const fetchEmojiUrls = async () => {
//     if ('serviceWorker' in navigator) {
//       const registration = await navigator.serviceWorker.ready;
//       const response = await registration.active?.postMessage({ type: 'FETCH_EMOJI_URLS' });
//       return response || [];
//     }
//     return [];
//   };

//   useEffect(() => {
//     const handleResize = debounce(() => {
//       if (window.innerWidth >= 2036) {
//         setMinDistance(210);
//         setEmojiSize(70);
//       } else if (window.innerWidth >= 1000) {
//         setMinDistance(100);
//         setEmojiSize(40);
//       } else {
//         setMinDistance(80);
//         setEmojiSize(40);
//       }

//       setRefreshKey((prevKey) => prevKey + 1);
//     }, 200);

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const initializeEmojis = async () => {
//       const emojiUrls = await fetchEmojiUrls(); // Fetch emoji URLs
//       const [areaWidth, areaHeight] = getSamplingArea(window.innerWidth, window.innerHeight, EDGE_MARGIN, emojiSize);
//       setSamplingArea([areaWidth, areaHeight]);

//       const p = new PoissonDiskSampling({
//         shape: [areaWidth, areaHeight],
//         minDistance,
//         maxDistance: minDistance + (window.innerWidth < 1000 ? 10 : 20),
//         tries: 18,
//       });

//       const points = p.fill().slice(0, MAX_EMOJIS);

//       const newEmojis: EmojiProps[] = points.map((point, index) => ({
//         src: emojiUrls[index % emojiUrls.length],
//         left: point[0] + EDGE_MARGIN / 3,
//         top: point[1] + EDGE_MARGIN / 3,
//       }));

//       setEmojis(newEmojis);
//       setVisibleEmojiCount(0); // Reset visible emoji count when emojis are generated
//     };

//     initializeEmojis();
//   }, [emojiSize, minDistance, refreshKey]);

//   useEffect(() => {
//     if (tab === HOLDING_TABS.zimologo) {
//       const startDelay = setTimeout(() => {
//         const addEmojiWithDelay = (index: number) => {
//           if (index < emojis.length) {
//             setVisibleEmojiCount((prevCount) => prevCount + 1);
//             setTimeout(() => addEmojiWithDelay(index + 1), 50);
//           }
//         };

//         addEmojiWithDelay(0);

//         const animationInterval = setInterval(() => {
//           const randomIndex = Math.floor(Math.random() * emojis.length);
//           setSelectedEmojiIndex(randomIndex);
//           setActiveAnimation(randomIndex);

//           setTimeout(() => {
//             setSelectedEmojiIndex(null);
//           }, ANIMATION_DURATION * 1000);
//         }, 4000);

//         return () => {
//           clearTimeout(startDelay);
//           clearInterval(animationInterval);
//         };
//       }, 5000); // delay (in milliseconds) before starting the emoji visibility

//       return () => clearTimeout(startDelay);
//     }
//   }, [tab, emojis]);

//   return (
//     <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
//       <div
//         style={{
//           position: 'absolute',
//           top: `${EDGE_MARGIN}px`,
//           left: `${EDGE_MARGIN}px`,
//           width: `${samplingArea[0]}px`,
//           height: `${samplingArea[1]}px`,
//           zIndex: 0,
//         }}
//       />

//       {tab === HOLDING_TABS.zimologo &&
//         emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
//           <motion.img
//             key={index}
//             src={emoji.src}
//             alt={`emoji-${index}`}
//             className="absolute z-[-1px]"
//             style={{
//               top: `${emoji.top}px`,
//               left: `${emoji.left}px`,
//               width: `${emojiSize}px`,
//               height: `${emojiSize}px`,
//               transform: 'translate(-50%, -50%)',
//               zIndex: activeAnimation === index ? 18 : 0,
//             }}
//             animate={{
//               scale: selectedEmojiIndex === index ? 6 : 1,
//               rotate: selectedEmojiIndex === index ? 360 : 0,
//             }}
//             transition={{
//               type: 'spring',
//               stiffness: 100,
//               damping: 10,
//             }}
//             onAnimationComplete={() => {
//               if (activeAnimation === index) {
//                 setActiveAnimation(null);
//               }
//             }}
//           />
//         ))}
//     </div>
//   );
// });

// export default memo(RandomEmojis);


















// import { useEffect, useState, memo } from 'react';
// import { motion } from 'framer-motion';
// import { RootState } from '@/store';
// import { useSelector } from 'react-redux';
// import { HOLDING_TABS } from '../preloader/lib';
// import PoissonDiskSampling from 'poisson-disk-sampling';
// import { getSamplingArea } from '@/utils/emoji-utils';
// import { debounce } from '@/lib/helpers';

// // Constants
// const EDGE_MARGIN = 6;
// const MAX_EMOJIS = 500;
// const ANIMATION_DURATION = 3;

// interface EmojiProps {
//   src: string;
//   top: number;
//   left: number;
// }

// const RandomEmojis = memo(() => {
//   const [emojis, setEmojis] = useState<EmojiProps[]>([]);
//   const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
//   const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
//   const { tab } = useSelector((state: RootState) => state.holding);

//   const [emojiSize, setEmojiSize] = useState(40);
//   const [minDistance, setMinDistance] = useState(60);
//   const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);

//   // Fetch emoji URLs from service worker
//   const fetchEmojiUrls = async () => {
//     if ('serviceWorker' in navigator) {
//       const registration = await navigator.serviceWorker.ready;
//       return new Promise<string[]>((resolve) => {
//         const messageChannel = new MessageChannel();
//         messageChannel.port1.onmessage = (event) => resolve(event.data);
//         registration.active?.postMessage({ type: 'FETCH_EMOJI_URLS' }, [messageChannel.port2]);
//       });
//     }
//     return [];
//   };

//   useEffect(() => {
//     const handleResize = debounce(() => {
//       if (window.innerWidth >= 2036) {
//         setMinDistance(210);
//         setEmojiSize(70);
//       } else if (window.innerWidth >= 1000) {
//         setMinDistance(100);
//         setEmojiSize(40);
//       } else {
//         setMinDistance(80);
//         setEmojiSize(40);
//       }

//       setRefreshKey((prevKey) => prevKey + 1);
//     }, 200);

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const initializeEmojis = async () => {
//       const emojiUrls = await fetchEmojiUrls();
//       const [areaWidth, areaHeight] = getSamplingArea(window.innerWidth, window.innerHeight, EDGE_MARGIN, emojiSize);
//       setSamplingArea([areaWidth, areaHeight]);

//       const p = new PoissonDiskSampling({
//         shape: [areaWidth, areaHeight],
//         minDistance,
//         maxDistance: minDistance + (window.innerWidth < 1000 ? 10 : 20),
//         tries: 18,
//       });

//       const points = p.fill().slice(0, MAX_EMOJIS);
//       const newEmojis: EmojiProps[] = points.map((point, index) => ({
//         src: emojiUrls[index % emojiUrls.length],
//         left: point[0] + EDGE_MARGIN / 3,
//         top: point[1] + EDGE_MARGIN / 3,
//       }));

//       setEmojis(newEmojis);
//       setVisibleEmojiCount(0); // Reset visible emoji count when emojis are generated
//     };

//     initializeEmojis();
//   }, [emojiSize, minDistance, refreshKey]);

//   useEffect(() => {
//     if (tab === HOLDING_TABS.zimologo) {
//       const startDelay = setTimeout(() => {
//         const addEmojiWithDelay = (index: number) => {
//           if (index < emojis.length) {
//             setVisibleEmojiCount((prevCount) => prevCount + 1);
//             setTimeout(() => addEmojiWithDelay(index + 1), 50);
//           }
//         };

//         addEmojiWithDelay(0);

//         const animationInterval = setInterval(() => {
//           const randomIndex = Math.floor(Math.random() * emojis.length);
//           setSelectedEmojiIndex(randomIndex);
//           setActiveAnimation(randomIndex);

//           setTimeout(() => {
//             setSelectedEmojiIndex(null);
//           }, ANIMATION_DURATION * 1000);
//         }, 4000);

//         return () => {
//           clearTimeout(startDelay);
//           clearInterval(animationInterval);
//         };
//       }, 5000); // delay (in milliseconds) before starting the emoji visibility

//       return () => clearTimeout(startDelay);
//     }
//   }, [tab, emojis]);

//   return (
//         <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
//           <div
//             style={{
//               position: 'absolute',
//               top: `${EDGE_MARGIN}px`,
//               left: `${EDGE_MARGIN}px`,
//               width: `${samplingArea[0]}px`,
//               height: `${samplingArea[1]}px`,
//               zIndex: 0,
//             }}
//           />
    
//           {tab === HOLDING_TABS.zimologo &&
//             emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
//               <motion.img
//                 key={index}
//                 src={emoji.src}
//                 alt={`emoji-${index}`}
//                 className="absolute z-[-1px]"
//                 style={{
//                   top: `${emoji.top}px`,
//                   left: `${emoji.left}px`,
//                   width: `${emojiSize}px`,
//                   height: `${emojiSize}px`,
//                   transform: 'translate(-50%, -50%)',
//                   zIndex: activeAnimation === index ? 18 : 0,
//                 }}
//                 animate={{
//                   scale: selectedEmojiIndex === index ? 6 : 1,
//                   rotate: selectedEmojiIndex === index ? 360 : 0,
//                 }}
//                 transition={{
//                   type: 'spring',
//                   stiffness: 100,
//                   damping: 10,
//                 }}
//                 onAnimationComplete={() => {
//                   if (activeAnimation === index) {
//                     setActiveAnimation(null);
//                   }
//                 }}
//               />
//             ))}
//         </div>
//       );
// });

// export default RandomEmojis;




// import { useEffect, useState, memo } from 'react';
// import { motion } from 'framer-motion';
// import { RootState } from '@/store';
// import { useSelector } from 'react-redux';
// import { HOLDING_TABS } from '../preloader/lib';
// import PoissonDiskSampling from 'poisson-disk-sampling';
// import { getSamplingArea } from '@/utils/emoji-utils';
// import { debounce } from '@/lib/helpers';

// // Constants
// const EDGE_MARGIN = 6;
// const MAX_EMOJIS = 500;
// const ANIMATION_DURATION = 3;

// interface EmojiProps {
//   src: string;
//   top: number;
//   left: number;
// }

// const RandomEmojis = memo(() => {
//   const [emojis, setEmojis] = useState<EmojiProps[]>([]);
//   const [activeEmojis, setActiveEmojis] = useState<number[]>([]); // Keep track of active emoji indices
//   const [selectedEmojiIndex, setSelectedEmojiIndex] = useState<number | null>(null);
//   const [activeAnimation, setActiveAnimation] = useState<number | null>(null);
//   const { tab } = useSelector((state: RootState) => state.holding);

//   const [emojiSize, setEmojiSize] = useState(40);
//   const [minDistance, setMinDistance] = useState(60);
//   const [samplingArea, setSamplingArea] = useState<[number, number]>([0, 0]);
//   const [refreshKey, setRefreshKey] = useState(0);
//   const [visibleEmojiCount, setVisibleEmojiCount] = useState(0);

//   const fetchEmojiUrls = async () => {
//     if ('serviceWorker' in navigator) {
//       const registration = await navigator.serviceWorker.ready;
//       return new Promise<string[]>((resolve) => {
//         const messageChannel = new MessageChannel();
//         messageChannel.port1.onmessage = (event) => resolve(event.data);
//         registration.active?.postMessage({ type: 'FETCH_EMOJI_URLS' }, [messageChannel.port2]);
//       });
//     }
//     return [];
//   };

//   useEffect(() => {
//     const handleResize = debounce(() => {
//       if (window.innerWidth >= 2036) {
//         setMinDistance(210);
//         setEmojiSize(70);
//       } else if (window.innerWidth >= 1000) {
//         setMinDistance(100);
//         setEmojiSize(40);
//       } else {
//         setMinDistance(80);
//         setEmojiSize(40);
//       }
//       setRefreshKey((prevKey) => prevKey + 1);
//     }, 200);

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   useEffect(() => {
//     const initializeEmojis = async () => {
//       const emojiUrls = await fetchEmojiUrls();
//       const [areaWidth, areaHeight] = getSamplingArea(window.innerWidth, window.innerHeight, EDGE_MARGIN, emojiSize);
//       setSamplingArea([areaWidth, areaHeight]);

//       const p = new PoissonDiskSampling({
//         shape: [areaWidth, areaHeight],
//         minDistance,
//         maxDistance: minDistance + (window.innerWidth < 1000 ? 10 : 20),
//         tries: 18,
//       });

//       const points = p.fill().slice(0, MAX_EMOJIS);
//       const newEmojis: EmojiProps[] = points.map((point, index) => ({
//         src: emojiUrls[index % emojiUrls.length],
//         left: point[0] + EDGE_MARGIN / 3,
//         top: point[1] + EDGE_MARGIN / 3,
//       }));

//       setEmojis(newEmojis);
//       setActiveEmojis([]); // Reset active emojis when emojis are generated
//       setVisibleEmojiCount(0);
//     };

//     initializeEmojis();
//   }, [emojiSize, minDistance, refreshKey]);

//   useEffect(() => {
//     if (tab === HOLDING_TABS.zimologo) {
//       const startDelay = setTimeout(() => {
//         const addEmojiWithDelay = (index: number) => {
//           if (index < emojis.length) {
//             setVisibleEmojiCount((prevCount) => prevCount + 1);
//             setActiveEmojis((prev) => [...prev, index]); // Add to active emojis
//             setTimeout(() => addEmojiWithDelay(index + 1), 50);
//           }
//         };

//         addEmojiWithDelay(0);

//         const animationInterval = setInterval(() => {
//           if (activeEmojis.length > 0) {
//             const randomIndex = Math.floor(Math.random() * activeEmojis.length);
//             const selectedIndex = activeEmojis[randomIndex]; // Select from active emojis
//             setSelectedEmojiIndex(selectedIndex);
//             setActiveAnimation(selectedIndex);

//             setTimeout(() => {
//               setSelectedEmojiIndex(null);
//             }, ANIMATION_DURATION * 1000);
//           }
//         }, 4000);

//         return () => {
//           clearTimeout(startDelay);
//           clearInterval(animationInterval);
//         };
//       }, 5000); // Delay before starting emoji visibility

//       return () => clearTimeout(startDelay);
//     }
//   }, [tab, emojis, activeEmojis]);

//   return (
//     <div className="pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden">
//       <div
//         style={{
//           position: 'absolute',
//           top: `${EDGE_MARGIN}px`,
//           left: `${EDGE_MARGIN}px`,
//           width: `${samplingArea[0]}px`,
//           height: `${samplingArea[1]}px`,
//           zIndex: 0,
//         }}
//       />
//       {tab === HOLDING_TABS.zimologo &&
//         emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
//           <motion.img
//             key={index}
//             src={emoji.src}
//             alt={`emoji-${index}`}
//             className="absolute z-[-1px]"
//             style={{
//               top: `${emoji.top}px`,
//               left: `${emoji.left}px`,
//               width: `${emojiSize}px`,
//               height: `${emojiSize}px`,
//               transform: 'translate(-50%, -50%)',
//               zIndex: activeAnimation === index ? 18 : 0,
//             }}
//             animate={{
//               scale: selectedEmojiIndex === index ? 6 : 1,
//               rotate: selectedEmojiIndex === index ? 360 : 0,
//             }}
//             transition={{
//               type: 'spring',
//               stiffness: 100,
//               damping: 10,
//             }}
//             onAnimationComplete={() => {
//               if (activeAnimation === index) {
//                 setActiveAnimation(null);
//               }
//             }}
//           />
//         ))}
//     </div>
//   );
// });

// export default RandomEmojis;

