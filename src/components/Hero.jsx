import React from "react";

const Hero = () => {
  return (
    <div className="w-full m-auto px-4">
      <div className="max-w-360 m-auto w-full">
        <img
          src="src/assets/hero.webp"
          alt="hero"
          className="w-full h-auto object-contain sm:min-h-[400px] lg:min-h-[513px]"
        />
      </div>
    </div>
  );
};

export default Hero;
