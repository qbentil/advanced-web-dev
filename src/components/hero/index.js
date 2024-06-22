import Button from "../core/button";
import React from "react";

const Hero = () => {
  return (
    <div className="w-screen min-h-[50vh] overflow-x-hidden flex justify-center items-center bg-shade">
      <div className="w-full md:w-[80vw] h-full flex-col md:flex-row flex items-center justify-center py-5">
        <div className="flex flex-col w-full md:w-1/2 gap-y-2 px-5">
          <p>Hey, I am Bentil</p>
          <p className="text-4xl">
            I am a <span className="text-primary">Fullstack Developer</span> and
            a Community Builder
          </p>
          <p>
            lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>

          <Button text="Contact Me" variant="secondary" className="w-48" />
        </div>
        <div>
          <img src="/assets/showcase.png" alt="logo" className="w-96" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
