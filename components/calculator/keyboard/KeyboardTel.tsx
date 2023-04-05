import React from "react";
import BtnTelValidate from "./utils/BtnTelValidate";
import BtnTel from "./utils/BtnTel";
import BtnTelReset from "./utils/BtnTelReset";
import BtnTelPosition from "./utils/BtnTelPosition";
import BtnTelResetRoutine from "./utils/BtnTelResetRoutine";
import BtnTelCorrectSkill from "./utils/BtnTelCorrectSkill";
import BtnTelShowRoutine from "./utils/BtnTelShowRoutine";

type Props = {
  skill: string;
  setSkill: Function;
  position: string;
  setPosition: Function;
  routine: any[];
  setRoutine: Function;
  showRoutine:boolean;
  setShowRoutine:Function
};

function KeyboardTel({
  skill,
  setSkill,
  position,
  setPosition,
  routine,
  setRoutine,
  showRoutine,
  setShowRoutine
}: Props) {
  return (
    <div className="w-full  grid grids-row-6 grid-cols-3 gap-2 p-4 ">
      <BtnTelResetRoutine
        title={"Reset"}
        setKey={"Space"}
        setRoutine={setRoutine}
        setPosition={setPosition}
        setSkill={setSkill}
      />
      <BtnTelReset
        title={"AC"}
        setKey={"."}
        setSkill={setSkill}
        setPosition={setPosition}
      />
      <BtnTelShowRoutine title={'Routine'} showRoutine={showRoutine} setShowRoutine={setShowRoutine} />
      <BtnTelPosition
        title={"tuck"}
        setKey={"/"}
        setPosition={setPosition}
        className={"bg-stone-400"}
      />
      <BtnTelPosition
        title={"pike"}
        setKey={"*"}
        setPosition={setPosition}
        className={"bg-stone-500"}
      />
      <BtnTelPosition
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
      <BtnTelCorrectSkill
        title={"C"}
        setKey={""}
        skill={skill}
        setSkill={setSkill}
      />
      <BtnTel title={"0"} setKey={"0"} skill={skill} setSkill={setSkill} />
      <BtnTelValidate
        title={"Add"}
        setKey={"Enter"}
        skill={skill}
        setSkill={setSkill}
        position={position}
        setPosition={setPosition}
        routine={routine}
      />
    </div>
  );
}

export default KeyboardTel;
