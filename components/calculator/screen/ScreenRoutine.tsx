import React from "react";
import BtnTelClose from "./utils/BtnTelClose";
import TotalRoutine from "./utils/TotalRoutine";
import BtnTelModifySkillRoutine from "./utils/BtnTelModifySkillRoutine";
import BtnTelDeleteSkillRoutine from "./utils/BtnTelDeleteSkillRoutine";

type Props = { showRoutine: boolean; setShowRoutine: Function; routine: any[] };

function ScreenRoutine({ setShowRoutine, showRoutine, routine }: Props) {
  return (
    <div className={`h-full w-full relative grid place-items-center`}>
      <BtnTelClose
        title={"close"}
        setShowRoutine={setShowRoutine}
        showRoutine={showRoutine}
      />
      <ul className="w-full flex flex-col items-center justify-center gap-2">
        <li></li>
        {routine.map((item, i) => (
          <li
            key={i}
            className={`flex w-full items-center justify-between px-4 gap-2 `}
          >
            <div className={` w-full flex items-center justify-between rounded-md p-2 ${
              item.difficulty === 0 &&
              "bg-gradient-to-r from-rose-500 via-red-400 to-red-500 text-white"
            }`}>
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
    </div>
  );
}

export default ScreenRoutine;
