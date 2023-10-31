import Image from "next/image";
import React from "react";

const skills = [
  { skill: "", image: "https://i.ibb.co/WftVp0L/html-5.png" },
  { skill: "", image: "https://i.ibb.co/wWP1sQJ/css.png" },
  { skill: "", image: "https://i.ibb.co/PCqBfV3/js.png" },
  { skill: "", image: "https://i.ibb.co/5kLk8Gf/Type-Script-1.png" },
  { skill: "", image: "https://i.ibb.co/C7Hz9dv/React.png" },
  { skill: "", image: "https://i.ibb.co/FH26bnM/9074062-nextjs-icon.png" },
  { skill: "", image: "https://i.ibb.co/TbLxsyP/Redux.png" },
  { skill: "", image: "https://i.ibb.co/qB8mjtg/Tailwind-CSS.png" },
  { skill: "", image: "https://i.ibb.co/WsWYrbd/icons8-jwt-144.png" },
  { skill: "", image: "https://i.ibb.co/yQhg2Dy/Node-js.png" },
  { skill: "", image: "https://i.ibb.co/2jjybvR/Express.png" },
  {
    skill: "",
    image:
      "https://i.ibb.co/b3h1mbV/1012822-code-development-logo-mongodb-programming-icon.png",
  },
  { skill: "", image: "https://i.ibb.co/7NFYJ2s/Postgres-SQL.png" },
  {
    skill: "",
    image: "https://i.ibb.co/D5WW6F8/1175544-firebase-google-icon.png",
  },
];

const Skill = () => {
  return (
    <div>
      <div className="carousel rounded-box border border-gray-400 bg-black bg-opacity-40">
        {skills?.map((skill, index) => (
          <div
            key={index}
            className="carousel-item p-3 lg:p-5 border-x border-gray-400"
          >
            <Image
              src={skill?.image}
              alt=""
              width={150}
              height={200}
              className="lg:w-48 lg:h-40"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skill;
