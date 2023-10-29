import React from "react";
import Heading from "../Shared/Heading";
import Skills from "./Skills";

const About = () => {
  return (
    <div className="pb-20">
      <div
        style={{ fontFamily: "'Montserrat', sans-serif" }}
        className="h-screen flex flex-col items-center justify-center px-4 md:px-8"
      >
        <h1
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          data-aos-delay="300"
          className="text-5xl md:text-7xl"
        >
          I am Wahid,
        </h1>
        <p
          data-aos="fade-up"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="1000"
          data-aos-delay="700"
          className="text-3xl md:text-5xl mt-2"
        >
          A Full Stack Developer
        </p>
      </div>
      <div className="lg:px-48 md:px-28 px-4">
        <Heading>About</Heading>
        <div>
          <p className="text-2xl mb-3">
            I'm Wahid, a passionate 𝗙𝘂𝗹𝗹 𝗦𝘁𝗮𝗰𝗸 𝗗𝗲𝘃𝗲𝗹𝗼𝗽𝗲𝗿 with practical
            experience. I am holding a B.Sc. in Computer and Communication
            Engineering from International Islamic University Chittagong. My
            unwavering dedication drives my desire to advance my career in the
            field of development.
          </p>
          <p className="text-lg">
            With hands-on experience as a frontend developer for 6 months, I
            possess a profound understanding of web development intricacies. My
            skill set encompasses a wide range of web development technologies,
            including HTML, CSS, JavaScript, TypeScript, Next.js, React.js,
            Redux, Node.js, Express.js, MongoDB, Mongoose, PostgreSQL, and
            Prisma. This versatile skill set enables me to contribute
            effectively to a variety of development projects.
          </p>
          <p className="text-lg mt-3">
            In addition to my professional experience, I'm proud to serve as a
            Teaching Assistant at my university, specializing in Web
            Programming. This role allows me to share my knowledge and mentor
            aspiring developers in their educational journey. I'm actively
            seeking full-time opportunities to further develop my skills and
            make a lasting impact. Feel free to reach out to me at any time via
            phone at 𝟬𝟭𝟴𝟴𝟳𝟳𝟱𝟳𝟮𝟲𝟭 or email at 𝘄𝗮𝗵𝗶𝗱𝘂𝗹𝟱𝟬𝟱@𝗴𝗺𝗮𝗶𝗹.𝗰𝗼𝗺. Let's connect
            and explore how I can contribute to your projects or organization.
          </p>
        </div>
        <div>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
