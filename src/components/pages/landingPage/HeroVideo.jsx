import React from "react";
import bimVideo from '../../../assets/bimVideo.mp4'

const HeroVideo = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 6rem)" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={bimVideo}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default HeroVideo;
