import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { BsFileEarmarkText } from "react-icons/bs";

const Social = () => {
  return (
    <div className="grid grid-cols-3 md:grid-cols-3 gap-4 text-5xl px-3 lg:text-7xl">
      <div className="md:h-screen flex items-center justify-center bg-neutral w-full py-4 px-2 overflow-hidden">
        <button className="hover:scale-125 transition-transform duration-300">
          <a
            target="_blank"
            href="https://drive.google.com/file/d/1KysTlgcYmZFAh_1YggjO25RZYKTZFiFP/view"
            rel="noreferrer"
          >
            <BsFileEarmarkText />
          </a>
        </button>
      </div>
      <div className="md:h-screen flex items-center justify-center bg-neutral w-full py-4 px-2 overflow-hidden">
        <button className="hover:scale-125 transition-transform duration-300">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/the-wahidul-alam/"
          >
            <BsLinkedin />
          </a>
        </button>
      </div>
      <div className="md:h-screen flex items-center justify-center bg-neutral w-full py-4 px-2 overflow-hidden">
        <button className="hover:scale-125 transition-transform duration-300">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/Wahidul505"
          >
            <BsGithub />
          </a>
        </button>
      </div>
    </div>
  );
};

export default Social;
