import React from "react";

const HeroVideo = () => {
  return (
    <div className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 6rem)" }}>
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/AZnCFLir4FBEChxIN6ExUA-AZnCFLirGS4UcxzWJqhJaw.mp4"
        autoPlay
        loop
        muted
        playsInline
      />
    </div>
  );
};

export default HeroVideo;
