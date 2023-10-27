import React, { useContext, useEffect } from "react";
import { WorkContext } from "../../App";
import Heading from "../Shared/Heading";
import WorkCard from "./WorkCard";

const Works = () => {
  // const [works, setWorks] = useState([]);
  const { works, setWorks } = useContext(WorkContext);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setWorks(data));
  }, [works, setWorks]);
  return (
    <div className="py-28 px-4 md:px-20">
      <Heading>My Projects</Heading>
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {works.map((work) => (
          <WorkCard key={work.id} work={work} />
        ))}
      </div>
    </div>
  );
};

export default Works;
