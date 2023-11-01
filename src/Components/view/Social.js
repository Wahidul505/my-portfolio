import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";

const Social = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 text-5xl md:px-3 lg:text-7xl text-white">
      <a
        href="https://drive.google.com/file/d/1KysTlgcYmZFAh_1YggjO25RZYKTZFiFP/view"
        rel="noreferrer"
        target="_blank"
        className="group md:h-screen flex items-center justify-center bg-[#457b9d] w-full py-4 px-2 overflow-hidden"
      >
        <button className="group-hover:scale-125 transition-transform duration-500 ease-in-out">
          <BsFileEarmarkText />
        </button>
      </a>
      <a
        href="https://www.linkedin.com/in/the-wahidul-alam/"
        rel="noreferrer"
        target="_blank"
        className="group md:h-screen flex items-center justify-center bg-[#457b9d] w-full py-4 px-2 overflow-hidden"
      >
        <button className="group-hover:scale-125 transition-transform duration-500 ease-in-out">
          <BsLinkedin />
        </button>
      </a>
      <a
        href="https://github.com/Wahidul505"
        rel="noreferrer"
        target="_blank"
        className="group md:h-screen flex items-center justify-center bg-[#457b9d] w-full py-4 px-2 overflow-hidden"
      >
        <button className="group-hover:scale-125 transition-transform duration-500 ease-in-out">
          <BsGithub />
        </button>
      </a>
    </div>
  );
};

export default Social;
