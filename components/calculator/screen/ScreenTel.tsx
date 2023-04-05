import React from "react";
import ActualSkill from "./utils/ActualSkill";
import TotalRoutine from "./utils/TotalRoutine";

type Props = {
  routine: any[];
  skill: string;
  position: string;
};

function ScreenTel({ routine, skill, position }: Props) {
  return (
    <div className={`h-full w-full flex flex-col rounded-lg p-4 text-xl capitalize gap-4`}>
      <ActualSkill position={position} skill={skill} />
      <div className="w-full flex items-center justify-center flex-grow">
        <TotalRoutine routine={routine} />{" "}
      </div>
    </div>
  );
}

export default ScreenTel;
