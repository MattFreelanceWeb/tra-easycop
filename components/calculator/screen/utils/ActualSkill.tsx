import React from "react";
import { calc } from "@/utils/function/calc";

type Props = { skill: string; position: string };

function ActualSkill({ skill, position }: Props) {
  return (
    <div className=" w-full grid grid-row-3 place-items-center ">
      <div className="w-full">
        <p className="border-b-2 border-blue-500 py-4">
          numeric value: <br /> {skill ? skill : "00"}
        </p>
        <p className="border-b-2 border-blue-500 py-4">
          position: <br /> {position ? position : "straight"}
        </p>
        <p className="border-b-2 border-blue-500 py-4">
          difficulty: <br /> {calc(Number(skill), position)}
        </p>
      </div>
    </div>
  );
}

export default ActualSkill;
