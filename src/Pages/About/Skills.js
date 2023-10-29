import React from "react";
import Heading from "../Shared/Heading";
import Progress from "./Progress";

const Skills = () => {
  return (
    <div className="mt-28">
      <Heading>Skills</Heading>
      <div className="flex flex-col gap-3 md:w-2/3 lg:w-1/2 w-11/12 mx-auto">
        <Progress skill="HTML" value="100" />
        <Progress skill="CSS" value="100" />
        <Progress skill="Responsiveness" value="95" />
        <Progress skill="JavaScript" value="90" />
        <Progress skill="Tailwind" value="90" />
        <Progress skill="Bootstrap" value="90" />
        <Progress skill="ES6" value="90" />
        <Progress skill="React" value="90" />
        <Progress skill="Next JS" value="85" />
        <Progress skill="UX" value="80" />
        <Progress skill="Firebase Authentication" value="80" />
        <Progress skill="React Router" value="75" />
        <Progress skill="Node.js" value="75" />
        <Progress skill="Express.js" value="75" />
        <Progress skill="Prisma" value="75" />
        <Progress skill="PostgreSQL" value="70" />
        <Progress skill="MongoDB" value="70" />
        <Progress skill="Mongoose" value="70" />
        <Progress skill="JWT" value="70" />
      </div>
    </div>
  );
};

export default Skills;
