import React from "react";

const Navbar = () => {
  return (
    <div className="fixed top-4 left-4 md:top-4 md:left-8 z-10">
      {/* my name  */}
      <a
        href="#home"
        className="text-2xl font-semibold cursor-pointer text-[#457B9D] hidden md:block"
      >
        Wahid.
      </a>
      <a
        href="#home"
        className="text-2xl font-semibold cursor-pointer text-[#457B9D] md:hidden"
      >
        W.
      </a>
    </div>
  );
};

export default Navbar;
