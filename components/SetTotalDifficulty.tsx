import React from "react";

type Props = { skillsArray: any[] };

function SetTotalDifficulty({ skillsArray }: Props) {
  const calcTotalDifficulty = (skillsArray: any[]) => {
    let total: number = 0;
    for (let i = 0; i < skillsArray.length; i++) {
      console.log(skillsArray[i].difficulty);
      if (skillsArray[i].difficulty) {
        total = total + skillsArray[i].difficulty;
      }
    }

    return total;
  };

  return <div>{skillsArray && calcTotalDifficulty(skillsArray)}</div>;
}

export default SetTotalDifficulty;
