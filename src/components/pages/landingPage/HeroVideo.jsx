import React from "react";
import bannerVideo from "../../../assets/Upscaler/heroVideo.mp4"; 

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src={bannerVideo}
        autoPlay
        loop
        muted
        playsInline
      />

   

     
    </div>
  );
};

export default HeroVideo;
