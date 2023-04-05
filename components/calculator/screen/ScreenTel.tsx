import React from "react";
import ActualSkill from "./utils/ActualSkill";
import TotalRoutine from "./utils/TotalRoutine";

type Props = {
  routine: any[];
  setRoutine: Function;
  skill: string;
  setSkill: Function;
  position: string;
  setPosition: Function;
};

function ScreenTel({
  routine,
  setRoutine,
  skill,
  setSkill,
  position,
  setPosition,
}: Props) {
  return (
    <div className="w-full  rounded-lg p-4 flex flex-col items-center text-xl capitalize gap-4 sm:h-full">
        <ActualSkill position= {position} skill = {skill}/>
        <TotalRoutine routine={routine} /> 
    </div>
  );
}

export default ScreenTel;
