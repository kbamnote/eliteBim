import React from "react";
 

const HeroVideo = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://elite-india-s3.s3.ap-south-1.amazonaws.com/heroVideo.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

   

     
    </div>
  );
};

export default HeroVideo;
