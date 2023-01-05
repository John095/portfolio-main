import React from "react";
import ParticlesBackground from "./ParticlesBackground";

const Hero = () => {
  return (
    <div
      id="home"
      className="lg:h-[100vh] flex items-center bg-primary lg:bg-cover lg:bg-center lg:bg-no-repeat py-32 lg:py-0 overflow-hidden relative"
    >
      <div className="container mx-auto h-full z-10">
        <div className="flex items-center justify-center h-full pt-8">
          <div className="flex-1 flex flex-col items-center lg:items-center">
            <p className="text-2xl text-red-700 font-medium text-md mb-[22px]">
              Hey, I'm John! 👋
            </p>
            <h1 className="text-4xl text-center leading-[44px] md:text-5xl md:leading-tight lg:text-7xl lg:leading-[1.2] font-bold md:tracking-[-2px]">
              I Design & Build <br /> Web Applications.
            </h1>
            <p className="pt-4 pb-8 text-center md:pt-6 md:pb-12 max-w-[480px] text-lg lg:text-center">
              I am very passionate with developing UI's that relate to the
              client and offer seamless simplicity to customers.
            </p>
            <button className="btn btn-md bg-accent hover:bg-secondary-hover md:btn-lg transition-all rounded-md">
              Work with me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
