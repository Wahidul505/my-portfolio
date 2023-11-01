import React from "react";

const Navbar = () => {
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="fixed top-4 left-4 md:top-4 md:left-8 z-10">
      <button
        onClick={handleScrollToTop}
        className="text-2xl font-semibold cursor-pointer text-[#457B9D] hidden md:block"
      >
        Wahid.
      </button>
      <button
        onClick={handleScrollToTop}
        className="text-2xl font-semibold cursor-pointer text-[#457B9D] md:hidden"
      >
        W.
      </button>
    </div>
  );
};

export default Navbar;
