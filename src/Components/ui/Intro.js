import React from "react";
import Social from "../view/Social";

const Intro = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-32 md:py-0 ">
      <div className="flex flex-col justify-center">
        <h1 className="text-5xl lg:text-7xl text-[#457b9d]">
          Full Stack Developer.
        </h1>
        <div className="mt-3 lg:mt-6 text-base lg:text-xl text-[#F1FAEE]">
          I'm Wahid. A passionate Developer with practical experience. My
          unwavering dedication drives my desire to advance my career in the
          field of development.
        </div>
      </div>
      <div className="">
        <Social />
      </div>
    </div>
  );
};

export default Intro;
