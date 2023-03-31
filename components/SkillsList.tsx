import React from "react";

type Props = {
  skillsArray: [{}];
  setSkillsArray:Function
};

function SkillsList({ skillsArray , setSkillsArray}: Props) {
  return (
    <ul className="w- flex flex-col items-start justify-center gap-4">
      {skillsArray.length > 1  &&
        skillsArray.map((item: any, i: number) => (
          <li key={i}>
            {item.numericSkills} {item.position}
          </li>
        ))}
        {skillsArray.length > 10 && <li> skills max limit is 10  <button onClick={()=>{setSkillsArray([{}])}}>reset ?</button></li>}
    </ul>
  );
}

export default SkillsList;
