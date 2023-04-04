import React from "react";
import { calcTotalDifficulty } from "@/utils/function/totalCalc";
import { calc } from "@/utils/function/calc";
import BtnTelResetRoutine from "../btn/BtnTelResetRoutine";

type Props = {
  routine: [{}];
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
    <div className="w-full h-2/3 rounded-lg p-4 flex flex-col items-center text-xl capitalize gap-4 sm:h-full">
      <div className="w-full flex-grow grid grid-cols-2 gap-4">
        <div className="w-full flex justify-start items-center gap-2 ">
          <>
            <div className=" h-full w-full flex flex-col items-center justify-start -translate-y-4">
              <div className="w-full">
                <p className="border-b-2 border-blue-500 py-4">
                  numeric value: <br /> {skill ? skill : "00"}
                </p>
                <p className="border-b-2 border-blue-500 py-4">
                  position: <br /> {position ? position : "straight"}
                </p>
              </div>
              <div className="w-full text-start">
                <p className="border-b-2 border-blue-500 py-4">
                  difficulty: <br /> {calc(Number(skill), position)}
                </p>
              </div>
              <div className="w-full h-full grid grid-cols-2 place-items-end gap-16 px-4 p-4 ">
            <span className="">total: </span>{" "}
            <span className="text-4xl">
              {calcTotalDifficulty(routine).toFixed(1)}
            </span>{" "}
          </div>
            </div>
          </>
        </div>
        <div className="w-full h-full flex flex-col gap-1 overflow-y-auto">
          <BtnTelResetRoutine title={"reset routine"} setKey={'Space'} setRoutine={setRoutine} setPosition={setPosition} setSkill={setSkill} />
          <div className="w-full grid grid-cols-3 place-items-start text-sm place-self-start lg:text-3xl">
            {" "}
            <span className="">skill:</span>
            <span className="">position:</span>
            <span className="place-self-end pr-2">diff:</span>{" "}
          </div>
          <ul className="w-full h-full place-items-center place-self-start ">
            {routine.map((item: any, i) => (
              <li
                key={i}
                className="w-full grid grid-cols-3 place-items-center text-sm mb-2 lg:text-3xl"
              >
                {" "}
                <span className=" place-self-start">{item.skill}</span>
                <span className=" place-self-start">{item.position}</span>
                <span className=" place-self-end pr-2">
                  {item.difficulty}
                </span>{" "}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ScreenTel;
