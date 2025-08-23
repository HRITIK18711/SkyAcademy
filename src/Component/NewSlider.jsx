// NewSlider.jsx
import React, { useState, useEffect, useRef } from "react";

const videos = [
  { src: "/Video/v1.mp4" },
  { src: "/Video/v2.mp4" },
  { src: "/Video/v3.mp4" },
];

export default function NewSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef(null);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % videos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + videos.length) % videos.length);
  };

  // Restart video when slide changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {});
    }
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Video */}
      <video
        ref={videoRef}
        className="w-full h-full object-center"
        autoPlay
        muted
        loop={false}
        playsInline
      >
        <source src={videos[currentIndex].src} type="video/mp4" />
      </video>

      {/* Navigation buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black rounded-full p-2 sm:p-3 text-xs sm:text-base"
      >
        ⬅
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/80 text-black rounded-full p-2 sm:p-3 text-xs sm:text-base"
      >
        ➡
      </button>

      {/* Dots */}
      <div className="absolute bottom-2 sm:bottom-4 w-full flex justify-center gap-1 sm:gap-2">
        {videos.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full cursor-pointer ${
              index === currentIndex ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}