import React from "react";

// the objective is to set up a fast setting for a judge to rapidly take the actual skill and add it to a routine. if the skill in the routine is repeat, the difficulty must be 0 and showing into red. to calc the difficulty you have acces to the Function calc , totlaCalc in the lib and to find dupplicate object in an array, you have the Function isDupplicateObject in the lib.

// this composent will be used principaly on desktop because mobile is doesn't fit well with the feature(one touch for one skill).

type Props = {
  skill: string;
  setSkill: Function;
  position: string;
  setPosition: Function;
  routine: any[];
  setRoutine: Function;
  showRoutine: boolean;
  setShowRoutine: Function;
};

function FastSetting({
  skill,
  setSkill,
  position,
  setPosition,
  routine,
  setRoutine,
  showRoutine,
  setShowRoutine,
}: Props) {
  return (
    <div className="h-full w-full  grid grids-row-6 grid-cols-3 gap-2 p-4 ">
    </div>
  );
}

export default FastSetting;
