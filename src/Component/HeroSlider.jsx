import React from "react";

const HeroSlider = () => {
  return (
    <div className="relative w-full mt-20 md:mt-45 h-190 overflow-hidden bg-black border-b border-cyan-50">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/Video/Nataraja.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-start px-8 z-20">
        <div className="text-left max-w-xl">
          <h1 className="text-white text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
            Contemporary Crafted Dance Classes in Lucknow
          </h1>
          <p className="text-white text-lg md:text-2xl drop-shadow-md">
            "Great dancers are not great because of their technique, they are
            great because of their passion."
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;