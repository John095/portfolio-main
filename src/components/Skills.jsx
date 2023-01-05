import React from "react";

// import skill data
import { skills } from "../data";

const Skills = () => {
  return (
    <section className="bg-tertiary py-12">
      <div className="container mx-auto">
        <div className="flex align-center justify-center flex-wrap">
          {skills.map((skill, index) => {
            return (
              <div className="flex items-center justify-center" key={index}>
                <img className="w-20 mx-8 my-6" src={skill.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
