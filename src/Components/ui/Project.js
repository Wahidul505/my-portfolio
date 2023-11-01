import React from "react";
import Heading from "../view/Heading";
import { GoLinkExternal } from "react-icons/go";

const projects = [
  {
    title: "Glamour Reserve",
    image: "https://i.ibb.co/9cMQTWz/Screen-Shot-2023-11-01-at-12-46-21-AM.png",
    url: "https://glamour-reserve.vercel.app/",
  },
  {
    title: "Rent a Property",
    image: "https://i.ibb.co/7WBR1Pq/Screen-Shot-2023-11-01-at-12-48-18-AM.png",
    url: "https://rent-a-property.netlify.app/",
  },
  {
    title: "Book Store",
    image: "https://i.ibb.co/mB7FsFs/Screen-Shot-2023-11-01-at-12-49-35-AM.png",
    url: "https://my-new-book-store.netlify.app/",
  },
  {
    title: "Craft Owl",
    image: "https://i.ibb.co/dLh0cs3/Screen-Shot-2023-11-01-at-12-49-20-AM.png",
    url: "",
  },
];

const Project = () => {
  return (
    <div className="h-full flex flex-col justify-around">
      <Heading label="My Projects" text="text-[#457B9D]" />
      {/* <div className="flex items-center justify-center h-full md:block "> */}
      <div className="flex flex-col md:grid md:grid-cols-2 items-center">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="h-32 w-64 md:h-64 md:w-full overflow-hidden relative mb-0 md:mb-0"
          >
            <img src={project?.image} alt="" className="w-full h-full" />
            <div className="h-full w-full absolute top-0 left-0 right-0 bg-[#1D3557] bg-opacity-70 flex flex-col justify-center items-center">
              <a
                href={project?.url}
                target="_blank"
                rel="noreferrer"
                className="lg:text-2xl font-bold text-[#F1FAEE] underline flex items-center"
              >
                {project?.title}
                <GoLinkExternal className="ml-2" />
              </a>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default Project;
