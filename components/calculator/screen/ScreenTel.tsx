import React from "react";
import ActualSkill from "./utils/ActualSkill";
import TotalRoutine from "./utils/TotalRoutine";

type Props = {
  routine: any[];
  skill: string;
  position: string;

};

function ScreenTel({
  routine,
  skill,
  position,
}: Props) {
  return (
    <div className="w-full rounded-lg p-4 grid grid-rows-2 text-xl capitalize gap-4">
        <ActualSkill position= {position} skill = {skill}/>
        <TotalRoutine routine={routine} /> 
    </div>
  );
}

export default ScreenTel;
