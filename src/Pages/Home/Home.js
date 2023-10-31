import React from "react";
import { Link } from "react-router-dom";
import Works from "../Works/Works";
import "./Home.css";
import Social from "./Social";

const Home = () => {
  return (
    <div className="bg-base-200">
      <div className="text-white h-screen grid grid-cols-1 md:grid-cols-5 lg:grid-cols-2 gap-4 md:px-6 lg:px-12 py-32 md:py-0 sticky top-0">
        <div className="flex flex-col justify-center">
          <h1 className="text-7xl">Full Stack Developer.</h1>
          <div className="mt-6 text-xl">
            I'm Wahid. A passionate Developer with practical experience. My
            unwavering dedication drives my desire to advance my career in the
            field of development.
          </div>
        </div>
        <div className="md:col-span-2 lg:col-span-1">
          <Social />
        </div>
      </div>
      <div className="relative bg-base-200 z-10">
        <Works />
      </div>
    </div>
  );
};

export default Home;
