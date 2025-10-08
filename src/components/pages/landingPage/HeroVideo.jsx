import React from "react";
import video from "../../../assets/AZnCFLir4FBEChxIN6ExUA-AZnCFLirGS4UcxzWJqhJaw.mp4"
 

const HeroVideo = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 6rem)" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={video}
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default HeroVideo;
