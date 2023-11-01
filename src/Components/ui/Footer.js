import React from "react";
import toast from "react-hot-toast";

const Footer = () => {
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Copied to Clipboard", { id: "copiedSuccess2" });
  };
  return (
    <div className="text-[#F1FAEE] flex flex-col justify-center h-full">
      <div className="md:grid md:grid-cols-2 mb-10 md:mb-20">
        <div>
          <h1 className="text-[#457B9D] text:xl md:text-2xl uppercase font-semibold mb-2 md:mb-4">
            Say Hello
          </h1>
          <div className="md:text-xl">
            <button
              className="block mb-2 md:mb-4"
              onClick={() => handleCopyText("wahidul505@gmail.com")}
            >
              wahidul505@gmail.com
            </button>
            <button
              className="block"
              onClick={() => handleCopyText("+880-1887757261")}
            >
              +880-1887757261
            </button>
          </div>
        </div>
        <div>
          <h1 className="text-[#457B9D] text:xl md:text-2xl uppercase font-semibold mb-2 md:mb-4 mt-6 md:mt-0">
            My Profiles
          </h1>
          <div className="md:text-xl">
            <a
              href="https://www.linkedin.com/in/the-wahidul-alam/"
              rel="noreferrer"
              target="_blank"
              className="block mb-2 md:mb-4"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/wahidul505"
              rel="noreferrer"
              target="_blank"
              className="block mb-2 md:mb-4"
            >
              Github
            </a>
            <a
              href="https://drive.google.com/file/d/1KysTlgcYmZFAh_1YggjO25RZYKTZFiFP/view"
              rel="noreferrer"
              target="_blank"
              className="block mb-2 md:mb-4"
            >
              My Resume
            </a>
          </div>
        </div>
      </div>
      <hr className="mb-6 md:mb-14" />
      <div className="md:text-xl">© Wahidul Alam 2023</div>
    </div>
  );
};

export default Footer;
