"use client"; 

import { useRef, useEffect } from "react";

interface FourKVideoProps {
  src: string; 
  poster?: string; 
  autoPlay?: boolean; 
  loop?: boolean;
  controls?: boolean; 
  className?: string; 
}

const FourKVideo: React.FC<FourKVideoProps> = ({
  src,
  poster,
  autoPlay = false,
  loop = false,
  controls = true,
  className = "",
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);


  useEffect(() => {
    const video = videoRef.current;
    if (video && autoPlay) {
      video.play().catch((error) => {
        console.error("Failed to autoplay video:", error);
      });
    }
  }, [autoPlay]);

  return (
    <div
      className={`absolute overflow-hidden ${className}`}
      style={{ width: "100dvw", height: "100dvh" }} 
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        controls={controls}
        className="w-full h-full object-cover" 
        playsInline
        preload="auto"
      >
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default FourKVideo;
