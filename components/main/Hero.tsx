import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div
      className="flex text-4xl flex-col items-center justify-center h-full w-full"
      id="about-me"
    >
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute   object-cover sm:hidden md:top-[-340px] md:block lg:top-[-340px] lg:block"
      >
        <source src="/blackhole.webm" type="video/webm" />
      </video>
      <HeroContent />
    </div>
  );
};

export default Hero;
