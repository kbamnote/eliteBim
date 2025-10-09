import React from "react";

const HeroVideo = () => {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "calc(100vh - 6rem)" }}
    >
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover opacity-70"
        src="https://elite-india-s3.s3.ap-south-1.amazonaws.com/bimVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Gradient Overlay for Better Contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>

      {/* Text Overlay */}
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl">
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold drop-shadow-lg leading-snug">
          Welcome to <span className="text-blue-500">Elite BIM</span>
        </h1>
        <p className="mt-3 sm:mt-4 text-white text-base sm:text-lg md:text-xl lg:text-2xl font-medium drop-shadow">
          Shaping the future of Building Information Modeling
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
