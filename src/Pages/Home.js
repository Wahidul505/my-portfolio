import React from "react";
import About from "../Components/ui/About";
import Intro from "../Components/ui/Intro";
import Project from "../Components/ui/Project";
import Footer from "../Components/ui/Footer";
import Mailer from "../Components/ui/Mailer";

const Home = () => {
  return (
    <div>
      <div className="bg-[#1d3557] h-screen sticky top-0 w-screen">
        <div className="max-w-7xl px-4 md:px-6 lg:px-12  mx-auto h-full">
          <Intro />
        </div>
      </div>
      <div className="bg-[#f1faee] h-screen sticky top-0 w-screen">
        <div className="max-w-7xl px-4 md:px-6 lg:px-12 py-8 mx-auto h-full ">
          <About />
        </div>
      </div>
      <div className="bg-[#1d3557] h-screen sticky top-0 w-screen">
        <div className="max-w-7xl px-4 md:px-6 lg:px-12 py-8 mx-auto h-full">
          <Project />
        </div>
      </div>
      <div className="bg-[#f1faee] h-screen sticky top-0 w-screen">
        <div className="max-w-7xl px-4 md:px-6 lg:px-12 py-8 mx-auto h-full">
          <Mailer />
        </div>
      </div>
      <div className="bg-[#1d3557] h-screen sticky top-0 w-screen">
        <div className="max-w-7xl px-4 md:px-6 lg:px-12 py-8 mx-auto h-full">
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
