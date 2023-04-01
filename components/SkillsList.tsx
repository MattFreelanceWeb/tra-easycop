import React from "react";
import SetTotalDifficulty from "./SetTotalDifficulty";


type Props = {
  skillsArray: [{}];
  setSkillsArray: Function;
};

function SkillsList({ skillsArray, setSkillsArray }: Props) {
 

  return (
    <ul className=" flex flex-col items-start justify-center gap-4 ">
      {skillsArray.length > 1 &&
        skillsArray.map((item: any, i: number) => (
          <li key={i} className="flex items-center justify-center gap-4">
            <span>{item.numericSkills}</span> <span>{item.position}</span> <span>{item.difficulty}</span>
            {/* <DifficultyCalculator numericValue={item.numericSkills} position={item.position} difficultyArray={difficultyArray}/> */}
          </li>
        ))}
        <li>total : <SetTotalDifficulty skillsArray={skillsArray}/></li>
    </ul>
  );
}

export default SkillsList;
