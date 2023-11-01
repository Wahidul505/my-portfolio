import React from "react";
import Heading from "../view/Heading";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "SASS",
  "TypeScript",
  "React",
  "Next.js",
  "React Router",
  "Redux",
  "Responsive Web Design",
  "Bootstrap",
  "Tailwind",
  "Node.js",
  "Express.js",
  "Prisma",
  "JWT",
  "MongoDB",
  "PostgreSQL",
  "Firebase (Authentication)",
];

const About = () => {
  return (
    <div className="h-full flex flex-col justify-around">
      <Heading label="About Me" text="text-[#1D3557]" />
      <div className="text-center text-base lg:text-xl text-[#457B9D] md:w-2/3 mx-auto">
        I'm Wahidul Alam, a passionate 𝗙𝘂𝗹𝗹 𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with practical
        experience. My unwavering dedication drives my desire to advance my
        career in the field of development.
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:space-x-16">
        <div className="text-[#457B9D] text-base lg:text-lg hidden md:block">
          <h1 className="text-lg lg:text-2xl font-bold text-[#1D3557] mb-3">
            Know more!
          </h1>
          <div>
            <div className="text-justify mb-2">
              With hands-on experience as a frontend developer, I possess a
              profound understanding of web development intricacies. My skills
              set enables me to contribute effectively to a variety of
              development projects.
            </div>
            <div className="text-justify">
              In addition to my professional experience, I'm proud to serve as a
              Teaching Assistant at my university, specializing in Web
              Programming. This role allows me to share my knowledge and mentor
              aspiring developers in their educational journey. I'm actively
              seeking full-time opportunities to further develop my skills and
              make a lasting impact. Feel free to reach out to me at any time
              via phone at 𝟬𝟭𝟴𝟴𝟳𝟳𝟱𝟳𝟮𝟲𝟭 or email at 𝘄𝗮𝗵𝗶𝗱𝘂𝗹𝟱𝟬𝟱@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺. Let's
              connect and explore how I can contribute to your projects or
              organization.
            </div>
          </div>
        </div>
        <div className="text-[#457B9D] text-xl mt-0 md:mt-8 lg:mt-0">
          <h1 className="lg:text-2xl font-bold text-[#1D3557] mb-3 text-lg">
            My Skills
          </h1>
          <div className="flex flex-wrap">
            {skills?.map((skill, index) => (
              <div
                key={index}
                className="bg-[#457B9D] text-[#F1FAEE] p-1 md:p-3 font-semibold text-sm lg:text-base m-1 "
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
