import React, { useState } from "react";
import BtnPosition from "./btn/BtnPosition";
import BtnTel from "./btn/BtnTel";
import BtnTelReset from "./btn/BtnTelReset";
import BtnTelValidate from "./btn/BtnTelValidate";
import ScreenTel from "./screen/ScreenTel";

type Props = {};

function TelCalculator({}: Props) {
  const [position, setPosition] = useState<string>("");
  const [skill, setSkill] = useState<string>("");
  const [routine, setRoutine] = useState<[{}]>([{}]);


  return (
    <section className="h-full w-full flex flex-col backdrop-blur-md bg-gradient-to-r from-gray-100 to-gray-300 sm:flex-row">
      <ScreenTel routine={routine} skill={skill} position={position} setRoutine={setRoutine} setSkill={setSkill} setPosition={setPosition}/>
      <div className="w-full h-1/3 grid gap-2 -translate-y-4 px-2 sm:h-full sm:translate-y-0">
        <div className="grid grid-cols-3 gap-2 text-xl">
        <BtnPosition
            title={"tuck"}
            setKey={"/"}
            setPosition={setPosition}
            className={"bg-stone-400"}
          />
          <BtnPosition
            title={"pike"}
            setKey={"*"}
            setPosition={setPosition}
            className={"bg-stone-500"}
          />
          <BtnPosition
            title={"straigt"}
            setKey={"-"}
            setPosition={setPosition}
            className={"bg-stone-600"}
          />
          <BtnTel title={"7"} setKey={"7"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"8"} setKey={"8"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"9"} setKey={"9"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"4"} setKey={"4"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"5"} setKey={"5"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"6"} setKey={"6"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"1"} setKey={"1"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"2"} setKey={"2"} skill={skill} setSkill={setSkill} />
          <BtnTel title={"3"} setKey={"3"} skill={skill} setSkill={setSkill} />
          <BtnTelReset
            title={"Reset"}
            setKey={"."}
            setSkill={setSkill}
            setPosition={setPosition}
          />
          <BtnTel title={"0"} setKey={"0"} skill={skill} setSkill={setSkill} />
          <BtnTelValidate
            title={"Entr"}
            setKey={"Enter"}
            skill={skill}
            setSkill={setSkill}
            position={position}
            setPosition={setPosition}
            routine={routine}
            setRoutine={setRoutine}
          />
        </div>
      </div>
    </section>
  );
}

export default TelCalculator;
