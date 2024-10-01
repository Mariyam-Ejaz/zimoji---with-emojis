import { useEffect, useState, useRef, memo } from 'react';
import { extractEmojiUrls } from '@/utils/emoji-extractor';
import { RootState } from '@/store';
import { useSelector } from 'react-redux';
import { HOLDING_TABS } from '../preloader/lib';
import PoissonDiskSampling from 'poisson-disk-sampling';
import { getSamplingArea } from '@/utils/emoji-utils';
import { debounce } from '@/lib/helpers';
import { motion } from 'framer-motion';

// Constants
const EDGE_MARGIN = 6;
const MAX_EMOJIS = 500;
const APPEAR_DELAY = 50; 
const ANIMATION_DURATION = 3;

interface EmojiProps {
  src: string;
  top: number;
  left: number;
}

const EmojiDiagonal = memo(() => {
  const [emojis, setEmojis] = useState<EmojiProps[]>([]);
  const [preloaded, setPreloaded] = useState(false);
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
  const [hasMoved, setHasMoved] = useState(false); // Track movement state

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
        setPreloaded(true);
      } catch (error) {
        console.error("Failed to preload some emojis", error);
      }
    };

    const emojiUrls = extractEmojiUrls();
    preloadEmojis(emojiUrls);
  }, []); // Runs only once when the component mounts

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
    if (!preloaded) return;

    const emojiUrls = extractEmojiUrls();
    const [areaWidth, areaHeight] = getSamplingArea(window.innerWidth * 3, window.innerHeight * 3, EDGE_MARGIN, emojiSize);
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
      left: point[0] - EDGE_MARGIN / 3,
      top: point[1] - EDGE_MARGIN / 3,
    }));

    setEmojis(newEmojis);
    setVisibleEmojiCount(0);
  }, [emojiSize, minDistance, refreshKey, preloaded]);

  // Handle emoji appearance based on tab state
  useEffect(() => {
    if (tab >= HOLDING_TABS.zimojilogo) {
      const startDelay = setTimeout(() => {
        const addEmojiWithDelay = (index: number) => {
          if (index < emojis.length) {
            setVisibleEmojiCount((prevCount) => prevCount + 1);
            setTimeout(() => addEmojiWithDelay(index + 1), APPEAR_DELAY);
          } else {
            setAnimateContainer(true);
            setHasMoved(true); // Start moving emojis
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
  const renderEmojiContainers = () => (
    <div
      className="emoji-container pointer-events-none absolute"
      style={{
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: `${samplingArea[0]}px`,
        height: `${samplingArea[1]}px`,
        position: 'absolute',
      }}
    >
      {emojis.slice(0, visibleEmojiCount).map((emoji, index) => (
        <motion.img
          key={index}
          src={emoji.src}
          alt={`emoji-${index}`}
          className={`absolute z-[-1] ${selectedEmojiIndex === index ? 'active' : ''} ${hasMoved ? 'moving' : ''}`}
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
    </div>
  );

  return <>{renderEmojiContainers()}</>;
});

export default memo(EmojiDiagonal);
