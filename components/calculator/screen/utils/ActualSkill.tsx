import React from "react";
import { calc } from "@/utils/function/calc";

type Props = { skill: string; position: string };

function ActualSkill({ skill, position }: Props) {
  return (
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
    </div>
  );
}

export default ActualSkill;
