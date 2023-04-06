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
    <div
      className={`h-full w-full relative flex flex-col gap-4 items-center justify-center pt-2 `}
    >
      <div className="w-full  px-4  md:px-32 flex-grow">
        <div
          className={`w-full h-10 grid  gap-2 mt-10 ${
            routine.length >= 1 ? "grid-cols-2" : ""
          }`}
        >
          {routine.length >= 1 && (
            <BtnTelResetRoutine
              title={"Reset"}
              setKey={""}
              setRoutine={setRoutine}
              setPosition={setPosition}
              setSkill={setSkill}
            />
          )}

          <BtnTelClose
            title={"close"}
            setShowRoutine={setShowRoutine}
            showRoutine={showRoutine}
          />
        </div>
      </div>

      <ul className="w-full flex flex-col items-center justify-start gap-2 md:px-32 flex-grow">
        <li className="w-full flex items-center justify-between pr-8 px-4">
          <p>Skill:</p>
          <p className="-translate-x-6">Position:</p>
          <p className="-translate-x-16">Difficulty:</p>
        </li>
        {routine.map((item, i) => (
          <li
            key={crypto.randomUUID()}
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
              <BtnTelModifySkillRoutine
                item={item}
                i={i}
                routine={routine}
                setRoutine={setRoutine}
              />
              <BtnTelDeleteSkillRoutine
                i={i}
                routine={routine}
                setRoutine={setRoutine}
              />
            </div>
          </li>
        ))}
        <li className="w-full flex items-center justify-end">
          <TotalRoutine routine={routine} />
        </li>
      </ul>
      <div className=""></div>
    </div>
  );
}

export default ScreenRoutine;
