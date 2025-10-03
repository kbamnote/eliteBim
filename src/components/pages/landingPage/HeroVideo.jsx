import React from "react";
 

const HeroVideo = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 6rem)" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
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
