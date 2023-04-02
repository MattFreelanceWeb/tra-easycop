import React, { useState } from "react";
import { calc } from "@/utils/function/lib";
import BtnPosition from "./btn/BtnPosition";
import BtnTel from "./btn/BtnTel";
import BtnTelReset from "./btn/BtnTelReset";
import BtnTelValidate from "./btn/BtnTelValidate";

type Props = {};

function TelCalculator({}: Props) {
  const [numericValue, setNumericValue] = useState<string>("0");
  const [position, setPosition] = useState<string>("");
  const [skill, setSkill] = useState<string>("");

  return (
    <div className="flex flex-col gap-2">
      <div className="grid grid-cols-3 gap-2">
        <BtnPosition title={"tuck"} setKey={"a"} setPosition={setPosition} />
        <BtnPosition title={"pike"} setKey={"z"} setPosition={setPosition} />
        <BtnPosition title={"straigt"} setKey={"e"} setPosition={setPosition} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <BtnTel title={"7"} setKey={"7"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"8"} setKey={"8"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"9"} setKey={"9"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"4"} setKey={"4"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"5"} setKey={"5"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"6"} setKey={"6"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"1"} setKey={"1"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"2"} setKey={"2"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"3"} setKey={"3"} skill={skill} setSkill={setSkill} />
        <BtnTel title={"0"} setKey={"0"} skill={skill} setSkill={setSkill} />
        <BtnTelReset
          title={"Reset"}
          setKey={"."}
          setSkill={setSkill}
          setPosition={setPosition}
        />
        <BtnTelValidate
          title={"Entr"}
          setKey={"Enter"}
          skill={skill}
          setSkill={setSkill}
          position={position}
          setPosition={setPosition}
        />
      </div>

      <div className="w-full border-2 rounded-lg py-4 px- flex gap-2 items-center justify-center capitalize">
        <span>{skill}</span>
        <span>{position}</span>
        <span>diff: {calc(Number(skill), position)}</span>
      </div>
    </div>
  );
}

export default TelCalculator;
