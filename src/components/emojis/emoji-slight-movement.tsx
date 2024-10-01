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

const EmojiSlightMovement = memo(() => {
  const [emojis, setEmojis] = useState<EmojiProps[]>([]);
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
  useEffect(() => {
    const preloadEmojis = async (emojiUrls: string[]) => {
      const promises = emojiUrls.map((src) => {
        return new Promise<void>((resolve, reject) => {
          const img = new Image();
          img.src = src;
          img.onload = () => resolve();
          img.onerror = () => reject();
        });
      });

      try {
        await Promise.all(promises);
        setPreloaded(true); // All images are preloaded
      } catch (error) {
        console.error("Failed to preload some emojis", error);
      }
    };

    const emojiUrls = extractEmojiUrls();
    preloadEmojis(emojiUrls);
  }, []);

  // Update the sampling area on resize
  useEffect(() => {
    const handleResize = debounce(() => {
      if (window.innerWidth >= 2036) {
        setMinDistance(280);
        setEmojiSize(95);
      } else if (window.innerWidth >= 1000) {
        setMinDistance(150);
        setEmojiSize(50);
      } else {
        setMinDistance(80);
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
    if (!preloaded) return; // Don't proceed until preloading is done

    const emojiUrls = extractEmojiUrls();
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
      src: emojiUrls[index % emojiUrls.length],
      left: point[0] + EDGE_MARGIN / 3,
      top: point[1] + EDGE_MARGIN / 3,
    }));

    setEmojis(newEmojis);
    setVisibleEmojiCount(0);
  }, [emojiSize, minDistance, refreshKey, preloaded]);

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
        }, 5000);

        return () => {
          clearTimeout(startDelay);
          clearInterval(animationInterval);
        };
      }, 5000);

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
      <div
        key={idx}
        className="emoji-container pointer-events-none absolute top-0 left-0 w-full h-full overflow-hidden"
        style={{ transform: `translate(${offset.x}, ${offset.y})` }}
      >
        {emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
          <img
            key={index}
            src={emoji.src}
            alt={`emoji-${index}`}
            className={`emoji absolute ${selectedEmojiIndex === index ? 'active' : ''}`}
            style={{
              top: `${emoji.top}px`,
              left: `${emoji.left}px`,
              width: `${emojiSize}px`,
              height: 'auto',
              zIndex: activeAnimation === index ? 18 : 0,
            }}
          />
        ))}
      </div>
    ));
    
    
  };

  return (
    <>
      {renderEmojiContainers()}
    </>
  );
});

export default memo(EmojiSlightMovement );


