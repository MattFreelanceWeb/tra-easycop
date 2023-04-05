import React from "react";
import BtnTelClose from "./utils/BtnTelClose";
import TotalRoutine from "./utils/TotalRoutine";
import BtnTelModifySkillRoutine from "./utils/BtnTelModifySkillRoutine";
import BtnTelDeleteSkillRoutine from "./utils/BtnTelDeleteSkillRoutine";
import BtnTelResetRoutine from "../keyboard/utils/BtnTelResetRoutine";

type Props = {
  showRoutine: boolean;
  setShowRoutine: Function;
  routine: any[];
  setRoutine: Function;
  setPosition: Function;
  setSkill: Function;
};

function ScreenRoutine({
  setShowRoutine,
  showRoutine,
  routine,
  setRoutine,
  setPosition,
  setSkill,
}: Props) {
  return (
    <div className={`h-full w-full relative grid grid-rows-6 place-items-center`}>
      <BtnTelClose
        title={"close"}
        setShowRoutine={setShowRoutine}
        showRoutine={showRoutine}
      />
      <ul className="w-full flex flex-col items-center justify-center gap-2  row-span-5 md:px-32">
        <li className="w-full flex items-center justify-between pr-8 px-4">
          <p>Skill:</p>
          <p className="-translate-x-6">Position:</p>
          <p className="-translate-x-16">Difficulty:</p>
        </li>
        {routine.map((item, i) => (
          <li
            key={i}
            className={`flex w-full items-center justify-between px-4 gap-2 `}
          >
            <div
              className={` w-full flex items-center justify-between rounded-md p-2 ${
                item.difficulty === 0 &&
                "bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white"
              }`}
            >
              <p>{item.skill}</p>
              <p>{item.position}</p>
              <p>{item.difficulty}</p>
            </div>
            <div className="flex items-center justify-center gap-2">
              <BtnTelModifySkillRoutine />
              <BtnTelDeleteSkillRoutine />
            </div>
          </li>
        ))}
        <li>
          <TotalRoutine routine={routine} />
        </li>
      </ul>
      <div className="w-full px-4 h-10 md:px-32 row-span-1">
        <BtnTelResetRoutine
          title={"Reset"}
          setKey={""}
          setRoutine={setRoutine}
          setPosition={setPosition}
          setSkill={setSkill}
        />
      </div>
    </div>
  );
}

export default ScreenRoutine;
