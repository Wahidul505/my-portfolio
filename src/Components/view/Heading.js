import React from "react";

const Heading = ({ label, text }) => {
  return (
    <div className="text-center font-semibold mb-4 lg:mb-8">
      <h1
        style={{ fontFamily: "'Fira Sans', sans-serif" }}
        className={`text-2xl lg:text-4xl uppercase ${text}`}
      >
        {label}
      </h1>
    </div>
  );
};

export default Heading;
