import React from "react";

const HeroVideo = () => {
  return (
    <div
      className="relative w-full overflow-hidden flex items-center justify-center"
      style={{ height: "calc(100vh - 6rem)", minHeight: "400px" }}
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
      <div className="relative z-10 text-center px-4 sm:px-6 md:px-8 max-w-3xl mobile-hero">
        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold drop-shadow-lg leading-tight mobile-heading">
          Welcome to <span className="text-blue-500">Elite BIM</span>
        </h1>
        <p className="mt-2 sm:mt-3 text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium drop-shadow mobile-subheading">
          Shaping the future of Building Information Modeling
        </p>
      </div>
    </div>
  );
};

export default HeroVideo;
